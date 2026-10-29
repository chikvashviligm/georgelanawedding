/* Фоновая музыка и плавающая кнопка «звук вкл/выкл» в правом нижнем углу.
   Браузеры не дают сайту включать звук до первого касания, поэтому:
   1) при загрузке пробуем включить сразу (на компьютере иногда разрешено);
   2) если нельзя — музыка стартует от первого касания (обычно это нажатие на печать конверта).
   Если гость выключил музыку, выбор запоминается на этом устройстве. */
(function () {
  'use strict';
  var SRC = 'assets/audio/music.mp3';
  var KEY = 'gl_music_off';
  var LABEL = {
    on:  { ru: 'Выключить музыку', en: 'Turn music off', ka: 'მუსიკის გამორთვა', he: 'כיבוי המוזיקה' },
    off: { ru: 'Включить музыку',  en: 'Turn music on',  ka: 'მუსიკის ჩართვა',   he: 'הפעלת המוזיקה' }
  };

  function getOff() { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
  function setOff(v) { try { v ? localStorage.setItem(KEY, '1') : localStorage.removeItem(KEY); } catch (e) {} }

  var audio = new Audio(SRC);
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = 0.7;               // на iPhone громкость задаёт только телефон

  var wantOn = !getOff();           // хочет ли гость музыку
  var resumeOnShow = false;

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.id = 'music';
  btn.className = 'music';
  btn.innerHTML =
    '<span class="music-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span>' +
    '<svg class="music-off" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V6l10-2v11"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="15" r="2.5"/><path d="M3 3l18 18"/></svg>';
  document.body.appendChild(btn);

  function lang() {
    var l = document.documentElement.lang;
    return LABEL.on[l] ? l : 'en';
  }
  function render() {
    var playing = !audio.paused;
    btn.classList.toggle('is-on', playing);
    var t = (playing ? LABEL.on : LABEL.off)[lang()];
    btn.setAttribute('aria-label', t);
    btn.title = t;
    btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
  }

  function play() {
    var p = audio.play();
    if (p && p.catch) p.catch(function () { render(); });
    return p;
  }

  audio.addEventListener('play', render);
  audio.addEventListener('pause', render);

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (audio.paused) { wantOn = true; setOff(false); play(); }
    else { wantOn = false; setOff(true); audio.pause(); }
    detach();
  });

  /* первое касание страницы включает музыку */
  var EVENTS = ['pointerup', 'touchend', 'click', 'keydown'];
  function onFirst(e) {
    if (e.target === btn || btn.contains(e.target)) return;
    if (!wantOn) { detach(); return; }
    var p = play();
    if (p && p.then) p.then(detach, function () {}); else detach();
  }
  function detach() { EVENTS.forEach(function (ev) { document.removeEventListener(ev, onFirst, true); }); }
  EVENTS.forEach(function (ev) { document.addEventListener(ev, onFirst, true); });

  /* попытка включить сразу при открытии */
  if (wantOn) { var p0 = play(); if (p0 && p0.then) p0.then(detach, function () {}); }

  /* свернули вкладку — пауза, вернулись — продолжаем */
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { resumeOnShow = !audio.paused; audio.pause(); }
    else if (resumeOnShow && wantOn) { play(); }
  });

  /* подпись кнопки на языке страницы */
  new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  render();
})();
