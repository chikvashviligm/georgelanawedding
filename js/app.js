/* Сборка страницы: выбирает версию (телефон или компьютер), подключает гостя по коду из ссылки,
   переключает язык, отправляет ответы в таблицу. */
(function () {
  'use strict';
  var CFG = window.WEDDING_CONFIG || {};
  var LANGS = ['ru', 'en', 'ka', 'he'];
  var DESKTOP_MQ = '(min-width: 820px)';

  var TXT = {
    sendError: {
      ru: 'Не получилось отправить ответ. Проверьте интернет и попробуйте ещё раз.',
      en: 'We couldn’t send your reply. Please check your connection and try again.',
      ka: 'პასუხის გაგზავნა ვერ მოხერხდა. შეამოწმეთ ინტერნეტი და სცადეთ თავიდან.',
      he: 'לא הצלחנו לשלוח את התשובה. בדקו את החיבור ונסו שוב.'
    },
    calText: {
      ru: 'Свадьба Георгия и Ланы', en: 'George & Lana’s wedding',
      ka: 'გიორგისა და ლანას ქორწილი', he: 'החתונה של גיאורגי ולאנה'
    }
  };

  /* ---------- состояние ---------- */
  var params = new URLSearchParams(location.search);
  var code = (params.get('i') || params.get('g') ||
    // в демо-режиме (без scriptUrl) тестового гостя можно задать и через #test-ru
    (!CFG.scriptUrl && /^#test-/.test(location.hash) ? location.hash.slice(1) : '')).trim().toLowerCase();
  if (!CFG.scriptUrl) window.addEventListener('hashchange', function () { if (/^#test-/.test(location.hash)) location.reload(); });
  var storeKey = 'gl_opened_' + (code || 'all');
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  function phoneLang() {
    var list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ''];
    for (var i = 0; i < list.length; i++) {
      var l = String(list[i]).toLowerCase().slice(0, 2);
      if (l === 'iw') l = 'he';
      if (LANGS.indexOf(l) >= 0) return l;
    }
    return CFG.fallbackLang || 'en';
  }

  var S = {
    lang: phoneLang(),
    guest: null,          // { greeting, lang, hupa }
    heroShown: store.get(storeKey) === '1',
    desktop: window.matchMedia(DESKTOP_MQ).matches
  };

  /* ---------- гость по коду ---------- */
  function loadGuest() {
    if (!code) return Promise.resolve(null);
    if (!CFG.scriptUrl) return Promise.resolve((CFG.demoGuests || {})[code] || null);
    var cacheKey = 'gl_guest_' + code;
    try {
      var cached = sessionStorage.getItem(cacheKey);
      if (cached) return Promise.resolve(JSON.parse(cached));
    } catch (e) {}
    return fetch(CFG.scriptUrl + '?action=guest&code=' + encodeURIComponent(code))
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var g = d && d.ok && d.guest ? d.guest : null;
        try { sessionStorage.setItem(cacheKey, JSON.stringify(g)); } catch (e) {}
        return g;
      })
      .catch(function () { return null; });
  }

  /* ---------- отправка ответа ---------- */
  function sendRSVP(p) {
    var payload = {
      code: code,
      name: p.name,
      attend: p.attend,
      count: p.count,
      guests: p.guests,
      lang: p.lang
    };
    if (!CFG.scriptUrl) {
      if (window.console) console.info('[демо] ответ не отправлен, сайт ещё не подключён к таблице', payload);
      return new Promise(function (res) { setTimeout(res, 500); });
    }
    return fetch(CFG.scriptUrl, { method: 'POST', body: JSON.stringify(payload) })
      .then(function (r) { return r.json(); })
      .then(function (d) { if (!d || !d.ok) throw new Error('rsvp'); return d; });
  }

  var toastTimer = null;
  function toast(key, lang) {
    var el = document.getElementById('toast');
    if (!el) return;
    el.textContent = (TXT[key] && (TXT[key][lang] || TXT[key].ru)) || key;
    el.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
    el.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('on'); }, 5000);
  }

  /* ---------- событие для календаря (.ics) ---------- */
  function downloadIcs() {
    var lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//George & Lana//Wedding//RU', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:george-lana-wedding-20270121',
      'DTSTAMP:' + new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''),
      'DTSTART:20270121T120000Z',
      'DTEND:20270121T210000Z',
      'SUMMARY:' + TXT.calText[S.lang],
      'LOCATION:Marani Hall\\, Aghmashenebeli St 156\\, Mtskheta 3300\\, Georgia',
      'END:VEVENT', 'END:VCALENDAR'
    ];
    var blob = new Blob([lines.join('\r\n') + '\r\n'], { type: 'text/calendar;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'george-lana-21-01-2027.ics';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href="#ics"]');
    if (a) { e.preventDefault(); downloadIcs(); }
  });

  /* ---------- сборка страницы ---------- */
  var screenEl = document.getElementById('screen');
  var sectionsEl = document.getElementById('sections');
  var env = null, sec = null;

  function stageScale() {
    var w = window.innerWidth, h = window.innerHeight;
    return S.desktop ? Math.min(w / 1440, h / 900, 1.3) : Math.min(w / 390, h / 844, 1.2);
  }

  function heroZoom() {
    var w = window.innerWidth, h = window.innerHeight;
    var z = S.desktop ? Math.min(w / 1440, h / 900) : Math.min(1, h / 844, w / 390);
    return Math.max(S.desktop ? 0.72 : 0.82, Math.min(z, 1.15));
  }

  function envProps() {
    var personal = !!(S.guest && S.guest.greeting);
    return {
      embedded: true,
      lang: S.lang,
      personal: personal,
      address: personal ? S.guest.greeting : '',
      startScreen: S.heroShown ? 'hero' : 'envelope',
      reviewReplay: false,
      stageScale: stageScale(),
      heroZoom: heroZoom(),
      onLang: setLang,
      onHero: heroShown
    };
  }
  function secProps() {
    return {
      embedded: true,
      lang: S.lang,
      hupa: S.guest ? S.guest.hupa !== false : true,
      minH: 0,
      bg: 'arch'
    };
  }

  function applyDocLang() {
    document.documentElement.lang = S.lang;
    document.body.classList.toggle('locked', !S.heroShown);
    sectionsEl.hidden = !S.heroShown;
  }

  function mountAll() {
    if (env) env.destroy();
    if (sec) sec.destroy();
    var E = S.desktop ? 'DesktopEnv' : 'MobileEnv';
    var X = S.desktop ? 'DesktopSections' : 'MobileSections';
    env = window.DC.mount(screenEl, window.TPL[E], window.COMP[E], envProps());
    sec = window.DC.mount(sectionsEl, window.TPL[X], window.COMP[X], secProps());
    applyDocLang();
  }

  function setLang(l) {
    if (LANGS.indexOf(l) < 0) return;
    S.lang = l;
    env.update({ lang: l });
    sec.update({ lang: l });
    applyDocLang();
  }

  function heroShown() {
    if (S.heroShown) return;
    S.heroShown = true;
    store.set(storeKey, '1');
    applyDocLang();
  }

  window.WEDDING = { sendRSVP: sendRSVP, toast: toast };

  function applyGuest(g) {
    if (!g) return false;
    S.guest = g;
    if (g.lang && LANGS.indexOf(String(g.lang).toLowerCase()) >= 0) S.lang = String(g.lang).toLowerCase();
    return true;
  }

  /* по персональной ссылке ждём данные гостя (не дольше 2,5 с), чтобы конверт сразу был с обращением и на нужном языке */
  var mounted = false;
  var guestPromise = loadGuest();
  var giveUp = setTimeout(function () { if (!mounted) { mounted = true; mountAll(); } }, code ? 2500 : 0);
  guestPromise.then(function (g) {
    var changed = applyGuest(g);
    if (!mounted) { clearTimeout(giveUp); mounted = true; mountAll(); }
    else if (changed) { env.update(envProps()); sec.update(secProps()); applyDocLang(); }
    document.documentElement.classList.remove('loading');
  });

  var mq = window.matchMedia(DESKTOP_MQ);
  var onMq = function () {
    S.desktop = mq.matches;
    mountAll();
  };
  if (mq.addEventListener) mq.addEventListener('change', onMq); else mq.addListener(onMq);

  var rT = null;
  window.addEventListener('resize', function () {
    clearTimeout(rT);
    rT = setTimeout(function () { if (env) env.update({ stageScale: stageScale(), heroZoom: heroZoom() }); }, 80);
  });
})();
