/* Мини-рантайм для шаблонов макета: {{дырки}}, <sc-for>, <sc-if>, события, ref, setState.
   Шаблон компилируется один раз, при изменении состояния строится новое дерево
   и накладывается на старое через morphdom (фокус и анимации сохраняются). */
(function () {
  'use strict';

  var EVENT_MAP = {
    onclick: 'click', onchange: 'input', oninput: 'input',
    onmouseenter: 'mouseenter', onmouseleave: 'mouseleave',
    onfocus: 'focus', onblur: 'blur', onkeydown: 'keydown', onsubmit: 'submit'
  };
  var HOLE = /\{\{([^}]+)\}\}/g;

  function lookup(scope, path) {
    path = path.trim();
    if (path === 'true') return true;
    if (path === 'false') return false;
    var parts = path.split('.');
    var v = scope;
    for (var i = 0; i < parts.length; i++) {
      if (v == null) return undefined;
      v = v[parts[i]];
    }
    return v;
  }
  function interp(str, scope) {
    return str.replace(HOLE, function (_, p) {
      var v = lookup(scope, p);
      return v == null ? '' : String(v);
    });
  }
  function single(str) {
    var m = /^\s*\{\{([^}]+)\}\}\s*$/.exec(str);
    return m ? m[1] : null;
  }

  function build(node, scope, out) {
    var kids = node.childNodes;
    for (var i = 0; i < kids.length; i++) {
      var ch = kids[i];
      if (ch.nodeType === 3) {
        var txt = ch.textContent;
        out.appendChild(document.createTextNode(txt.indexOf('{{') >= 0 ? interp(txt, scope) : txt));
        continue;
      }
      if (ch.nodeType !== 1) continue;
      var tag = ch.localName;
      if (tag === 'sc-for') {
        var listPath = single(ch.getAttribute('list') || '');
        var list = listPath ? lookup(scope, listPath) : null;
        var as = ch.getAttribute('as') || 'item';
        if (list && list.length) {
          for (var j = 0; j < list.length; j++) {
            var sc = Object.create(scope);
            sc[as] = list[j];
            sc.$index = j;
            build(ch, sc, out);
          }
        }
        continue;
      }
      if (tag === 'sc-if') {
        var vp = single(ch.getAttribute('value') || '');
        if (vp && lookup(scope, vp)) build(ch, scope, out);
        continue;
      }
      var el = ch.namespaceURI && ch.namespaceURI !== 'http://www.w3.org/1999/xhtml'
        ? document.createElementNS(ch.namespaceURI, ch.tagName)
        : document.createElement(tag);
      var attrs = ch.attributes;
      for (var a = 0; a < attrs.length; a++) {
        var name = attrs[a].name, val = attrs[a].value;
        if (name.indexOf('hint-') === 0) continue;
        var ev = EVENT_MAP[name];
        if (ev) {
          var hp = single(val);
          var fn = hp ? lookup(scope, hp) : null;
          if (typeof fn === 'function') {
            if (ev === 'input' && !/^(input|textarea|select)$/.test(tag)) ev = 'change';
            (el.__h || (el.__h = {}))[ev] = fn;
          }
          continue;
        }
        if (name === 'ref') {
          var rp = single(val);
          var rf = rp ? lookup(scope, rp) : null;
          if (typeof rf === 'function') el.__ref = rf;
          continue;
        }
        try { el.setAttribute(name, val.indexOf('{{') >= 0 ? interp(val, scope) : val); } catch (e) {}
      }
      build(ch, scope, el);
      out.appendChild(el);
    }
  }

  function bind(el) {
    if (!el.__h || el.__bound) return;
    el.__bound = true;
    ['click', 'input', 'change', 'mouseenter', 'mouseleave', 'focus', 'blur', 'keydown', 'submit'].forEach(function (ev) {
      el.addEventListener(ev, function (e) {
        var h = el.__h && el.__h[ev];
        if (h) h(e);
      });
    });
  }
  function bindTree(root) {
    if (root.nodeType !== 1) return;
    bind(root);
    var all = root.querySelectorAll('*');
    for (var i = 0; i < all.length; i++) bind(all[i]);
  }
  function callRefs(root) {
    if (root.nodeType !== 1) return;
    if (root.__ref) root.__ref(root);
    var all = root.querySelectorAll('*');
    for (var i = 0; i < all.length; i++) if (all[i].__ref) all[i].__ref(all[i]);
  }

  function DCLogic(props) {
    this.props = props || {};
    this.state = {};
  }
  DCLogic.prototype.setState = function (partial) {
    var s = typeof partial === 'function' ? partial(this.state) : partial;
    for (var k in s) if (Object.prototype.hasOwnProperty.call(s, k)) this.state[k] = s[k];
    if (this.__schedule) this.__schedule();
  };

  function compile(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.content;
  }

  /* Монтирует компонент в контейнер. Возвращает объект с update(props) и destroy(). */
  function mount(container, tplHtml, ComponentClass, props) {
    var tpl = compile(tplHtml);
    var inst = new ComponentClass(props || {});
    var current = null;
    var queued = false;
    var alive = true;

    function renderNow() {
      queued = false;
      if (!alive) return;
      var vals = inst.renderVals();
      var frag = document.createDocumentFragment();
      build(tpl, vals, frag);
      var next = frag.firstElementChild || frag.firstChild;
      if (!current) {
        container.appendChild(next);
        current = next;
        bindTree(current);
      } else {
        window.morphdom(current, next, {
          onBeforeElUpdated: function (fromEl, toEl) {
            fromEl.__h = toEl.__h;
            fromEl.__ref = toEl.__ref;
            if (fromEl === document.activeElement && (fromEl.tagName === 'INPUT' || fromEl.tagName === 'TEXTAREA')) {
              // не трогаем значение поля, в котором гость сейчас печатает
              var a = toEl.attributes;
              for (var i = 0; i < a.length; i++) if (a[i].name !== 'value') fromEl.setAttribute(a[i].name, a[i].value);
              bind(fromEl);
              return false;
            }
            bind(fromEl);
            return true;
          },
          onNodeAdded: function (node) { bindTree(node); return node; }
        });
      }
      callRefs(current);
    }
    inst.__schedule = function () {
      if (queued) return;
      queued = true;
      (window.requestAnimationFrame || setTimeout)(renderNow);
    };
    renderNow();
    if (inst.componentDidMount) inst.componentDidMount();
    return {
      instance: inst,
      update: function (p) {
        for (var k in p) if (Object.prototype.hasOwnProperty.call(p, k)) inst.props[k] = p[k];
        inst.__schedule();
      },
      renderSync: renderNow,
      destroy: function () {
        alive = false;
        if (inst.componentWillUnmount) inst.componentWillUnmount();
        if (current && current.parentNode) current.parentNode.removeChild(current);
        current = null;
      }
    };
  }

  window.DCLogic = DCLogic;
  window.DC = { mount: mount };
})();
