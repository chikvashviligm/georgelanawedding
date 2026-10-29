/* Сгенерировано tools/build.py из файлов макета. Не править вручную. */
window.TPL = {};
window.COMP = {};
TPL.MobileEnv = "<div style=\"width: 100%; height: 100%; background: #F8F3EA; display: flex; flex-direction: column\">\n<div dir=\"{{dir}}\" lang=\"{{lang}}\" style=\"flex: none; width: 100%; height: 100%; position: relative; overflow: hidden; background: #F8F3EA; color: #3E322A; font-family: {{bodyFont}}\">\n\n<sc-if value=\"{{isEnv}}\" hint-placeholder-val=\"{{ true }}\">\n<div class=\"scr {{cls}}\" style=\"position: absolute; left: 50%; top: 50%; width: 390px; height: 844px; margin-left: -195px; margin-top: -422px; transform: scale({{stageScale}}); transform-origin: 50% 50%\">\n<div class=\"fadeable\" style=\"position: absolute; bottom: 614px; left: 24px; right: 24px; display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center\">\n<sc-if value=\"{{showAddress}}\" hint-placeholder-val=\"{{ true }}\">\n<p style=\"margin: 0; font-size: 36px; line-height: 1.22; font-weight: 300; font-style: {{addrStyle}}; color: #3E322A\">{{address}}</p>\n</sc-if>\n<p style=\"margin: 0; max-width: 300px; font-size: 17px; line-height: 1.5; font-weight: 300; color: #5F5046\">{{t.invite}}</p>\n</div>\n\n<div class=\"env\" style=\"position: absolute; left: 30px; top: 256px; width: 330px; height: 232px\">\n<div class=\"base\" style=\"position: absolute; inset: 0; background: #C9AC82; border-radius: 5px\"></div>\n\n<div class=\"letter\" style=\"position: absolute; left: 12px; top: 10px; width: 306px; height: 212px; z-index: 2\">\n<div style=\"position: absolute; inset: 0; background: #F8F3EA; border: 1px solid #E2D3BC; border-radius: 0 0 3px 3px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px\">\n<div style=\"width: 36px; height: 1px; background: #C9B080\"></div>\n<p style=\"margin: 6px 0 0; font-size: 18px; letter-spacing: 0.14em; color: #3E322A\">21.01.2027</p>\n<p style=\"margin: 0; font-size: 15px; color: #6E5885\">{{t.hdate}}</p>\n</div>\n<div class=\"top\" style=\"position: absolute; left: 0; top: -212px; width: 306px; height: 212px\">\n<div class=\"face inside\" style=\"background: #F8F3EA; border: 1px solid #E2D3BC; border-radius: 3px 3px 0 0; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: 14px; padding-bottom: 22px\">\n<img src=\"assets/img/logo.png\" alt=\"\" style=\"width: 70px; height: auto\">\n<p style=\"margin: 0; font-family: {{displayFont}}; font-size: {{cardNameSize}}px; color: #3E322A\">{{t.names}}</p>\n</div>\n<div class=\"face cover\" style=\"background: #F8F3EA; border: 1px solid #E2D3BC; border-radius: 3px; box-sizing: border-box; padding: 10px\">\n<div style=\"width: 100%; height: 100%; box-sizing: border-box; border: 1px solid #C9B080; display: flex; align-items: center; justify-content: center\">\n<img src=\"assets/img/logo.png\" alt=\"\" style=\"width: 96px; height: auto\">\n</div>\n</div>\n</div>\n</div>\n\n<div class=\"fl l\"><div class=\"face f\"></div><div class=\"face b\"></div></div>\n<div class=\"fl r\"><div class=\"face f\"></div><div class=\"face b\"></div></div>\n<div class=\"fl bo\"><div class=\"face f\"></div><div class=\"face b\"></div></div>\n<div class=\"fl t\"><div class=\"face f\"></div><div class=\"face b\"></div></div>\n<button class=\"seal\" type=\"button\" aria-label=\"{{t.openLabel}}\" onClick=\"{{open}}\" style=\"position: absolute; left: 123px; top: 74px; width: 84px; height: 84px; z-index: 6; padding: 0; border: 0; background: transparent; cursor: pointer\">\n<svg aria-hidden=\"true\" width=\"84\" height=\"84\" viewBox=\"0 0 120 120\" style=\"position: absolute; inset: 0\"><path fill=\"#6E5885\" d=\"M113.2,60.0 Q113.2,60.0 111.1,65.6 Q109.0,71.2 108.3,77.1 Q107.6,82.9 102.3,86.2 Q97.1,89.6 95.3,95.9 Q93.6,102.2 87.7,103.6 Q81.7,105.0 76.6,107.9 Q71.6,110.8 65.8,109.4 Q60.0,107.9 53.9,110.5 Q47.9,113.1 43.2,108.8 Q38.6,104.5 33.1,102.5 Q27.7,100.5 24.9,95.4 Q22.0,90.3 16.4,87.0 Q10.7,83.7 11.6,77.3 Q12.6,70.8 10.4,65.4 Q8.3,60.0 10.1,54.5 Q11.9,49.0 11.4,42.7 Q10.9,36.3 16.7,33.2 Q22.5,30.1 25.0,24.7 Q27.5,19.3 32.9,17.1 Q38.3,15.0 43.2,11.2 Q48.0,7.4 54.0,10.0 Q60.0,12.6 65.9,10.6 Q71.7,8.6 76.8,11.6 Q81.8,14.7 87.5,16.5 Q93.2,18.4 95.1,24.4 Q97.0,30.5 102.6,33.6 Q108.2,36.8 108.6,42.8 Q109.0,48.8 111.1,54.4 Z\"></path><circle cx=\"60\" cy=\"60\" r=\"38\" fill=\"none\" stroke=\"#C9B080\" stroke-opacity=\"0.45\" stroke-width=\"1\"></circle><circle cx=\"60\" cy=\"60\" r=\"35\" fill=\"#62507A\"></circle></svg>\n<img src=\"assets/img/logo.png\" alt=\"\" style=\"position: absolute; left: 23px; top: 24px; width: 38px; height: auto\">\n</button>\n</div>\n\n<div class=\"fadeable\" style=\"position: absolute; top: 528px; left: 28px; right: 28px; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center\">\n<p style=\"margin: 0; font-family: {{displayFont}}; font-size: {{envNameSize}}px; line-height: 1.15; color: #3E322A\">{{t.names}}</p>\n<p style=\"margin: 6px 0 0; font-size: 16px; letter-spacing: 0.12em; color: #3E322A\">21.01.2027</p>\n<p style=\"margin: 0; font-size: 15px; color: #6E5885\">{{t.hdate}}</p>\n</div>\n<p class=\"fadeable\" style=\"position: absolute; top: 700px; left: 40px; right: 40px; margin: 0; text-align: center; font-size: 15px; line-height: 1.5; color: #6E5885\">{{t.hint}}</p>\n</div>\n</sc-if>\n\n<sc-if value=\"{{isHero}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"hero\" style=\"position: absolute; inset: 0; background: #4E4038\">\n<div class=\"slide s1b\" style=\"position: absolute; inset: 0; background: #4E4038; overflow: hidden\">\n<img src=\"assets/img/hero-1.jpg\" alt=\"\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 42% 50%\">\n</div>\n<div class=\"slide s2b\" style=\"position: absolute; inset: 0; background: #4E4038; overflow: hidden\">\n<img src=\"assets/img/hero-2.jpg\" alt=\"\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 55% 50%\">\n</div>\n<div class=\"slide s3b\" style=\"position: absolute; inset: 0; background: #4E4038; overflow: hidden\">\n<img src=\"assets/img/hero-3.jpg\" alt=\"\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 60% 50%\">\n</div>\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(38,30,25,0.4) 0%, rgba(38,30,25,0) 22%, rgba(38,30,25,0.1) 42%, rgba(38,30,25,0.86) 100%)\"></div>\n<div class=\"hc\" style=\"zoom: {{heroZoom}}; position: absolute; left: 0; right: 0; bottom: 0; box-sizing: border-box; padding: 0 28px 44px; display: flex; flex-direction: column; align-items: center; text-align: center\">\n<img src=\"assets/img/logo.png\" alt=\"George &amp; Lana\" style=\"width: 92px; height: auto\">\n<h1 style=\"margin: 24px 0 0; font-family: {{displayFont}}; font-weight: 400; font-size: {{heroNameSize}}px; line-height: 1.1; color: #F8F3EA\">{{t.names}}</h1>\n<p style=\"margin: 18px 0 4px; font-size: 17px; letter-spacing: 0.14em; color: #EFE6D8\">21.01.2027</p>\n<p style=\"margin: 0; font-size: 15px; color: #C9B080\">{{t.hdate}}</p>\n<a href=\"#rsvp\" style=\"margin-top: 28px; box-sizing: border-box; width: 100%; max-width: 320px; min-height: 54px; display: flex; align-items: center; justify-content: center; background: #C9B080; color: #3E322A; text-decoration: none; font-size: 16px; letter-spacing: 0.04em; border-radius: 2px\">{{t.cta}}</a>\n<p style=\"margin: 12px 0 0; font-size: 14px; color: #EFE6D8\">{{t.rsvpBy}}</p>\n</div>\n</div>\n</sc-if>\n\n<div style=\"position: absolute; top: 0; left: 0; right: 0; z-index: 20; box-sizing: border-box; padding: 8px 14px; display: flex; justify-content: space-between; align-items: center\">\n<div style=\"display: flex; gap: 2px\" role=\"group\" aria-label=\"Язык\">\n<sc-for list=\"{{langs}}\" as=\"item\" hint-placeholder-count=\"4\">\n<button type=\"button\" onClick=\"{{item.pick}}\" aria-pressed=\"{{item.pressed}}\" style=\"{{item.style}}\">{{item.label}}</button>\n</sc-for>\n</div>\n<sc-if value=\"{{isEnv}}\" hint-placeholder-val=\"{{ true }}\">\n<button type=\"button\" onClick=\"{{skip}}\" style=\"min-height: 44px; padding: 0 10px; border: 0; background: transparent; font: inherit; font-size: 15px; color: #6E5885; cursor: pointer\">{{t.skip}}</button>\n</sc-if>\n<sc-if value=\"{{showReplay}}\" hint-placeholder-val=\"{{ false }}\">\n<button type=\"button\" onClick=\"{{replay}}\" style=\"min-height: 36px; padding: 0 12px; border: 1px solid rgba(248,243,234,0.6); border-radius: 18px; background: rgba(38,30,25,0.35); font-family: 'Spectral', serif; font-size: 14px; color: #F8F3EA; cursor: pointer\">Повторить анимацию</button>\n</sc-if>\n</div>\n\n</div>\n</div>";
COMP.MobileEnv = (function (DCLogic) {
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { step: null, lang: null, personal: null };
    this.timers = [];
  }
  componentWillUnmount() {
    this.timers.forEach(function (t) { clearTimeout(t); });
  }
  renderVals() {
    var self = this;
    var T = {
      ru: { address: 'Дорогие Давид и Мария', names: 'Георгий и Лана', hdate: '13 Шват 5787', hint: 'Нажмите на печать, чтобы открыть приглашение', skip: 'Пропустить', openLabel: 'Открыть конверт', invite: 'Приглашаем вас разделить с нами день нашей свадьбы', cta: 'Подтвердить участие', rsvpBy: 'Пожалуйста, ответьте до 15.11.2026' },
      en: { address: 'Dear David and Maria', names: 'George & Lana', hdate: '13 Shevat 5787', hint: 'Tap the seal to open your invitation', skip: 'Skip', openLabel: 'Open the envelope', invite: 'We invite you to share our wedding day with us', cta: 'Confirm attendance', rsvpBy: 'Kindly reply by 15.11.2026' },
      ka: { address: 'ძვირფასო დავით და მარიამ', names: 'გიორგი და ლანა', hdate: '13 შვატი 5787', hint: 'შეეხეთ ბეჭედს, რომ გახსნათ მოსაწვევი', skip: 'გამოტოვება', openLabel: 'კონვერტის გახსნა', invite: 'გიწვევთ, გაგვიზიაროთ ჩვენი ქორწილის დღე', cta: 'დასწრების დადასტურება', rsvpBy: 'გთხოვთ, გვიპასუხოთ 15.11.2026-მდე' },
      he: { address: 'דוד ומריה היקרים', names: 'גיאורגי ולאנה', hdate: 'י״ג שבט תשפ״ז', hint: 'לחצו על החותם כדי לפתוח את ההזמנה', skip: 'דלג', openLabel: 'פתיחת המעטפה', invite: 'אנו מזמינים אתכם לחלוק איתנו את יום חתונתנו', cta: 'אישור הגעה', rsvpBy: 'נא להשיב עד 15.11.2026' }
    };
    var FONT = {
      ru: { d: "'Forum', serif", b: "'Spectral', serif", hero: 44, env: 31, card: 32, italic: 'italic' },
      en: { d: "'Forum', serif", b: "'Spectral', serif", hero: 46, env: 33, card: 34, italic: 'italic' },
      ka: { d: "'Noto Serif Georgian', serif", b: "'Noto Serif Georgian', serif", hero: 32, env: 23, card: 24, italic: 'normal' },
      he: { d: "'Frank Ruhl Libre', serif", b: "'Frank Ruhl Libre', serif", hero: 44, env: 31, card: 32, italic: 'normal' }
    };
    var STEPS = [0, 350, 850, 1300, 2150, 3150];
    var HERO_AT = 4900;
    var HERO = STEPS.length + 1;
    var embedded = this.props.embedded === true;
    var lang = embedded ? (this.props.lang || 'ru') : (this.state.lang || this.props.lang || 'ru');
    if (!T[lang]) lang = 'ru';
    var step = this.state.step;
    if (step === null) step = this.props.startScreen === 'hero' ? HERO : 0;
    var isHero = step >= HERO;
    var cls = [];
    for (var i = 1; i <= Math.min(step, STEPS.length); i++) cls.push('s' + i);
    var labels = [['ru', 'Рус'], ['en', 'Eng'], ['ka', 'ქარ'], ['he', 'עב']];
    var langs = labels.map(function (l) {
      var active = l[0] === lang;
      var color = isHero ? (active ? '#F8F3EA' : 'rgba(248,243,234,0.78)') : (active ? '#6E5885' : '#5F5046');
      var line = active ? (isHero ? '#C9B080' : '#6E5885') : 'transparent';
      return {
        label: l[1],
        pressed: active ? 'true' : 'false',
        style: 'min-width: 44px; min-height: 44px; padding: 0 6px; border: 0; background: transparent; cursor: pointer; font-family: inherit; font-size: 15px; color: ' + color + '; text-decoration: underline; text-decoration-color: ' + line + '; text-underline-offset: 6px',
        pick: function () { if (embedded && self.props.onLang) self.props.onLang(l[0]); else self.setState({ lang: l[0] }); }
      };
    });
    var personal = (embedded || this.state.personal === null) ? this.props.personal !== false : this.state.personal;
    var reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function clearAll() { self.timers.forEach(function (t) { clearTimeout(t); }); self.timers = []; }
    return {
      heroZoom: this.props.heroZoom || 1,
      stageScale: this.props.stageScale || 1,
      address: this.props.address || "",
      t: T[lang],
      lang: lang,
      dir: lang === 'he' ? 'rtl' : 'ltr',
      displayFont: FONT[lang].d,
      bodyFont: FONT[lang].b,
      heroNameSize: FONT[lang].hero,
      envNameSize: FONT[lang].env,
      cardNameSize: FONT[lang].card,
      addrStyle: FONT[lang].italic,
      showPanel: !embedded,
      outerH: embedded ? 844 : 932,
      showAddress: personal && !!this.props.address,
      personalLabel: personal ? 'Ссылка: личная' : 'Ссылка: общая',
      togglePersonal: function () { self.setState({ personal: !personal }); },
      testLangs: labels.map(function (l) {
        var active = l[0] === lang;
        return {
          label: l[1],
          pressed: active ? 'true' : 'false',
          style: 'min-width: 52px; min-height: 40px; padding: 0 12px; border-radius: 20px; cursor: pointer; font-size: 14px; font-family: inherit; ' + (active ? 'border: 1px solid #C9B080; background: #C9B080; color: #2B2420' : 'border: 1px solid #6E5F52; background: transparent; color: #EFE6D8'),
          pick: function () { if (embedded && self.props.onLang) self.props.onLang(l[0]); else self.setState({ lang: l[0] }); }
        };
      }),
      cls: cls.join(' '),
      isHero: isHero,
      isEnv: !isHero,
      langs: langs,
      showReplay: isHero && this.props.reviewReplay !== false,
      open: function () {
        if (step !== 0) return;
        if (reduce) { self.setState({ step: HERO }); if (self.props.onHero) self.props.onHero(); return; }
        STEPS.forEach(function (t, idx) {
          self.timers.push(setTimeout(function () { self.setState({ step: idx + 1 }); }, t));
        });
        self.timers.push(setTimeout(function () { self.setState({ step: HERO }); if (self.props.onHero) self.props.onHero(); }, HERO_AT));
      },
      skip: function () { clearAll(); self.setState({ step: HERO }); if (self.props.onHero) self.props.onHero(); },
      replay: function () { clearAll(); self.setState({ step: 0 }); }
    };
  }
}
return Component;
})(window.DCLogic);
TPL.DesktopEnv = "<div style=\"width: 100%; height: 100%; background: #F8F3EA; display: flex; flex-direction: column\">\n<div dir=\"{{dir}}\" lang=\"{{lang}}\" style=\"flex: none; width: 100%; height: 100%; position: relative; overflow: hidden; background: #F8F3EA; color: #3E322A; font-family: {{bodyFont}}\">\n\n<sc-if value=\"{{isEnv}}\" hint-placeholder-val=\"{{ true }}\">\n<div class=\"scr {{cls}}\" style=\"position: absolute; left: 50%; top: 50%; width: 1440px; height: 900px; margin-left: -720px; margin-top: -450px; transform: scale({{stageScale}}); transform-origin: 50% 50%\">\n<div class=\"fadeable\" style=\"position: absolute; bottom: 656px; left: 0; right: 0; display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center\">\n<sc-if value=\"{{showAddress}}\" hint-placeholder-val=\"{{ true }}\">\n<p style=\"margin: 0; font-size: 46px; line-height: 1.2; font-weight: 300; font-style: {{addrStyle}}; color: #3E322A\">{{address}}</p>\n</sc-if>\n<p style=\"margin: 0; max-width: 560px; font-size: 20px; line-height: 1.5; font-weight: 300; color: #5F5046\">{{t.invite}}</p>\n</div>\n\n<div class=\"env\" style=\"position: absolute; left: 470px; top: 270px; width: 500px; height: 352px\">\n<div class=\"base\" style=\"position: absolute; inset: 0; background: #C9AC82; border-radius: 6px\"></div>\n\n<div class=\"letter\" style=\"position: absolute; left: 18px; top: 14px; width: 464px; height: 324px; z-index: 2\">\n<div style=\"position: absolute; inset: 0; background: #F8F3EA; border: 1px solid #E2D3BC; border-radius: 0 0 4px 4px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px\">\n<div style=\"width: 48px; height: 1px; background: #C9B080\"></div>\n<p style=\"margin: 8px 0 0; font-size: 26px; letter-spacing: 0.14em; color: #3E322A\">21.01.2027</p>\n<p style=\"margin: 0; font-size: 20px; color: #6E5885\">{{t.hdate}}</p>\n</div>\n<div class=\"top\" style=\"position: absolute; left: 0; top: -324px; width: 464px; height: 324px\">\n<div class=\"face inside\" style=\"background: #F8F3EA; border: 1px solid #E2D3BC; border-radius: 4px 4px 0 0; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: 20px; padding-bottom: 34px\">\n<img src=\"assets/img/logo.png\" alt=\"\" style=\"width: 104px; height: auto\">\n<p style=\"margin: 0; font-family: {{displayFont}}; font-size: {{cardNameSize}}px; color: #3E322A\">{{t.names}}</p>\n</div>\n<div class=\"face cover\" style=\"background: #F8F3EA; border: 1px solid #E2D3BC; border-radius: 4px; box-sizing: border-box; padding: 14px\">\n<div style=\"width: 100%; height: 100%; box-sizing: border-box; border: 1px solid #C9B080; display: flex; align-items: center; justify-content: center\">\n<img src=\"assets/img/logo.png\" alt=\"\" style=\"width: 140px; height: auto\">\n</div>\n</div>\n</div>\n</div>\n\n<div class=\"fl l\"><div class=\"face f\"></div><div class=\"face b\"></div></div>\n<div class=\"fl r\"><div class=\"face f\"></div><div class=\"face b\"></div></div>\n<div class=\"fl bo\"><div class=\"face f\"></div><div class=\"face b\"></div></div>\n<div class=\"fl t\"><div class=\"face f\"></div><div class=\"face b\"></div></div>\n<button class=\"seal\" type=\"button\" aria-label=\"{{t.openLabel}}\" onClick=\"{{open}}\" style=\"position: absolute; left: 190px; top: 116px; width: 120px; height: 120px; z-index: 6; padding: 0; border: 0; background: transparent; cursor: pointer\">\n<svg aria-hidden=\"true\" width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" style=\"position: absolute; inset: 0\"><path fill=\"#6E5885\" d=\"M113.2,60.0 Q113.2,60.0 111.1,65.6 Q109.0,71.2 108.3,77.1 Q107.6,82.9 102.3,86.2 Q97.1,89.6 95.3,95.9 Q93.6,102.2 87.7,103.6 Q81.7,105.0 76.6,107.9 Q71.6,110.8 65.8,109.4 Q60.0,107.9 53.9,110.5 Q47.9,113.1 43.2,108.8 Q38.6,104.5 33.1,102.5 Q27.7,100.5 24.9,95.4 Q22.0,90.3 16.4,87.0 Q10.7,83.7 11.6,77.3 Q12.6,70.8 10.4,65.4 Q8.3,60.0 10.1,54.5 Q11.9,49.0 11.4,42.7 Q10.9,36.3 16.7,33.2 Q22.5,30.1 25.0,24.7 Q27.5,19.3 32.9,17.1 Q38.3,15.0 43.2,11.2 Q48.0,7.4 54.0,10.0 Q60.0,12.6 65.9,10.6 Q71.7,8.6 76.8,11.6 Q81.8,14.7 87.5,16.5 Q93.2,18.4 95.1,24.4 Q97.0,30.5 102.6,33.6 Q108.2,36.8 108.6,42.8 Q109.0,48.8 111.1,54.4 Z\"></path><circle cx=\"60\" cy=\"60\" r=\"38\" fill=\"none\" stroke=\"#C9B080\" stroke-opacity=\"0.45\" stroke-width=\"1\"></circle><circle cx=\"60\" cy=\"60\" r=\"35\" fill=\"#62507A\"></circle></svg>\n<img src=\"assets/img/logo.png\" alt=\"\" style=\"position: absolute; left: 33px; top: 34px; width: 54px; height: auto\">\n</button>\n</div>\n\n<div class=\"fadeable\" style=\"position: absolute; top: 650px; left: 0; right: 0; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center\">\n<p style=\"margin: 0; font-family: {{displayFont}}; font-size: {{envNameSize}}px; line-height: 1.15; color: #3E322A\">{{t.names}}</p>\n<p style=\"margin: 6px 0 0; font-size: 18px; letter-spacing: 0.12em; color: #3E322A\">21.01.2027</p>\n<p style=\"margin: 0; font-size: 17px; color: #6E5885\">{{t.hdate}}</p>\n</div>\n<p class=\"fadeable\" style=\"position: absolute; top: 812px; left: 0; right: 0; margin: 0; text-align: center; font-size: 16px; line-height: 1.5; color: #6E5885\">{{t.hintDesk}}</p>\n</div>\n</sc-if>\n\n<sc-if value=\"{{isHero}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"hero\" style=\"position: absolute; inset: 0; background: #4E4038\">\n<div class=\"slide s1b\" style=\"position: absolute; inset: 0; background: #4E4038; overflow: hidden\">\n<img src=\"assets/img/hero-1.jpg\" alt=\"\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 25%\">\n</div>\n<div class=\"slide s2b\" style=\"position: absolute; inset: 0; background: #4E4038; overflow: hidden\">\n<img src=\"assets/img/hero-2.jpg\" alt=\"\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 33%\">\n</div>\n<div class=\"slide s3b\" style=\"position: absolute; inset: 0; background: #4E4038; overflow: hidden\">\n<img src=\"assets/img/hero-3.jpg\" alt=\"\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 23%\">\n</div>\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(38,30,25,0.35) 0%, rgba(38,30,25,0) 18%, rgba(38,30,25,0.15) 45%, rgba(38,30,25,0.84) 100%)\"></div>\n<div class=\"hc\" style=\"zoom: {{heroZoom}}; position: absolute; left: 0; right: 0; bottom: 72px; display: flex; flex-direction: column; align-items: center; text-align: center\">\n<img src=\"assets/img/logo.png\" alt=\"George &amp; Lana\" style=\"width: 128px; height: auto\">\n<h1 style=\"margin: 32px 0 0; font-family: {{displayFont}}; font-weight: 400; font-size: {{heroNameSize}}px; line-height: 1.05; color: #F8F3EA\">{{t.names}}</h1>\n<div style=\"margin-top: 24px; display: flex; align-items: center; gap: 22px\">\n<p style=\"margin: 0; font-size: 20px; letter-spacing: 0.14em; color: #EFE6D8\">21.01.2027</p>\n<div aria-hidden=\"true\" style=\"width: 1px; height: 22px; background: #C9B080\"></div>\n<p style=\"margin: 0; font-size: 18px; color: #C9B080\">{{t.hdate}}</p>\n</div>\n<a href=\"#rsvp\" style=\"margin-top: 36px; box-sizing: border-box; width: 340px; min-height: 56px; display: flex; align-items: center; justify-content: center; background: #C9B080; color: #3E322A; text-decoration: none; font-size: 17px; letter-spacing: 0.04em; border-radius: 2px\">{{t.cta}}</a>\n<p style=\"margin: 14px 0 0; font-size: 15px; color: #EFE6D8\">{{t.rsvpBy}}</p>\n</div>\n</div>\n</sc-if>\n\n<div style=\"position: absolute; top: 0; left: 0; right: 0; z-index: 20; box-sizing: border-box; padding: 16px 40px; display: flex; justify-content: space-between; align-items: center\">\n<div style=\"display: flex; gap: 4px\" role=\"group\" aria-label=\"Язык\">\n<sc-for list=\"{{langs}}\" as=\"item\" hint-placeholder-count=\"4\">\n<button type=\"button\" onClick=\"{{item.pick}}\" aria-pressed=\"{{item.pressed}}\" style=\"{{item.style}}\">{{item.label}}</button>\n</sc-for>\n</div>\n<sc-if value=\"{{isEnv}}\" hint-placeholder-val=\"{{ true }}\">\n<button type=\"button\" onClick=\"{{skip}}\" style=\"min-height: 44px; padding: 0 12px; border: 0; background: transparent; font: inherit; font-size: 16px; color: #6E5885; cursor: pointer\">{{t.skip}}</button>\n</sc-if>\n<sc-if value=\"{{showReplay}}\" hint-placeholder-val=\"{{ false }}\">\n<button type=\"button\" onClick=\"{{replay}}\" style=\"min-height: 40px; padding: 0 16px; border: 1px solid rgba(248,243,234,0.6); border-radius: 20px; background: rgba(38,30,25,0.35); font-family: 'Spectral', serif; font-size: 15px; color: #F8F3EA; cursor: pointer\">Повторить анимацию</button>\n</sc-if>\n</div>\n\n</div>\n</div>";
COMP.DesktopEnv = (function (DCLogic) {
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { step: null, lang: null, personal: null };
    this.timers = [];
  }
  componentWillUnmount() {
    this.timers.forEach(function (t) { clearTimeout(t); });
  }
  renderVals() {
    var self = this;
    var T = {
      ru: { address: 'Дорогие Давид и Мария', names: 'Георгий и Лана', hdate: '13 Шват 5787', hintDesk: 'Нажмите на печать, чтобы открыть приглашение', skip: 'Пропустить', openLabel: 'Открыть конверт', invite: 'Приглашаем вас разделить с нами день нашей свадьбы', cta: 'Подтвердить участие', rsvpBy: 'Пожалуйста, ответьте до 15.11.2026' },
      en: { address: 'Dear David and Maria', names: 'George & Lana', hdate: '13 Shevat 5787', hintDesk: 'Click the seal to open your invitation', skip: 'Skip', openLabel: 'Open the envelope', invite: 'We invite you to share our wedding day with us', cta: 'Confirm attendance', rsvpBy: 'Kindly reply by 15.11.2026' },
      ka: { address: 'ძვირფასო დავით და მარიამ', names: 'გიორგი და ლანა', hdate: '13 შვატი 5787', hintDesk: 'დააჭირეთ ბეჭედს, რომ გახსნათ მოსაწვევი', skip: 'გამოტოვება', openLabel: 'კონვერტის გახსნა', invite: 'გიწვევთ, გაგვიზიაროთ ჩვენი ქორწილის დღე', cta: 'დასწრების დადასტურება', rsvpBy: 'გთხოვთ, გვიპასუხოთ 15.11.2026-მდე' },
      he: { address: 'דוד ומריה היקרים', names: 'גיאורגי ולאנה', hdate: 'י״ג שבט תשפ״ז', hintDesk: 'לחצו על החותם כדי לפתוח את ההזמנה', skip: 'דלג', openLabel: 'פתיחת המעטפה', invite: 'אנו מזמינים אתכם לחלוק איתנו את יום חתונתנו', cta: 'אישור הגעה', rsvpBy: 'נא להשיב עד 15.11.2026' }
    };
    var FONT = {
      ru: { d: "'Forum', serif", b: "'Spectral', serif", hero: 92, env: 40, card: 46, italic: 'italic' },
      en: { d: "'Forum', serif", b: "'Spectral', serif", hero: 96, env: 42, card: 48, italic: 'italic' },
      ka: { d: "'Noto Serif Georgian', serif", b: "'Noto Serif Georgian', serif", hero: 64, env: 30, card: 34, italic: 'normal' },
      he: { d: "'Frank Ruhl Libre', serif", b: "'Frank Ruhl Libre', serif", hero: 92, env: 40, card: 46, italic: 'normal' }
    };
    var STEPS = [0, 350, 850, 1300, 2150, 3150];
    var HERO_AT = 4900;
    var HERO = STEPS.length + 1;
    var embedded = this.props.embedded === true;
    var lang = embedded ? (this.props.lang || 'ru') : (this.state.lang || this.props.lang || 'ru');
    if (!T[lang]) lang = 'ru';
    var step = this.state.step;
    if (step === null) step = this.props.startScreen === 'hero' ? HERO : 0;
    var isHero = step >= HERO;
    var cls = [];
    for (var i = 1; i <= Math.min(step, STEPS.length); i++) cls.push('s' + i);
    var labels = [['ru', 'Рус'], ['en', 'Eng'], ['ka', 'ქარ'], ['he', 'עב']];
    var langs = labels.map(function (l) {
      var active = l[0] === lang;
      var color = isHero ? (active ? '#F8F3EA' : 'rgba(248,243,234,0.78)') : (active ? '#6E5885' : '#5F5046');
      var line = active ? (isHero ? '#C9B080' : '#6E5885') : 'transparent';
      return {
        label: l[1],
        pressed: active ? 'true' : 'false',
        style: 'min-width: 48px; min-height: 44px; padding: 0 8px; border: 0; background: transparent; cursor: pointer; font-family: inherit; font-size: 16px; color: ' + color + '; text-decoration: underline; text-decoration-color: ' + line + '; text-underline-offset: 6px',
        pick: function () { if (embedded && self.props.onLang) self.props.onLang(l[0]); else self.setState({ lang: l[0] }); }
      };
    });
    var personal = (embedded || this.state.personal === null) ? this.props.personal !== false : this.state.personal;
    var reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function clearAll() { self.timers.forEach(function (t) { clearTimeout(t); }); self.timers = []; }
    return {
      heroZoom: this.props.heroZoom || 1,
      stageScale: this.props.stageScale || 1,
      address: this.props.address || "",
      t: T[lang],
      lang: lang,
      dir: lang === 'he' ? 'rtl' : 'ltr',
      displayFont: FONT[lang].d,
      bodyFont: FONT[lang].b,
      heroNameSize: FONT[lang].hero,
      envNameSize: FONT[lang].env,
      cardNameSize: FONT[lang].card,
      addrStyle: FONT[lang].italic,
      showPanel: !embedded,
      outerH: embedded ? 900 : 988,
      showAddress: personal && !!this.props.address,
      personalLabel: personal ? 'Ссылка: личная' : 'Ссылка: общая',
      togglePersonal: function () { self.setState({ personal: !personal }); },
      testLangs: labels.map(function (l) {
        var active = l[0] === lang;
        return {
          label: l[1],
          pressed: active ? 'true' : 'false',
          style: 'min-width: 52px; min-height: 40px; padding: 0 12px; border-radius: 20px; cursor: pointer; font-size: 14px; font-family: inherit; ' + (active ? 'border: 1px solid #C9B080; background: #C9B080; color: #2B2420' : 'border: 1px solid #6E5F52; background: transparent; color: #EFE6D8'),
          pick: function () { if (embedded && self.props.onLang) self.props.onLang(l[0]); else self.setState({ lang: l[0] }); }
        };
      }),
      cls: cls.join(' '),
      isHero: isHero,
      isEnv: !isHero,
      langs: langs,
      showReplay: isHero && this.props.reviewReplay !== false,
      open: function () {
        if (step !== 0) return;
        if (reduce) { self.setState({ step: HERO }); if (self.props.onHero) self.props.onHero(); return; }
        STEPS.forEach(function (t, idx) {
          self.timers.push(setTimeout(function () { self.setState({ step: idx + 1 }); }, t));
        });
        self.timers.push(setTimeout(function () { self.setState({ step: HERO }); if (self.props.onHero) self.props.onHero(); }, HERO_AT));
      },
      skip: function () { clearAll(); self.setState({ step: HERO }); if (self.props.onHero) self.props.onHero(); },
      replay: function () { clearAll(); self.setState({ step: 0 }); }
    };
  }
}
return Component;
})(window.DCLogic);
TPL.MobileSections = "<div style=\"width: 100%; min-height: {{rootMinH}}; display: flex; flex-direction: column; background: #F8F3EA; color: #3E322A; font-family: 'Spectral', serif\">\n\n<div dir=\"{{dir}}\" lang=\"{{lang}}\" style=\"flex: 1 0 auto; display: flex; flex-direction: column; font-family: {{bodyFont}}\">\n\n<section style=\"position: relative; isolation: isolate; padding: 64px 24px 56px; text-align: center\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.welcome}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<div style=\"display: flex; flex-direction: column; align-items: center; gap: 22px\">\n<img src=\"assets/img/logo.png\" alt=\"\" style=\"width: 72px; height: auto\">\n<p style=\"margin: 0; font-size: 21px; line-height: 1.55; font-weight: 300; font-style: {{italic}}; color: #3E322A\">{{t.welcome}}</p>\n<p style=\"margin: 0; font-family: {{displayFont}}; font-size: 23px; line-height: 1.3; color: #6E5885; white-space: pre-line\">{{t.sign}}</p>\n</div>\n</section>\n\n<section style=\"position: relative; isolation: isolate; padding: 40px 16px 36px; background: #ECE4F0; text-align: center\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.countdown}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<h2 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: 26px; line-height: 1.2; color: #3E322A\">{{t.cdTitle}}</h2>\n<div style=\"margin-top: 18px; display: flex; gap: 8px\">\n<sc-for list=\"{{countdown}}\" as=\"item\" hint-placeholder-count=\"4\">\n<div style=\"flex: 1 1 0; min-width: 0; box-sizing: border-box; padding: 12px 2px 10px; background: #F8F3EA; border: 1px solid #D9CCE3; border-radius: 4px; display: flex; flex-direction: column; align-items: center; gap: 6px\">\n<span style=\"font-family: 'Forum', serif; font-size: 34px; line-height: 1; color: #6E5885\">{{item.value}}</span>\n<span style=\"font-size: 12px; color: #5F5046\">{{item.unit}}</span>\n</div>\n</sc-for>\n</div>\n<p style=\"margin: 22px 0 10px; font-size: 14px; color: #3E322A\">{{t.calTitle}}</p>\n<div style=\"display: flex; gap: 8px\">\n<a href=\"{{gcalUrl}}\" style=\"flex: 1 1 0; min-width: 0; min-height: 44px; box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; padding: 0 8px; border: 1px solid #6E5885; border-radius: 22px; background: #F8F3EA; color: #3E322A; text-decoration: none; font-size: 14px; white-space: nowrap\">{{t.gcal}}</a>\n<a href=\"#ics\" style=\"flex: 1 1 0; min-width: 0; min-height: 44px; box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center; padding: 0 8px; border: 1px solid #6E5885; border-radius: 22px; background: #F8F3EA; color: #3E322A; text-decoration: none; font-size: 14px; white-space: nowrap\">{{t.ics}}</a>\n</div>\n</section>\n\n<section style=\"position: relative; isolation: isolate; padding: 64px 24px; background: #3E322A\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.program}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<h2 style=\"margin: 0; text-align: center; font-family: {{displayFont}}; font-weight: 400; font-size: 32px; line-height: 1.2; color: #EFE6D8\">{{t.progTitle}}</h2>\n<ol style=\"list-style: none; margin: 36px auto 0; padding: 0; width: fit-content; max-width: 100%\">\n<sc-for list=\"{{program}}\" as=\"item\" hint-placeholder-count=\"4\">\n<li style=\"position: relative; display: flex; align-items: flex-start; gap: 18px; padding-bottom: {{item.pad}}\">\n<sc-if value=\"{{item.line}}\" hint-placeholder-val=\"{{ true }}\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset-inline-start: 15px; top: 32px; bottom: 0; width: 1px; background: #C9B080\"></div>\n</sc-if>\n<div aria-hidden=\"true\" style=\"flex: none; position: relative; width: 32px; height: 32px; box-sizing: border-box; border: 1.5px solid #C9B080; border-radius: 50%; background: #3E322A; display: flex; align-items: center; justify-content: center\">\n<div style=\"width: 10px; height: 10px; border-radius: 50%; background: #C9B080\"></div>\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 6px; padding-top: 2px\">\n<span style=\"font-family: 'Forum', serif; font-size: 30px; line-height: 1; color: #C9B080\">{{item.time}}</span>\n<span style=\"font-size: 19px; line-height: 1.35; color: #EFE6D8\">{{item.label}}</span>\n</div>\n</li>\n</sc-for>\n</ol>\n</section>\n\n<sc-if value=\"{{showHupa}}\" hint-placeholder-val=\"{{ true }}\">\n<section style=\"position: relative; isolation: isolate; z-index: 2; padding: 56px 20px; background: #ECE4F0\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.hupa}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<h2 style=\"margin: 0; text-align: center; font-family: {{displayFont}}; font-weight: 400; font-size: 32px; line-height: 1.2; color: #3E322A\">{{t.hupaTitle}}</h2>\n<p style=\"margin: 18px 0 0; text-align: center; font-size: 17px; line-height: 1.6; color: #3E322A\">{{t.hupaWhat}}</p>\n<p style=\"margin: 12px 0 0; text-align: center; font-size: 16px; line-height: 1.55; color: #5F5046\">{{t.hupaIntro}}</p>\n<div style=\"margin-top: 28px; display: flex; flex-direction: column; gap: 12px\">\n<sc-for list=\"{{hupaItems}}\" as=\"item\" hint-placeholder-count=\"4\">\n<div style=\"position: relative; box-sizing: border-box; padding: 20px; background: #F8F3EA; border-radius: 4px; z-index: {{item.z}}\">\n<div style=\"display: flex; align-items: center; gap: 10px\">\n<h3 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: 24px; line-height: 1.2; color: #6E5885\">{{item.t}}</h3>\n<sc-if value=\"{{item.hasInfo}}\" hint-placeholder-val=\"{{ false }}\">\n<button type=\"button\" aria-label=\"{{t.infoAria}}\" aria-expanded=\"{{item.infoExpanded}}\" onClick=\"{{item.infoToggle}}\" style=\"flex: none; width: 32px; height: 32px; border: 1px solid #A58CBB; border-radius: 16px; background: transparent; color: #6E5885; font-family: 'Spectral', serif; font-size: 16px; font-style: italic; line-height: 1; cursor: pointer; display: inline-flex; align-items: center; justify-content: center\">i</button>\n</sc-if>\n</div>\n<sc-if value=\"{{item.infoOpen}}\" hint-placeholder-val=\"{{ false }}\">\n<div role=\"tooltip\" style=\"position: absolute; top: 62px; left: 8px; right: 8px; box-sizing: border-box; padding: 16px 18px; background: #3E322A; color: #EFE6D8; border-radius: 4px; box-shadow: 0 10px 30px rgba(62,50,42,0.25); text-align: start\">\n<p style=\"margin: 0 0 10px; font-family: {{displayFont}}; font-size: 19px; color: #C9B080\">{{item.t}}</p>\n<ol style=\"margin: 0; padding-inline-start: 20px; display: flex; flex-direction: column; gap: 6px\">\n<sc-for list=\"{{item.info}}\" as=\"line\" hint-placeholder-count=\"7\">\n<li style=\"font-size: 14px; line-height: 1.5\">{{line.text}}</li>\n</sc-for>\n</ol>\n</div>\n</sc-if>\n<p style=\"margin: 10px 0 0; font-size: 16px; line-height: 1.55; color: #3E322A\">{{item.d}}</p>\n</div>\n</sc-for>\n</div>\n</section>\n</sc-if>\n\n<section style=\"position: relative; isolation: isolate; padding: 64px 24px\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.venue}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<h2 style=\"margin: 0; text-align: center; font-family: {{displayFont}}; font-weight: 400; font-size: 32px; line-height: 1.2; color: #3E322A\">{{t.venueTitle}}</h2>\n<div style=\"margin-top: 28px; position: relative; height: 280px; background: #E2D3BC; border-radius: 4px; overflow: hidden\">\n<img src=\"assets/img/venue.jpg\" alt=\"Marani Hall\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 36%\">\n</div>\n<p style=\"margin: 24px 0 0; font-family: 'Forum', serif; font-size: 38px; line-height: 1.05; color: #3E322A\">Marani Hall</p>\n<p dir=\"ltr\" style=\"margin: 10px 0 0; font-size: 17px; line-height: 1.5; color: #3E322A; text-align: start\">Aghmashenebeli St 156, Mtskheta 3300, Georgia</p>\n<p style=\"margin: 8px 0 0; font-size: 15px; line-height: 1.5; color: #5F5046\">{{t.inKa}}: <span style=\"font-family: 'Noto Serif Georgian', serif; color: #3E322A\">მცხეთა, დავით აღმაშენებლის ქუჩა 156</span></p>\n<button type=\"button\" onClick=\"{{copyAddress}}\" style=\"margin-top: 18px; width: 100%; min-height: 48px; padding: 0 16px; border: 1px solid #3E322A; border-radius: 2px; background: transparent; color: #3E322A; font-family: inherit; font-size: 16px; cursor: pointer\">{{copyLabel}}</button>\n<p style=\"margin: 22px 0 10px; font-size: 15px; color: #5F5046\">{{t.maps}}</p>\n<div style=\"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px\">\n<a href=\"https://www.google.com/maps/search/?api=1&amp;query=Marani%20Hall%2C%20Aghmashenebeli%20St%20156%2C%20Mtskheta\" style=\"min-height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 22px; background: #E2D3BC; color: #3E322A; text-decoration: none; font-size: 15px\">Google Maps</a>\n<a href=\"https://maps.apple.com/?q=Marani%20Hall&amp;address=Aghmashenebeli%20St%20156%2C%20Mtskheta%203300%2C%20Georgia\" style=\"min-height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 22px; background: #E2D3BC; color: #3E322A; text-decoration: none; font-size: 15px\">Apple Maps</a>\n<a href=\"https://waze.com/ul?q=Marani%20Hall%20Mtskheta&amp;navigate=yes\" style=\"min-height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 22px; background: #E2D3BC; color: #3E322A; text-decoration: none; font-size: 15px\">Waze</a>\n<a href=\"https://yandex.com/maps/?text=Marani%20Hall%2C%20Aghmashenebeli%20St%20156%2C%20Mtskheta\" style=\"min-height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 22px; background: #E2D3BC; color: #3E322A; text-decoration: none; font-size: 15px\">{{t.yandex}}</a>\n</div>\n</section>\n\n<section style=\"position: relative; isolation: isolate; padding: 72px 24px; background: #3E322A; text-align: center\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.dress}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<p style=\"margin: 0; font-size: 16px; color: #CDBFB0\">{{t.dress}}</p>\n<p style=\"margin: 12px 0 0; font-family: 'Forum', serif; font-size: 64px; line-height: 1; color: #C9B080\">Black Tie</p>\n<p style=\"margin: 18px 0 0; font-size: 18px; line-height: 1.6; color: #EFE6D8; white-space: pre-line\">{{t.dressSub}}</p>\n</section>\n\n<section style=\"position: relative; isolation: isolate; padding: 64px 20px\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.tips}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<h2 style=\"margin: 0; text-align: center; font-family: {{displayFont}}; font-weight: 400; font-size: 30px; line-height: 1.2; color: #3E322A\">{{t.tipsTitle}}</h2>\n<div style=\"margin-top: 28px; display: flex; flex-direction: column; gap: 12px\">\n\n<div style=\"box-sizing: border-box; padding: 22px 20px; border: 1px solid #E2D3BC; border-radius: 4px; display: flex; flex-direction: column; gap: 10px\">\n<div style=\"display: flex; align-items: center; gap: 12px\">\n<svg aria-hidden=\"true\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#6E5885\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 17h14M5 17v-4l2-5h10l2 5v4M5 17v2M19 17v2\"></path><circle cx=\"8\" cy=\"14\" r=\"1\"></circle><circle cx=\"16\" cy=\"14\" r=\"1\"></circle></svg>\n<h3 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: 24px; color: #3E322A\">{{t.taxiT}}</h3>\n</div>\n<p style=\"margin: 0; font-size: 16px; line-height: 1.6; color: #3E322A\">{{t.taxiD}}</p>\n</div>\n\n<div style=\"box-sizing: border-box; padding: 22px 20px; border: 1px solid #E2D3BC; border-radius: 4px; display: flex; flex-direction: column; gap: 10px\">\n<div style=\"display: flex; align-items: center; gap: 12px\">\n<svg aria-hidden=\"true\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#6E5885\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 19v-3M10 19v-6M15 19v-9M20 19V7\"></path></svg>\n<h3 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: 24px; color: #3E322A\">{{t.netT}}</h3>\n</div>\n<p style=\"margin: 0; font-size: 16px; line-height: 1.6; color: #3E322A\">{{t.netD}}</p>\n<div style=\"margin-top: 4px; display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 48px; box-sizing: border-box; padding: 4px 4px 4px 14px; border: 1px dashed #A58CBB; border-radius: 4px\">\n<span style=\"font-size: 15px; color: #3E322A\">{{t.promo}}: <span style=\"color: #6E5885\">{{promoValue}}</span></span>\n<button type=\"button\" onClick=\"{{copyPromo}}\" aria-label=\"{{promoAria}}\" title=\"{{promoAria}}\" style=\"width: 40px; height: 40px; flex: none; display: inline-flex; align-items: center; justify-content: center; border: 0; border-radius: 4px; background: transparent; color: #6E5885; cursor: pointer\">\n<sc-if value=\"{{promoCopied}}\" hint-placeholder-val=\"{{ false }}\">\n<svg aria-hidden=\"true\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.5l4.5 4.5L19 7.5\"></path></svg>\n</sc-if>\n<sc-if value=\"{{promoNotCopied}}\" hint-placeholder-val=\"{{ true }}\">\n<svg aria-hidden=\"true\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"9\" y=\"9\" width=\"11\" height=\"11\" rx=\"2\"></rect><path d=\"M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3\"></path></svg>\n</sc-if>\n</button>\n</div>\n<a href=\"https://unisim.net/?promocode=glwedding\" style=\"min-height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 22px; background: #E2D3BC; color: #3E322A; text-decoration: none; font-size: 15px\">{{t.unisim}}</a>\n</div>\n\n<div style=\"box-sizing: border-box; padding: 22px 20px; border: 1px solid #E2D3BC; border-radius: 4px; display: flex; flex-direction: column; gap: 10px\">\n<div style=\"display: flex; align-items: center; gap: 12px\">\n<svg aria-hidden=\"true\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#6E5885\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9.5 4.5L12 6l2.5-1.5M9.5 19.5L12 18l2.5 1.5\"></path></svg>\n<h3 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: 24px; color: #3E322A\">{{t.weatherT}}</h3>\n</div>\n<p style=\"margin: 0; font-size: 16px; line-height: 1.6; color: #3E322A\">{{t.weatherD}}</p>\n</div>\n\n<div style=\"box-sizing: border-box; padding: 22px 20px; border: 1px solid #E2D3BC; border-radius: 4px; display: flex; flex-direction: column; gap: 10px\">\n<div style=\"display: flex; align-items: center; gap: 12px\">\n<svg aria-hidden=\"true\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#6E5885\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"9\" cy=\"9\" r=\"5.5\"></circle><path d=\"M14.5 8.6a5.5 5.5 0 1 1-5.9 5.9\"></path></svg>\n<h3 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: 24px; color: #3E322A\">{{t.moneyT}}</h3>\n</div>\n<p style=\"margin: 0; font-size: 16px; line-height: 1.6; color: #3E322A\">{{t.moneyD}}</p>\n</div>\n\n</div>\n</section>\n\n<section style=\"position: relative; isolation: isolate; padding: 56px 0 48px; background: #EFE6D8\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.todo}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<div style=\"padding: 0 24px\">\n<h2 style=\"margin: 0; text-align: center; font-family: {{displayFont}}; font-weight: 400; font-size: 30px; line-height: 1.2; color: #3E322A\">{{t.todoTitle}}</h2>\n<p style=\"margin: 10px 0 0; text-align: center; font-size: 16px; line-height: 1.55; color: #5F5046\">{{t.todoSub}}</p>\n</div>\n<div role=\"tablist\" aria-label=\"{{t.todoTitle}}\" style=\"margin-top: 22px; display: flex; flex-wrap: nowrap; gap: 8px; overflow-x: auto; padding: 0 24px 4px; scroll-padding-inline: 24px\">\n<sc-for list=\"{{todoCats}}\" as=\"item\" hint-placeholder-count=\"5\">\n<button type=\"button\" role=\"tab\" aria-selected=\"{{item.selected}}\" onClick=\"{{item.pick}}\" style=\"{{item.style}}\">{{item.label}}</button>\n</sc-for>\n</div>\n<div ref=\"{{setCar}}\" style=\"margin-top: 18px; display: flex; gap: 12px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: 24px; padding: 4px 24px 12px; box-sizing: border-box\">\n<sc-for list=\"{{todoItems}}\" as=\"item\" hint-placeholder-count=\"4\">\n<div style=\"flex: 0 0 286px; scroll-snap-align: start; box-sizing: border-box; background: #F8F3EA; border-radius: 4px; overflow: hidden; display: flex; flex-direction: column\">\n<div style=\"position: relative; height: 140px; background: {{item.tint}}; overflow: hidden\">\n<sc-if value=\"{{item.hasPhoto}}\" hint-placeholder-val=\"{{ true }}\"><img src=\"{{item.photo}}\" alt=\"{{item.name}}\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover\"></sc-if>\n<sc-if value=\"{{item.noPhoto}}\" hint-placeholder-val=\"{{ false }}\"><span style=\"position: absolute; left: 14px; bottom: 12px; font-size: 12px; color: #5F5046\">Фото — добавим позже</span></sc-if>\n</div>\n<div style=\"flex: 1; box-sizing: border-box; padding: 16px 18px 18px; display: flex; flex-direction: column; gap: 8px\">\n<h3 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: 22px; line-height: 1.2; color: #3E322A\">{{item.name}}</h3>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.5; color: #3E322A\">{{item.desc}}</p>\n<a href=\"{{item.map}}\" style=\"margin-top: auto; align-self: flex-start; min-height: 40px; display: inline-flex; align-items: center; padding: 0 14px; border-radius: 20px; background: #E2D3BC; color: #3E322A; text-decoration: none; font-size: 14px\">{{t.mapLbl}}</a>\n</div>\n</div>\n</sc-for>\n</div>\n<div style=\"margin-top: 6px; display: flex; justify-content: center; gap: 12px\">\n<button type=\"button\" aria-label=\"{{t.prevLbl}}\" onClick=\"{{carPrev}}\" style=\"width: 44px; height: 44px; border: 1px solid #8A7867; border-radius: 22px; background: transparent; color: #3E322A; cursor: pointer; display: inline-flex; align-items: center; justify-content: center\">\n<svg aria-hidden=\"true\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"{{chevFlip}}\"><path d=\"M15 5l-7 7 7 7\"></path></svg>\n</button>\n<button type=\"button\" aria-label=\"{{t.nextLbl}}\" onClick=\"{{carNext}}\" style=\"width: 44px; height: 44px; border: 1px solid #8A7867; border-radius: 22px; background: transparent; color: #3E322A; cursor: pointer; display: inline-flex; align-items: center; justify-content: center\">\n<svg aria-hidden=\"true\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"{{chevFlip}}\"><path d=\"M9 5l7 7-7 7\"></path></svg>\n</button>\n</div>\n</section>\n\n<section id=\"rsvp\" style=\"position: relative; isolation: isolate; padding: 56px 20px; background: #ECE4F0\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.rsvp}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<h2 style=\"margin: 0; text-align: center; font-family: {{displayFont}}; font-weight: 400; font-size: 30px; line-height: 1.2; color: #3E322A\">{{t.rsvpTitle}}</h2>\n<p style=\"margin: 12px 0 0; text-align: center; font-size: 16px; line-height: 1.5; color: #5F5046\">{{t.rsvpBy}}</p>\n\n<sc-if value=\"{{showForm}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"margin-top: 24px; box-sizing: border-box; padding: 22px 18px; background: #F8F3EA; border-radius: 4px; display: flex; flex-direction: column; gap: 22px\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"rsvp-name-m\" style=\"font-size: 16px; color: #3E322A\">{{t.nameL}}</label>\n<input id=\"rsvp-name-m\" type=\"text\" required aria-required=\"true\" value=\"{{name}}\" onChange=\"{{onName}}\" autocomplete=\"name\" style=\"min-height: 50px; box-sizing: border-box; padding: 0 14px; border: 1px solid #8A7867; border-radius: 2px; background: #FFFDF9; font-family: inherit; font-size: 17px; color: #3E322A\">\n<sc-if value=\"{{errName}}\" hint-placeholder-val=\"{{ false }}\">\n<p style=\"margin: 0; font-size: 14px; color: #9A3B2E\">{{t.errName}}</p>\n</sc-if>\n</div>\n\n<div style=\"display: flex; flex-direction: column; gap: 10px\" role=\"group\" aria-label=\"{{t.attendL}}\">\n<p style=\"margin: 0; font-size: 16px; line-height: 1.4; color: #3E322A\">{{t.attendL}}</p>\n<div style=\"display: flex; flex-direction: column; gap: 10px\">\n<button type=\"button\" onClick=\"{{pickYes}}\" aria-pressed=\"{{yesPressed}}\" style=\"{{yesStyle}}\">{{t.yes}}</button>\n<button type=\"button\" onClick=\"{{pickNo}}\" aria-pressed=\"{{noPressed}}\" style=\"{{noStyle}}\">{{t.no}}</button>\n</div>\n<sc-if value=\"{{errAttend}}\" hint-placeholder-val=\"{{ false }}\">\n<p style=\"margin: 0; font-size: 14px; color: #9A3B2E\">{{t.errAttend}}</p>\n</sc-if>\n</div>\n\n<sc-if value=\"{{attendYes}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-direction: column; gap: 10px\">\n<p style=\"margin: 0; font-size: 16px; line-height: 1.4; color: #3E322A\">{{t.countL}}</p>\n<div style=\"display: flex; align-items: center; justify-content: center; gap: 18px\">\n<button type=\"button\" aria-label=\"−1\" onClick=\"{{dec}}\" style=\"width: 48px; height: 48px; border: 1px solid #8A7867; border-radius: 24px; background: transparent; color: #3E322A; font-size: 22px; cursor: pointer\">−</button>\n<span style=\"min-width: 32px; text-align: center; font-family: 'Forum', serif; font-size: 32px; color: #6E5885\">{{count}}</span>\n<button type=\"button\" aria-label=\"+1\" onClick=\"{{inc}}\" style=\"width: 48px; height: 48px; border: 1px solid #8A7867; border-radius: 24px; background: transparent; color: #3E322A; font-size: 22px; cursor: pointer\">+</button>\n</div>\n</div>\n<sc-for list=\"{{guestFields}}\" as=\"item\" hint-placeholder-count=\"0\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"{{item.id}}\" style=\"font-size: 16px; color: #3E322A\">{{item.label}}</label>\n<input id=\"{{item.id}}\" type=\"text\" required aria-required=\"true\" aria-invalid=\"{{item.invalid}}\" value=\"{{item.value}}\" onChange=\"{{item.onChange}}\" style=\"{{item.inputStyle}}\">\n<sc-if value=\"{{item.err}}\" hint-placeholder-val=\"{{ false }}\">\n<p style=\"margin: 0; font-size: 14px; color: #9A3B2E\">{{t.errGuest}}</p>\n</sc-if>\n</div>\n</sc-for>\n</sc-if>\n\n<button type=\"button\" onClick=\"{{submit}}\" style=\"min-height: 56px; border: 0; border-radius: 2px; background: #C9B080; color: #3E322A; font-family: inherit; font-size: 17px; letter-spacing: 0.04em; cursor: pointer\">{{t.send}}</button>\n</div>\n</sc-if>\n\n<sc-if value=\"{{sent}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"margin-top: 24px; box-sizing: border-box; padding: 32px 20px; background: #F8F3EA; border-radius: 4px; display: flex; flex-direction: column; align-items: center; gap: 18px; text-align: center\">\n<img src=\"assets/img/logo.png\" alt=\"\" style=\"width: 60px; height: auto\">\n<p style=\"margin: 0; font-size: 20px; line-height: 1.5; color: #3E322A\">{{thanks}}</p>\n<button type=\"button\" onClick=\"{{edit}}\" style=\"min-height: 44px; padding: 0 18px; border: 1px solid #6E5885; border-radius: 22px; background: transparent; color: #6E5885; font-family: inherit; font-size: 15px; cursor: pointer\">{{t.edit}}</button>\n</div>\n</sc-if>\n</section>\n\n<section style=\"position: relative; isolation: isolate; padding: 64px 24px; text-align: center\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.wait}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<h2 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: 40px; line-height: 1.15; color: #3E322A\">{{t.waitTitle}}</h2>\n<p style=\"margin: 14px 0 0; font-size: 20px; line-height: 1.45; font-style: {{italic}}; color: #6E5885\">{{t.waitSign}}</p>\n</section>\n\n<footer style=\"flex: none; position: relative; isolation: isolate; padding: 56px 24px; background: #3E322A; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; text-align: center\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.footer}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<img src=\"assets/img/logo.png\" alt=\"George &amp; Lana\" style=\"width: 72px; height: auto\">\n<p style=\"margin: 0; font-family: {{displayFont}}; font-size: 30px; line-height: 1.2; color: #EFE6D8\">{{t.names}}</p>\n<div style=\"display: flex; align-items: center; gap: 14px\">\n<p style=\"margin: 0; font-size: 15px; letter-spacing: 0.14em; color: #CDBFB0\">21.01.2027</p>\n<div aria-hidden=\"true\" style=\"width: 1px; height: 16px; background: #C9B080\"></div>\n<p style=\"margin: 0; font-size: 14px; color: #C9B080\">{{t.hdate}}</p>\n</div>\n</footer>\n\n</div>\n</div>";
COMP.MobileSections = (function (DCLogic) {
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { lang: null, hupa: null, now: Date.now(), name: '', attend: null, count: 1, guests: [], sent: false, errName: false, errAttend: false, copied: false, promoCopied: false, cat: 'food', infoIdx: null, errGuests: [] };
  }
  componentDidMount() {
    var self = this;
    this.iv = setInterval(function () { self.setState({ now: Date.now() }); }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.iv);
    clearTimeout(this.ct);
    clearTimeout(this.pt);
  }
  renderVals() {
    var self = this;
    var st = this.state;
    var T = {
      ru: {
        names: 'Георгий и Лана', hdate: '13 Шват 5787',
        welcome: 'Скоро начнётся наша общая история, и нам очень хочется, чтобы её первые страницы были написаны рядом с вами. Будем счастливы видеть вас на нашей свадьбе.', sign: 'С любовью, \nГеоргий и Лана',
        cdTitle: 'До встречи осталось', cdWhen: '21.01.2027, 16:00 по времени Тбилиси',
        progTitle: 'Программа дня', prog: ['Сбор гостей', 'Хупа', 'Начало банкета'],
        kosher: 'Для всех гостей будет полностью кошерное меню.',
        infoAria: 'Какие это благословения', hupaTitle: 'Что такое хупа', hupaWhat: 'Хупа — это еврейская свадебная церемония. Она проходит под балдахином, который тоже называют хупой: жених и невеста стоят под ним, раввин проводит обряд, и именно здесь они становятся мужем и женой.', hupaIntro: 'Церемония полна символов. Вот главные из них.',
        hupaItems: [['Балдахин', 'Символ будущего общего дома пары.'], ['Ктуба', 'Брачный договор, его зачитывают вслух во время церемонии.'], ['Семь благословений', 'Благословения, которые произносят над бокалом вина.', ['«Сотворивший плод виноградной лозы» — благословение над вином.', '«Всё сотворивший во славу Свою».', '«Сотворивший человека».', 'Сотворение человека по образу Творца и продолжение жизни.', 'Радость Сиона о возвращении её детей.', 'Пожелание жениху и невесте радости, как у первых людей в Эдемском саду.', 'Благословение радости и веселья, любви, братства, мира и дружбы — и голоса жениха и невесты в Иерусалиме.']], ['Разбитый бокал', 'Жених разбивает бокал в память о разрушенном Храме. Это конец церемонии — гости кричат «Мазаль тов!», то есть «Поздравляем!».']],
        venueTitle: 'Место проведения', inKa: 'По-грузински', copy: 'Скопировать адрес', copied: 'Адрес скопирован', maps: 'Открыть на карте', yandex: 'Яндекс Карты',
        dress: 'Дресс-код', dressSub: 'Костюм для мужчин\nВечерние платья для дам',
        tipsTitle: 'Если вы приезжаете в Тбилиси',
        taxiT: 'Такси', taxiD: 'Пользуйтесь приложениями Bolt или Yandex Go: цена видна заранее, оплатить можно картой. В аэропорту не соглашайтесь на предложения водителей в зале прилёта — закажите машину в приложении.',
        netT: 'Мобильный интернет', netD: 'Удобнее всего eSIM UNISIM: интернет работает сразу после прилёта, а платите вы только за использованный трафик.',
        promo: 'Промокод на 20%', promoCopy: 'Скопировать промокод', promoDone: 'Промокод скопирован', unisim: 'Открыть unisim.net',
        weatherT: 'Погода в январе', weatherD: 'Днём в среднем около +7 °C, ночью около −2 °C, возможен снег. Вечером понадобится тёплое пальто.',
        moneyT: 'Обмен денег', moneyD: 'Валюта — грузинский лари. Если хотите обменять валюту, в городе курс будет выгоднее. Также практически везде можно платить картой. Оплата картами РФ недоступна.',
        rsvpTitle: 'Подтвердите участие', rsvpBy: 'Подтвердите ваше присутствие до 15.11.2026. Это очень поможет в организации мероприятия.',
        nameL: 'Ваше имя и фамилия', attendL: 'Подтвердите присутствие на торжестве', yes: 'С радостью приду', no: 'К сожалению, не смогу',
        countL: 'Сколько вас будет, включая вас', guest: 'Имя гостя', send: 'Отправить ответ',
        errName: 'Укажите имя', errGuest: 'Укажите имя гостя', errAttend: 'Выберите, придёте ли вы',
        thanksYes: 'Спасибо! Ждём вас 21.01.2027.', thanksNo: 'Спасибо, что сообщили. Нам будет вас не хватать.', edit: 'Изменить ответ',
        todoTitle: 'Что делать в Тбилиси', todoSub: 'Для тех, кто приедет заранее или останется после свадьбы.', mapLbl: 'На карте', prevLbl: 'Назад', nextLbl: 'Вперёд',
        todo: [
          ['food', 'Где поесть', [['Alubali', 'Традиционная грузинская кухня по старинным рецептам из разных регионов, уютный зелёный двор.', 'Alubali Restaurant Tbilisi'], ['Alfredo', 'Итальянская кухня: пицца, паста, ризотто. Столик лучше бронировать заранее.', 'ALFREDO Irakli Abashidze Street Tbilisi'], ['OtsY', 'Современная грузинская кухня в Старом городе, с видом на часовую башню. Столик лучше бронировать заранее.', 'OtsY Ioane Shavteli Street Tbilisi'], ['Keto & Kote', 'Грузинская кухня в старом особняке с садом и видом на город. Вывески нет — вход со двора.', 'Keto & Kote Tbilisi'], ['Пончики на Фуникулёре', 'Знаменитые пончики с кремом в кафе на вершине Мтацминды. Наверх удобно подняться на фуникулёре.', 'Funicular Restaurant Complex Mtatsminda Tbilisi'], ['Retro', 'Вкусные хачапури по-аджарски — тесто готовят прямо на глазах.', 'Retro 1 Davit Gamrekeli Street Tbilisi'], ['Georgian House', 'Классическая грузинская еда с колоритом: большие залы, бывают живая музыка и национальные танцы.', 'Georgian House restaurant Giorgi Tsabadze Tbilisi'], ['Kikodze', 'Завтраки: сырники и бенедикт с лососем. Внутри бывшей винной фабрики Wine Factory N1.', 'Kikodze Bar Tbilisi']]],
          ['kosher', 'Кошерная еда', [['Mendi’s', 'Кошерная грузинская кухня в Старом городе, на улице Бамбис Риги. В шаббат закрыт.', 'Mendis 7 Bambis Rigi Street Tbilisi'], ['Shalom Aleichem', 'Кошерный ресторан рядом с Большой синагогой: фалафель, хумус, пита. В шаббат закрыт.', 'Shalom Aleichem Kosher Restaurant Tbilisi'], ['King David', 'Традиционные грузинские блюда, всё кошерное, и кошерное грузинское вино. Рядом с Большой синагогой. В шаббат закрыт.', 'Kosher restaurant King David Tbilisi'], ['Organique Kosher Grill', 'Кошерный гриль: израильские и грузинские блюда. Закрыт в пятницу и субботу.', 'Organique Kosher Grill Tbilisi']]],
          ['sights', 'Что посмотреть', [['Парк Рике', 'Парк на берегу Куры у Моста Мира; отсюда отправляется канатная дорога к Нарикале.', 'Rike Park Tbilisi'], ['Водопад Легвтахеви', 'Водопад в ущелье прямо за серными банями, в нескольких минутах ходьбы от Старого города.', 'Leghvtakhevi Waterfall Tbilisi'], ['Парк Мтацминда', 'Парк развлечений на вершине горы Мтацминда, с колесом обозрения и панорамой города. Наверх — на фуникулёре.', 'Mtatsminda Park Tbilisi'], ['Проспект Руставели', 'Главная улица города: опера, театры, музеи и кафе.', 'Rustaveli Avenue Tbilisi'], ['Крепость Нарикала', 'Древняя крепость над Старым городом. Наверх можно подняться на канатной дороге из парка Рике.', 'Narikala Fortress Tbilisi']]],
          ['wine', 'Вино и коктейли', [['Cocktail Factory', 'Коктейль-бар во дворе Wine Factory N1: авторские и классические коктейли.', 'Cocktail Factory Tbilisi'], ['Weather Report', 'Бар на верхнем этаже отеля Pullman в Axis Towers: коктейли и панорама города, особенно на закате.', 'Weather Report Sky Bar Tbilisi'], ['Vino Underground', 'Один из первых в Тбилиси баров натуральных вин, с дегустациями и закусками.', 'Vino Underground Tbilisi'], ['Karalashvili Wine Cellar', 'Исторический винный погреб в Старом городе: дегустации грузинских вин и чачи с сырами.', 'Karalashvili wine cellar Tbilisi']]]
        ],
        calTitle: 'Добавить в календарь', gcal: 'Google Календарь', ics: 'Apple и Outlook', calText: 'Свадьба Георгия и Ланы', waitTitle: 'Ждём вас', waitSign: 'С уважением, семьи Чиквашвили и Джанашвили'
      },
      en: {
        names: 'George & Lana', hdate: '13 Shevat 5787',
        welcome: 'Our story together is about to begin, and we would love for its very first pages to be written with you by our side. We will be so happy to see you at our wedding.', sign: 'With love, George & Lana',
        cdTitle: 'Counting down to our day', cdWhen: '21.01.2027, 4:00 PM Tbilisi time',
        progTitle: 'The day’s programme', prog: ['Guest arrival', 'Chuppah', 'Banquet begins'],
        kosher: 'A fully kosher menu will be served to all guests.',
        infoAria: 'About the seven blessings', hupaTitle: 'What is a chuppah', hupaWhat: 'The chuppah is the Jewish wedding ceremony. It takes place under a canopy, also called a chuppah: the bride and groom stand beneath it while the rabbi conducts the ceremony, and here they become husband and wife.', hupaIntro: 'The ceremony is rich in symbols. Here are the main ones.',
        hupaItems: [['The canopy', 'A symbol of the couple’s future shared home.'], ['Ketubah', 'The marriage contract, read aloud during the ceremony.'], ['Seven blessings', 'Blessings recited over a cup of wine.', ['“Who creates the fruit of the vine”, the blessing over wine.', '“Who has created all things for His glory.”', '“Creator of man.”', 'The creation of humankind in God’s image, and the continuation of life.', 'Zion rejoicing at the return of her children.', 'A wish that the couple rejoice as the first couple did in the Garden of Eden.', 'A blessing of joy and gladness, love, harmony, peace and friendship, and the voices of bride and groom heard in Jerusalem.']], ['Breaking the glass', 'The groom breaks a glass in memory of the destroyed Temple. This ends the ceremony, and guests shout “Mazel tov!”, meaning “Congratulations!”']],
        venueTitle: 'Venue', inKa: 'In Georgian', copy: 'Copy address', copied: 'Address copied', maps: 'Open in maps', yandex: 'Yandex Maps',
        dress: 'Dress code', dressSub: 'Suits for gentlemen\nEvening gowns for ladies',
        tipsTitle: 'If you are coming to Tbilisi',
        taxiT: 'Taxi', taxiD: 'Use the Bolt or Yandex Go apps: you see the fare in advance and can pay by card. At the airport, decline offers from drivers in the arrivals hall and book a car in the app instead.',
        netT: 'Mobile internet', netD: 'The easiest option is the UNISIM eSIM: data works as soon as you land and you only pay for what you use.',
        promo: 'Promo code for 20% off', promoCopy: 'Copy promo code', promoDone: 'Promo code copied', unisim: 'Open unisim.net',
        weatherT: 'Weather in January', weatherD: 'Days average around +7 °C and nights around −2 °C, and snow is possible. You will want a warm coat in the evening.',
        moneyT: 'Currency exchange', moneyD: 'The currency is the Georgian lari. If you want to exchange money, you will get a better rate in the city. You can also pay by card almost everywhere.',
        rsvpTitle: 'Please confirm your attendance', rsvpBy: 'Please confirm your attendance by 15.11.2026. It will greatly help us with the planning.',
        nameL: 'Your full name', attendL: 'Please confirm your attendance at the celebration', yes: 'Joyfully accept', no: 'Regretfully decline',
        countL: 'Number of guests, including you', guest: 'Guest name', send: 'Send reply',
        errName: 'Please enter your name', errGuest: 'Please enter the guest’s name', errAttend: 'Please choose whether you will attend',
        thanksYes: 'Thank you! We look forward to seeing you on 21.01.2027.', thanksNo: 'Thank you for letting us know. You will be missed.', edit: 'Change reply',
        todoTitle: 'Things to do in Tbilisi', todoSub: 'For those arriving early or staying on after the wedding.', mapLbl: 'Map', prevLbl: 'Previous', nextLbl: 'Next',
        todo: [
          ['food', 'Where to eat', [['Alubali', 'Traditional Georgian food based on old recipes from different regions, with a cosy leafy courtyard.', 'Alubali Restaurant Tbilisi'], ['Alfredo', 'Italian cuisine: pizza, pasta and risotto. Booking ahead is a good idea.', 'ALFREDO Irakli Abashidze Street Tbilisi'], ['OtsY', 'Modern Georgian cuisine in the Old Town, with a view of the clock tower. Booking ahead is a good idea.', 'OtsY Ioane Shavteli Street Tbilisi'], ['Keto & Kote', 'Georgian food in an old mansion with a garden and city views. There’s no sign — the entrance is through the courtyard.', 'Keto & Kote Tbilisi'], ['Doughnuts at the Funicular', 'The famous cream-filled doughnuts at the café on top of Mtatsminda. The easiest way up is the funicular.', 'Funicular Restaurant Complex Mtatsminda Tbilisi'], ['Retro', 'Delicious Adjarian khachapuri, with the dough made right in front of you.', 'Retro 1 Davit Gamrekeli Street Tbilisi'], ['Georgian House', 'Classic Georgian food with plenty of local colour: big halls, and sometimes live music and folk dancing.', 'Georgian House restaurant Giorgi Tsabadze Tbilisi'], ['Kikodze', 'Breakfast: syrniki and salmon Benedict. Inside the former Wine Factory N1.', 'Kikodze Bar Tbilisi']]],
          ['kosher', 'Kosher food', [['Mendi’s', 'Kosher Georgian cuisine in the Old Town, on Bambis Rigi Street. Closed on Shabbat.', 'Mendis 7 Bambis Rigi Street Tbilisi'], ['Shalom Aleichem', 'A kosher restaurant next to the Great Synagogue: falafel, hummus and pita. Closed on Shabbat.', 'Shalom Aleichem Kosher Restaurant Tbilisi'], ['King David', 'Traditional Georgian dishes, all kosher, plus kosher Georgian wine. Next to the Great Synagogue. Closed on Shabbat.', 'Kosher restaurant King David Tbilisi'], ['Organique Kosher Grill', 'A kosher grill with Israeli and Georgian dishes. Closed on Friday and Saturday.', 'Organique Kosher Grill Tbilisi']]],
          ['sights', 'What to see', [['Rike Park', 'A riverside park by the Bridge of Peace; the cable car to Narikala starts here.', 'Rike Park Tbilisi'], ['Leghvtakhevi Waterfall', 'A waterfall in the gorge right behind the sulphur baths, a few minutes’ walk from the Old Town.', 'Leghvtakhevi Waterfall Tbilisi'], ['Mtatsminda Park', 'An amusement park on top of Mount Mtatsminda, with a Ferris wheel and city views. Take the funicular up.', 'Mtatsminda Park Tbilisi'], ['Rustaveli Avenue', 'The city’s main street: the opera, theatres, museums and cafés.', 'Rustaveli Avenue Tbilisi'], ['Narikala Fortress', 'An ancient fortress above the Old Town. Ride the cable car up from Rike Park.', 'Narikala Fortress Tbilisi']]],
          ['wine', 'Wine & cocktails', [['Cocktail Factory', 'A cocktail bar in the courtyard of Wine Factory N1: signature and classic cocktails.', 'Cocktail Factory Tbilisi'], ['Weather Report', 'A bar on the top floor of the Pullman hotel in Axis Towers: cocktails and a city panorama, best at sunset.', 'Weather Report Sky Bar Tbilisi'], ['Vino Underground', 'One of Tbilisi’s first natural wine bars, with tastings and small plates.', 'Vino Underground Tbilisi'], ['Karalashvili Wine Cellar', 'A historic wine cellar in the Old Town: tastings of Georgian wine and chacha with cheese.', 'Karalashvili wine cellar Tbilisi']]]
        ],
        calTitle: 'Add to calendar', gcal: 'Google Calendar', ics: 'Apple & Outlook', calText: 'George & Lana’s wedding', waitTitle: 'We look forward to seeing you', waitSign: 'With kind regards, the Chikvashvili and Janashvili families'
      },
      ka: {
        names: 'გიორგი და ლანა', hdate: '13 შვატი 5787',
        welcome: 'მალე ჩვენი საერთო ისტორია დაიწყება და ძალიან გვინდა, რომ მისი პირველი გვერდები თქვენთან ერთად დაიწეროს. ბედნიერები ვიქნებით, თუ ჩვენს ქორწილზე გიხილავთ.', sign: 'სიყვარულით, გიორგი და ლანა',
        cdTitle: 'შეხვედრამდე დარჩა', cdWhen: '21.01.2027, 16:00, თბილისის დროით',
        progTitle: 'დღის პროგრამა', prog: ['სტუმრების შეკრება', 'ხუპა', 'ბანკეტის დაწყება'],
        kosher: 'ყველა სტუმრისთვის მომზადდება სრულად კოშერული მენიუ.',
        infoAria: 'შვიდი კურთხევის შესახებ', hupaTitle: 'რა არის ხუპა', hupaWhat: 'ხუპა ებრაული საქორწინო ცერემონიაა. ის ბალდახინის ქვეშ იმართება, რომელსაც ასევე ხუპა ჰქვია: საქმრო და პატარძალი მის ქვეშ დგანან, რაბინი რიტუალს ატარებს და სწორედ აქ ხდებიან ისინი ცოლ-ქმარი.', hupaIntro: 'ცერემონია სიმბოლოებით არის სავსე. აი, მთავარი მათგანი.',
        hupaItems: [['ბალდახინი', 'წყვილის მომავალი საერთო სახლის სიმბოლო.'], ['ქთუბა', 'საქორწინო ხელშეკრულება, რომელსაც ცერემონიის დროს ხმამაღლა კითხულობენ.'], ['შვიდი კურთხევა', 'კურთხევები, რომლებიც ღვინის თასზე წარმოითქმის.', ['„ვაზის ნაყოფის შემოქმედო“ — კურთხევა ღვინოზე.', '„ყოველივეს შემოქმედო თავისი დიდებისათვის“.', '„ადამიანის შემოქმედო“.', 'ადამიანის შექმნა შემოქმედის ხატად და სიცოცხლის გაგრძელება.', 'სიონის სიხარული მისი შვილების დაბრუნებით.', 'სურვილი, რომ საქმრომ და პატარძალმა გაიხარონ, როგორც პირველმა ადამიანებმა ედემის ბაღში.', 'სიხარულის, სიყვარულის, ძმობის, მშვიდობისა და მეგობრობის კურთხევა — და საქმროსა და პატარძლის ხმა იერუსალიმში.']], ['ჭიქის გატეხვა', 'საქმრო ჭიქას ამტვრევს დანგრეული ტაძრის ხსოვნისთვის. ამით ცერემონია სრულდება და სტუმრები შესძახებენ: „მაზალ ტოვ!“, ანუ „გილოცავთ!“']],
        venueTitle: 'ადგილი', inKa: 'ქართულად', copy: 'მისამართის კოპირება', copied: 'მისამართი დაკოპირდა', maps: 'რუკაზე გახსნა', yandex: 'Yandex Maps',
        dress: 'დრესკოდი', dressSub: 'მამაკაცებისთვის — კოსტიუმი\nქალბატონებისთვის — საღამოს კაბა',
        tipsTitle: 'თუ თბილისში ჩამოდიხართ',
        taxiT: 'ტაქსი', taxiD: 'ისარგებლეთ Bolt-ის ან Yandex Go-ს აპლიკაციით: ფასი წინასწარ ჩანს და ბარათით გადახდაც შეიძლება. აეროპორტში ნუ დათანხმდებით ჩამოსვლის დარბაზში მძღოლების შეთავაზებებს — მანქანა აპლიკაციით გამოიძახეთ.',
        netT: 'მობილური ინტერნეტი', netD: 'ყველაზე მოსახერხებელია UNISIM eSIM: ინტერნეტი ჩამოსვლისთანავე მუშაობს და იხდით მხოლოდ გამოყენებულ ტრაფიკში.',
        promo: '20%-იანი პრომოკოდი', promoCopy: 'პრომოკოდის კოპირება', promoDone: 'პრომოკოდი დაკოპირდა', unisim: 'unisim.net-ის გახსნა',
        weatherT: 'ამინდი იანვარში', weatherD: 'დღისით საშუალოდ დაახლოებით +7 °C-ია, ღამით დაახლოებით −2 °C, შესაძლებელია თოვლი. საღამოს თბილი პალტო დაგჭირდებათ.',
        moneyT: 'ფულის გადაცვლა', moneyD: 'ვალუტა — ქართული ლარი. თუ ვალუტის გადაცვლა გსურთ, ქალაქში კურსი უფრო ხელსაყრელი იქნება. ასევე თითქმის ყველგან შეგიძლიათ ბარათით გადახდა.',
        rsvpTitle: 'გთხოვთ, დაადასტუროთ დასწრება', rsvpBy: 'გთხოვთ, დაადასტუროთ დასწრება 15.11.2026-მდე. ეს ძალიან დაგვეხმარება ღონისძიების ორგანიზებაში.',
        nameL: 'თქვენი სახელი და გვარი', attendL: 'დაადასტურეთ დასწრება ზეიმზე', yes: 'სიამოვნებით მოვალ', no: 'სამწუხაროდ, ვერ მოვალ',
        countL: 'სტუმრების რაოდენობა, თქვენი ჩათვლით', guest: 'სტუმრის სახელი', send: 'პასუხის გაგზავნა',
        errName: 'მიუთითეთ სახელი', errGuest: 'მიუთითეთ სტუმრის სახელი', errAttend: 'აირჩიეთ, მობრძანდებით თუ არა',
        thanksYes: 'გმადლობთ! გელოდებით 21.01.2027-ს.', thanksNo: 'გმადლობთ, რომ შეგვატყობინეთ. მოგვენატრებით.', edit: 'პასუხის შეცვლა',
        todoTitle: 'რა ვაკეთოთ თბილისში', todoSub: 'მათთვის, ვინც ადრე ჩამოვა ან ქორწილის შემდეგ დარჩება.', mapLbl: 'რუკაზე', prevLbl: 'წინა', nextLbl: 'შემდეგი',
        todo: [
          ['food', 'სად ვჭამოთ', [['Alubali', 'ტრადიციული ქართული სამზარეულო სხვადასხვა კუთხის ძველი რეცეპტებით, მყუდრო მწვანე ეზო.', 'Alubali Restaurant Tbilisi'], ['Alfredo', 'იტალიური სამზარეულო: პიცა, პასტა, რიზოტო. მაგიდის წინასწარ დაჯავშნა სჯობს.', 'ALFREDO Irakli Abashidze Street Tbilisi'], ['OtsY', 'თანამედროვე ქართული სამზარეულო ძველ თბილისში, საათის კოშკის ხედით. მაგიდის წინასწარ დაჯავშნა სჯობს.', 'OtsY Ioane Shavteli Street Tbilisi'], ['Keto & Kote', 'ქართული სამზარეულო ძველ სახლში, ბაღითა და ქალაქის ხედით. აბრა არ აქვს — შესასვლელი ეზოდანაა.', 'Keto & Kote Tbilisi'], ['პონჩიკები ფუნიკულიორზე', 'ცნობილი კრემიანი პონჩიკები კაფეში მთაწმინდის თავზე. ზემოთ ასვლა ფუნიკულიორით არის მოსახერხებელი.', 'Funicular Restaurant Complex Mtatsminda Tbilisi'], ['Retro', 'გემრიელი აჭარული ხაჭაპური — ცომს თვალწინ ამზადებენ.', 'Retro 1 Davit Gamrekeli Street Tbilisi'], ['Georgian House', 'კლასიკური ქართული სამზარეულო ადგილობრივი კოლორიტით: დიდი დარბაზები, ზოგჯერ ცოცხალი მუსიკა და ქართული ცეკვები.', 'Georgian House restaurant Giorgi Tsabadze Tbilisi'], ['Kikodze', 'საუზმე: სირნიკები და ბენედიქტი ორაგულით. ყოფილ ღვინის ქარხანაში, Wine Factory N1-ში.', 'Kikodze Bar Tbilisi']]],
          ['kosher', 'კოშერული საკვები', [['Mendi’s', 'კოშერული ქართული სამზარეულო ძველ თბილისში, ბამბის რიგზე. შაბათს დაკეტილია.', 'Mendis 7 Bambis Rigi Street Tbilisi'], ['Shalom Aleichem', 'კოშერული რესტორანი დიდ სინაგოგასთან: ფალაფელი, ჰუმუსი, პიტა. შაბათს დაკეტილია.', 'Shalom Aleichem Kosher Restaurant Tbilisi'], ['King David', 'ტრადიციული ქართული კერძები, ყველაფერი კოშერულია, და კოშერული ქართული ღვინო. დიდ სინაგოგასთან. შაბათს დაკეტილია.', 'Kosher restaurant King David Tbilisi'], ['Organique Kosher Grill', 'კოშერული გრილი: ისრაელური და ქართული კერძები. პარასკევს და შაბათს დაკეტილია.', 'Organique Kosher Grill Tbilisi']]],
          ['sights', 'რა ვნახოთ', [['რიყის პარკი', 'პარკი მტკვრის ნაპირზე, მშვიდობის ხიდთან; აქედან იწყება საბაგირო ნარიყალამდე.', 'Rike Park Tbilisi'], ['ლეღვთახევის ჩანჩქერი', 'ჩანჩქერი ხეობაში, გოგირდის აბანოების უკან, ძველი ქალაქიდან რამდენიმე წუთის სავალზე.', 'Leghvtakhevi Waterfall Tbilisi'], ['მთაწმინდის პარკი', 'გასართობი პარკი მთაწმინდის თავზე, ეშმაკის ბორბლითა და ქალაქის პანორამით. ზემოთ — ფუნიკულიორით.', 'Mtatsminda Park Tbilisi'], ['რუსთაველის გამზირი', 'ქალაქის მთავარი ქუჩა: ოპერა, თეატრები, მუზეუმები და კაფეები.', 'Rustaveli Avenue Tbilisi'], ['ნარიყალას ციხე', 'უძველესი ციხე ძველი ქალაქის თავზე. ზემოთ რიყის პარკიდან საბაგიროთი ასვლაა შესაძლებელი.', 'Narikala Fortress Tbilisi']]],
          ['wine', 'ღვინო და კოქტეილები', [['Cocktail Factory', 'კოქტეილ-ბარი Wine Factory N1-ის ეზოში: საავტორო და კლასიკური კოქტეილები.', 'Cocktail Factory Tbilisi'], ['Weather Report', 'ბარი სასტუმრო Pullman-ის ზედა სართულზე, Axis Towers-ში: კოქტეილები და ქალაქის პანორამა, განსაკუთრებით მზის ჩასვლისას.', 'Weather Report Sky Bar Tbilisi'], ['Vino Underground', 'თბილისის ერთ-ერთი პირველი ნატურალური ღვინის ბარი, დეგუსტაციებითა და წასახემსებლით.', 'Vino Underground Tbilisi'], ['Karalashvili Wine Cellar', 'ისტორიული მარანი ძველ თბილისში: ქართული ღვინისა და ჭაჭის დეგუსტაცია ყველთან ერთად.', 'Karalashvili wine cellar Tbilisi']]]
        ],
        calTitle: 'კალენდარში დამატება', gcal: 'Google Calendar', ics: 'Apple და Outlook', calText: 'გიორგისა და ლანას ქორწილი', waitTitle: 'გელოდებით', waitSign: 'პატივისცემით, ჩიქვაშვილებისა და ჯანაშვილების ოჯახები'
      },
      he: {
        names: 'גיאורגי ולאנה', hdate: 'י״ג שבט תשפ״ז',
        welcome: 'בקרוב יתחיל הסיפור המשותף שלנו, ומאוד נרצה שהדפים הראשונים שלו ייכתבו לצדכם. נשמח מאוד לראותכם בחתונתנו.', sign: 'באהבה, גיאורגי ולאנה',
        cdTitle: 'נותרו עד שניפגש', cdWhen: '21.01.2027, 16:00 לפי שעון טביליסי',
        progTitle: 'סדר היום', prog: ['קבלת פנים', 'חופה', 'תחילת הסעודה'],
        kosher: 'לכל האורחים יוגש תפריט כשר לחלוטין.',
        infoAria: 'על שבע הברכות', hupaTitle: 'מהי חופה', hupaWhat: 'החופה היא טקס הנישואין היהודי. הוא נערך תחת כיסוי שנקרא גם הוא חופה: החתן והכלה עומדים תחתיו, הרב עורך את הטקס, ובו הם הופכים לבעל ולאישה.', hupaIntro: 'הטקס עשיר בסמלים. הנה העיקריים שבהם.',
        hupaItems: [['הכיסוי', 'סמל לבית המשותף של בני הזוג.'], ['כתובה', 'חוזה הנישואין, שנקרא בקול במהלך הטקס.'], ['שבע ברכות', 'ברכות הנאמרות על כוס יין.', ['בורא פרי הגפן', 'שהכל ברא לכבודו', 'יוצר האדם', 'אשר יצר את האדם בצלמו', 'שוש תשיש ותגל העקרה', 'שמח תשמח רעים האהובים', 'אשר ברא ששון ושמחה']], ['שבירת הכוס', 'החתן שובר כוס זכר לחורבן בית המקדש. בכך מסתיים הטקס, והאורחים קוראים „מזל טוב!”']],
        venueTitle: 'מקום האירוע', inKa: 'בגאורגית', copy: 'העתקת הכתובת', copied: 'הכתובת הועתקה', maps: 'פתיחה במפות', yandex: 'Yandex Maps',
        dress: 'קוד לבוש', dressSub: 'חליפה לגברים\nשמלת ערב לנשים',
        tipsTitle: 'למי שמגיע לטביליסי',
        taxiT: 'מוניות', taxiD: 'השתמשו באפליקציות Bolt או Yandex Go: המחיר מוצג מראש ואפשר לשלם בכרטיס. בשדה התעופה סרבו להצעות של נהגים באולם הנוסעים הנכנסים והזמינו רכב באפליקציה.',
        netT: 'אינטרנט סלולרי', netD: 'הדרך הנוחה ביותר היא eSIM של UNISIM: הגלישה פועלת מיד עם הנחיתה ומשלמים רק על מה שמשתמשים.',
        promo: 'קוד הנחה של 20%', promoCopy: 'העתקת קוד ההנחה', promoDone: 'קוד ההנחה הועתק', unisim: 'לאתר unisim.net',
        weatherT: 'מזג האוויר בינואר', weatherD: 'ביום הטמפרטורה הממוצעת היא בערך ‎+7 °C‎ ובלילה בערך ‎−2 °C‎, וייתכן שלג. בערב תצטרכו מעיל חם.',
        moneyT: 'המרת כסף', moneyD: 'המטבע הוא לארי גאורגי. אם תרצו להמיר כסף, בעיר השער משתלם יותר. כמעט בכל מקום אפשר גם לשלם בכרטיס.',
        rsvpTitle: 'אנא אשרו הגעה', rsvpBy: 'אנא אשרו את הגעתכם עד 15.11.2026. זה יעזור לנו מאוד בארגון האירוע.',
        nameL: 'שם מלא', attendL: 'אשרו את השתתפותכם בחגיגה', yes: 'אגיע בשמחה', no: 'לצערי לא אוכל להגיע',
        countL: 'מספר האורחים, כולל אתכם', guest: 'שם האורח', send: 'שליחת תשובה',
        errName: 'נא למלא שם', errGuest: 'נא למלא את שם האורח', errAttend: 'נא לבחור אם תגיעו',
        thanksYes: 'תודה! מחכים לכם ב-21.01.2027.', thanksNo: 'תודה שעדכנתם. נתגעגע אליכם.', edit: 'שינוי התשובה',
        todoTitle: 'מה לעשות בטביליסי', todoSub: 'למי שמגיע מוקדם או נשאר אחרי החתונה.', mapLbl: 'במפה', prevLbl: 'הקודם', nextLbl: 'הבא',
        todo: [
          ['food', 'איפה לאכול', [['Alubali', 'מטבח גאורגי מסורתי לפי מתכונים ישנים מאזורים שונים, עם חצר ירוקה ונעימה.', 'Alubali Restaurant Tbilisi'], ['Alfredo', 'מטבח איטלקי: פיצה, פסטה וריזוטו. מומלץ להזמין מקום מראש.', 'ALFREDO Irakli Abashidze Street Tbilisi'], ['OtsY', 'מטבח גאורגי מודרני בעיר העתיקה, עם נוף למגדל השעון. מומלץ להזמין מקום מראש.', 'OtsY Ioane Shavteli Street Tbilisi'], ['Keto & Kote', 'אוכל גאורגי בבית ישן עם גינה ונוף לעיר. אין שלט – הכניסה דרך החצר.', 'Keto & Kote Tbilisi'], ['סופגניות בפוניקולר', 'הסופגניות המפורסמות במילוי קרם בבית הקפה שעל פסגת מטאצמינדה. הכי נוח לעלות לשם בפוניקולר.', 'Funicular Restaurant Complex Mtatsminda Tbilisi'], ['Retro', 'חצ׳פורי אג׳רי טעים, והבצק מוכן ממש מול העיניים.', 'Retro 1 Davit Gamrekeli Street Tbilisi'], ['Georgian House', 'אוכל גאורגי קלאסי עם הרבה צבע מקומי: אולמות גדולים, ולפעמים מוזיקה חיה וריקודי עם.', 'Georgian House restaurant Giorgi Tsabadze Tbilisi'], ['Kikodze', 'ארוחות בוקר: סירניקי ובנדיקט סלמון. בתוך מפעל היין לשעבר Wine Factory N1.', 'Kikodze Bar Tbilisi']]],
          ['kosher', 'אוכל כשר', [['מנדי׳ס', 'מטבח גאורגי כשר בעיר העתיקה, ברחוב במביס ריגי. סגור בשבת.', 'Mendis 7 Bambis Rigi Street Tbilisi'], ['שלום עליכם', 'מסעדה כשרה ליד בית הכנסת הגדול: פלאפל, חומוס ופיתה. סגור בשבת.', 'Shalom Aleichem Kosher Restaurant Tbilisi'], ['קינג דוד', 'מנות גאורגיות מסורתיות, הכול כשר, ויין גאורגי כשר. ליד בית הכנסת הגדול. סגור בשבת.', 'Kosher restaurant King David Tbilisi'], ['אורגניק גריל כשר', 'גריל כשר עם מנות ישראליות וגאורגיות. סגור בימי שישי ושבת.', 'Organique Kosher Grill Tbilisi']]],
          ['sights', 'מה לראות', [['פארק ריקה', 'פארק על גדת הנהר ליד גשר השלום; מכאן יוצא הרכבל למבצר נריקלה.', 'Rike Park Tbilisi'], ['מפל לגבטחווי', 'מפל בערוץ ממש מאחורי בתי המרחץ הגופריתיים, כמה דקות הליכה מהעיר העתיקה.', 'Leghvtakhevi Waterfall Tbilisi'], ['פארק מטאצמינדה', 'פארק שעשועים על פסגת הר מטאצמינדה, עם גלגל ענק ותצפית על העיר. עולים אליו בפוניקולר.', 'Mtatsminda Park Tbilisi'], ['שדרות רוסתוולי', 'הרחוב הראשי של העיר: אופרה, תיאטראות, מוזיאונים ובתי קפה.', 'Rustaveli Avenue Tbilisi'], ['מבצר נריקלה', 'מבצר עתיק מעל העיר העתיקה. אפשר לעלות אליו ברכבל מפארק ריקה.', 'Narikala Fortress Tbilisi']]],
          ['wine', 'יין וקוקטיילים', [['Cocktail Factory', 'בר קוקטיילים בחצר של Wine Factory N1: קוקטיילים מקוריים וקלאסיים.', 'Cocktail Factory Tbilisi'], ['Weather Report', 'בר בקומה העליונה של מלון Pullman במגדלי Axis: קוקטיילים ונוף פנורמי לעיר, במיוחד בשקיעה.', 'Weather Report Sky Bar Tbilisi'], ['Vino Underground', 'אחד מברי היין הטבעי הראשונים בטביליסי, עם טעימות ומנות קטנות.', 'Vino Underground Tbilisi'], ['Karalashvili Wine Cellar', 'מרתף יין היסטורי בעיר העתיקה: טעימות של יינות גאורגיים וצ׳אצ׳ה עם גבינות.', 'Karalashvili wine cellar Tbilisi']]]
        ],
        calTitle: 'הוספה ליומן', gcal: 'Google Calendar', ics: 'Apple ו-Outlook', calText: 'החתונה של גיאורגי ולאנה', waitTitle: 'מחכים לכם', waitSign: 'בברכה, משפחות צ׳יקוואשווילי וג׳נאשווילי'
      }
    };
    var FONT = {
      ru: { d: "'Forum', serif", b: "'Spectral', serif", italic: 'italic' },
      en: { d: "'Forum', serif", b: "'Spectral', serif", italic: 'italic' },
      ka: { d: "'Noto Serif Georgian', serif", b: "'Noto Serif Georgian', serif", italic: 'normal' },
      he: { d: "'Frank Ruhl Libre', serif", b: "'Frank Ruhl Libre', serif", italic: 'normal' }
    };
    var UNITS = {
      en: [['day', 'days'], ['hour', 'hours'], ['minute', 'minutes'], ['second', 'seconds']],
      ka: [['დღე'], ['საათი'], ['წუთი'], ['წამი']],
      he: [['ימים'], ['שעות'], ['דקות'], ['שניות']]
    };
    var RU_UNITS = [['день', 'дня', 'дней'], ['час', 'часа', 'часов'], ['минута', 'минуты', 'минут'], ['секунда', 'секунды', 'секунд']];
    function ruPlural(n, f) {
      var a = n % 100, b = n % 10;
      if (a > 10 && a < 20) return f[2];
      if (b === 1) return f[0];
      if (b > 1 && b < 5) return f[1];
      return f[2];
    }
    var embedded = this.props.embedded === true;
    var PROMO = 'glwedding';
    var lang = embedded ? (this.props.lang || 'ru') : (st.lang || this.props.lang || 'ru');
    if (!T[lang]) lang = 'ru';
    var t = T[lang];
    var hupa = (embedded || st.hupa === null) ? this.props.hupa !== false : st.hupa;

    var target = Date.UTC(2027, 0, 21, 12, 0, 0);
    var diff = Math.max(0, target - st.now);
    var parts = [Math.floor(diff / 86400000), Math.floor(diff / 3600000) % 24, Math.floor(diff / 60000) % 60, Math.floor(diff / 1000) % 60];
    var countdown = parts.map(function (n, i) {
      var unit;
      if (lang === 'ru') unit = ruPlural(n, RU_UNITS[i]);
      else if (lang === 'en') unit = UNITS.en[i][n === 1 ? 0 : 1];
      else unit = UNITS[lang][i][0];
      return { value: i === 0 ? String(n) : (n < 10 ? '0' + n : String(n)), unit: unit };
    });

    var times = ['16:00', '17:00', '18:00'];
    var program = t.prog.map(function (label, i) { var last = i === t.prog.length - 1; return { time: times[i], label: label, line: !last, pad: last ? '0' : '28px' }; });
    var hupaItems = t.hupaItems.map(function (x, i) {
      var open = st.infoIdx === i;
      return {
        t: x[0], d: x[1],
        hasInfo: !!x[2],
        info: x[2] ? x[2].map(function (l) { return { text: l }; }) : [],
        infoOpen: open,
        infoExpanded: open ? 'true' : 'false',
        z: open ? 5 : 1,
        infoShow: function () { self.infoByClick = false; self.setState({ infoIdx: i }); },
        infoHide: function () { if (self.state.infoIdx === i) self.setState({ infoIdx: null }); },
        infoToggle: function () { if (self.state.infoIdx === i && self.infoByClick) { self.infoByClick = false; self.setState({ infoIdx: null }); } else { self.infoByClick = true; self.setState({ infoIdx: i }); } }
      };
    });

    var labels = [['ru', 'Рус'], ['en', 'Eng'], ['ka', 'ქარ'], ['he', 'עב']];
    var testLangs = labels.map(function (l) {
      var active = l[0] === lang;
      return {
        label: l[1],
        pressed: active ? 'true' : 'false',
        style: 'min-width: 52px; min-height: 40px; padding: 0 12px; border-radius: 20px; cursor: pointer; font-size: 14px; font-family: inherit; ' + (active ? 'border: 1px solid #C9B080; background: #C9B080; color: #2B2420' : 'border: 1px solid #6E5F52; background: transparent; color: #EFE6D8'),
        pick: function () { self.setState({ lang: l[0] }); }
      };
    });

    function pill(active) {
      return 'width: 100%; min-height: 48px; padding: 0 18px; border-radius: 24px; cursor: pointer; font-family: inherit; font-size: 16px; ' + (active ? 'border: 1px solid #6E5885; background: #6E5885; color: #F8F3EA' : 'border: 1px solid #8A7867; background: transparent; color: #3E322A');
    }
    function resize(n) {
      var g = st.guests.slice(0, Math.max(0, n - 1));
      while (g.length < n - 1) g.push('');
      return g;
    }
    var guestFields = st.attend === 'yes' ? st.guests.map(function (v, i) {
      return {
        id: 'rsvp-guest-' + (i + 2),
        label: t.guest + ' ' + (i + 2),
        value: v,
        err: !!(st.errGuests && st.errGuests[i]),
        invalid: (st.errGuests && st.errGuests[i]) ? 'true' : 'false',
        inputStyle: 'min-height: 50px; box-sizing: border-box; padding: 0 14px; border: 1px solid ' + ((st.errGuests && st.errGuests[i]) ? '#9A3B2E' : '#8A7867') + '; border-radius: 2px; background: #FFFDF9; font-family: inherit; font-size: 17px; color: #3E322A',
        onChange: function (e) {
          var g = self.state.guests.slice(); g[i] = e.target.value;
          var eg = (self.state.errGuests || []).slice(); eg[i] = false;
          self.setState({ guests: g, errGuests: eg });
        }
      };
    }) : [];

    var catId = st.cat || 'food';
    var catRow = t.todo.filter(function (c) { return c[0] === catId; })[0] || t.todo[0];
    var todoCats = t.todo.map(function (c) {
      var active = c[0] === catRow[0];
      return {
        label: c[1],
        selected: active ? 'true' : 'false',
        style: 'flex: none; min-height: 44px; padding: 0 18px; border-radius: 22px; cursor: pointer; font-family: inherit; font-size: 15px; white-space: nowrap; ' + (active ? 'border: 1px solid #3E322A; background: #3E322A; color: #F8F3EA' : 'border: 1px solid #A8917A; background: transparent; color: #3E322A'),
        pick: function () { self.setState({ cat: c[0] }); try { if (self.car) self.car.scrollTo({ left: 0 }); } catch (e) {} }
      };
    });
    var tints = ['#E2D3BC', '#D9CCE3', '#D6C3A6', '#E4D9EA'];
    var PHOTOS = {
      'Organique Kosher Grill Tbilisi': 'assets/img/places/organique.jpg',
      'Kosher restaurant King David Tbilisi': 'assets/img/places/kingdavid.jpg',
      'Mendis 7 Bambis Rigi Street Tbilisi': 'assets/img/places/mendis.jpg',
      'Shalom Aleichem Kosher Restaurant Tbilisi': 'assets/img/places/shalom.jpg',
      'Karalashvili wine cellar Tbilisi': 'assets/img/places/karalashvili.jpg',
      'Vino Underground Tbilisi': 'assets/img/places/vinounderground.jpg',
      'Weather Report Sky Bar Tbilisi': 'assets/img/places/weatherreport.jpg',
      'Cocktail Factory Tbilisi': 'assets/img/places/cocktailfactory.jpg',
      'Narikala Fortress Tbilisi': 'assets/img/places/narikala.jpg',
      'Rustaveli Avenue Tbilisi': 'assets/img/places/rustaveli.jpg',
      'Mtatsminda Park Tbilisi': 'assets/img/places/mtatsminda.jpg',
      'Leghvtakhevi Waterfall Tbilisi': 'assets/img/places/waterfall.jpg',
      'Rike Park Tbilisi': 'assets/img/places/rike.jpg',
      'Kikodze Bar Tbilisi': 'assets/img/places/kikodze.jpg',
      'Georgian House restaurant Giorgi Tsabadze Tbilisi': 'assets/img/places/georgianhouse.jpg',
      'Retro 1 Davit Gamrekeli Street Tbilisi': 'assets/img/places/retro.jpg',
      'Funicular Restaurant Complex Mtatsminda Tbilisi': 'assets/img/places/funicular.jpg',
      'OtsY Ioane Shavteli Street Tbilisi': 'assets/img/places/keto.jpg',
      'Keto & Kote Tbilisi': 'assets/img/places/otsy.jpg',
      'ALFREDO Irakli Abashidze Street Tbilisi': 'assets/img/places/alfredo.jpg',
      'Alubali Restaurant Tbilisi': 'assets/img/places/alubali.jpg'
    };
    var todoItems = catRow[2].map(function (x, i) {
      return { name: x[0], desc: x[1], tint: tints[i % tints.length], photo: PHOTOS[x[2]] || '', hasPhoto: !!PHOTOS[x[2]], noPhoto: !PHOTOS[x[2]], map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(x[2]) };
    });
    var rtl = lang === 'he';
    function carMove(dirSign) {
      if (!self.car) return;
      var step = 298;
      try { self.car.scrollBy({ left: dirSign * (rtl ? -1 : 1) * step, behavior: 'smooth' }); } catch (e) { self.car.scrollLeft += dirSign * (rtl ? -1 : 1) * step; }
    }
    var gcalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
      + '&text=' + encodeURIComponent(t.calText)
      + '&dates=20270121T120000Z/20270121T210000Z'
      + '&location=' + encodeURIComponent('Marani Hall, Aghmashenebeli St 156, Mtskheta 3300, Georgia');

    function buildDeco(v) {
      var keys = ['welcome', 'countdown', 'program', 'hupa', 'venue', 'dress', 'tips', 'todo', 'rsvp', 'wait', 'footer'];
      var dark = { program: 1, dress: 1, footer: 1 };
      var lilac = { countdown: 1, hupa: 1, rsvp: 1 };
      var base = 'position: absolute; pointer-events: none; z-index: -1; ';
      var out = {};
      keys.forEach(function (k) { out[k] = []; });
      var seed = 11;
      function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
      if (v === 'logo') {
        var counts = { welcome: 3, countdown: 2, program: 4, hupa: 5, venue: 4, dress: 2, tips: 6, todo: 3, rsvp: 5, wait: 2, footer: 2 };
        keys.forEach(function (k) {
          var n = counts[k];
          for (var i = 0; i < n; i++) {
            var size = Math.round(56 + rnd() * 70);
            var leftSide = (i % 2 === 0) !== (rnd() < 0.25);
            var left = leftSide ? Math.round(-size * 0.45 + rnd() * 40) : Math.round(390 - size * 0.55 - rnd() * 40);
            var top = ((i + 0.2 + rnd() * 0.6) / n * 100).toFixed(1);
            var rot = Math.round(-30 + rnd() * 60);
            var op = (dark[k] ? 0.08 + rnd() * 0.04 : 0.13 + rnd() * 0.06).toFixed(3);
            out[k].push({ cls: 'dmono', style: base + 'left: ' + left + 'px; top: ' + top + '%; width: ' + size + 'px; height: ' + size + 'px; margin-top: -' + Math.round(size / 2) + 'px; transform: rotate(' + rot + 'deg); opacity: ' + op });
          }
        });
      } else if (v === 'lattice') {
        var mask = 'linear-gradient(to bottom, #000 0, rgba(0,0,0,0) 34%, rgba(0,0,0,0) 66%, #000 100%)';
        keys.forEach(function (k) {
          var op = dark[k] ? 0.2 : (lilac[k] ? 0.5 : 0.38);
          out[k].push({ cls: 'dlat', style: base + 'inset: 0; opacity: ' + op + '; -webkit-mask-image: ' + mask + '; mask-image: ' + mask });
        });
      } else if (v === 'vine') {
        var P = {
          welcome: [['right: -64px; top: -64px', 220, 0, 0], ['left: -124px; bottom: -116px', 200, 180, 0]],
          countdown: [['left: -70px; top: -84px', 150, 0, 1]],
          program: [['right: -104px; top: -80px', 200, 0, 0]],
          hupa: [['right: -80px; top: -80px', 160, 0, 0]],
          venue: [['left: -80px; top: -80px', 160, 0, 1]],
          dress: [['left: -60px; top: -70px', 160, 0, 1], ['right: -60px; top: -70px', 160, 0, 0]],
          tips: [['right: -84px; bottom: -84px', 200, 90, 0]],
          todo: [['right: -64px; top: -84px', 160, 0, 0]],
          rsvp: [['right: -84px; bottom: -84px', 200, 90, 0]],
          wait: [['left: -70px; top: -84px', 160, 0, 1]],
          footer: [['left: -56px; top: -56px', 140, 0, 1], ['right: -56px; top: -56px', 140, 0, 0]]
        };
        keys.forEach(function (k) {
          var op = dark[k] ? 0.4 : (lilac[k] ? 0.6 : 0.5);
          P[k].forEach(function (p) {
            out[k].push({ cls: 'dvine', style: base + p[0] + '; width: ' + p[1] + 'px; height: ' + p[1] + 'px; transform: rotate(' + p[2] + 'deg)' + (p[3] ? ' scaleX(-1)' : '') + '; opacity: ' + op });
          });
        });
      } else if (v === 'arch') {
        var arches = { welcome: 1, program: 1, dress: 1, footer: 1 };
        keys.forEach(function (k) {
          var c = dark[k] ? 'rgba(201,176,128,0.42)' : 'rgba(168,141,94,0.45)';
          if (arches[k]) {
            out[k].push({ cls: '', style: base + 'left: 8px; right: 8px; top: 10px; bottom: -1px; border: 1px solid ' + c + '; border-bottom: 0; border-radius: 187px 187px 0 0 / 130px 130px 0 0' });
            out[k].push({ cls: '', style: base + 'left: 14px; right: 14px; top: 16px; bottom: -1px; border: 1px solid ' + c + '; border-bottom: 0; border-radius: 181px 181px 0 0 / 124px 124px 0 0' });
          } else {
            out[k].push({ cls: '', style: base + 'left: 50%; top: 20px; width: 92px; margin-left: -110px; border-top: 1px solid ' + c });
            out[k].push({ cls: '', style: base + 'left: 50%; top: 20px; width: 92px; margin-left: 18px; border-top: 1px solid ' + c });
            out[k].push({ cls: '', style: base + 'left: 50%; top: 15px; width: 9px; height: 9px; margin-left: -5px; border: 1px solid ' + c + '; transform: rotate(45deg)' });
          }
        });
      }
      return out;
    }
    var deco = buildDeco(this.props.bg || 'arch');
    return {
      deco: deco,
      t: t,
      lang: lang,
      dir: lang === 'he' ? 'rtl' : 'ltr',
      displayFont: FONT[lang].d,
      bodyFont: FONT[lang].b,
      italic: FONT[lang].italic,
      showPanel: !embedded,
      rootMinH: embedded ? ((parseInt(this.props.minH, 10) || 0) + 'px') : '100vh',
      testLangs: testLangs,
      hupaLabel: hupa ? 'Блок «Хупа»: показан' : 'Блок «Хупа»: скрыт',
      toggleHupa: function () { self.setState({ hupa: !hupa }); },
      showHupa: hupa,
      countdown: countdown,
      program: program,
      hupaItems: hupaItems,
      copyLabel: st.copied ? t.copied : t.copy,
      promoValue: PROMO,
      promoCopied: st.promoCopied,
      promoNotCopied: !st.promoCopied,
      promoAria: st.promoCopied ? t.promoDone : t.promoCopy,
      copyPromo: function () {
        try { if (navigator.clipboard) navigator.clipboard.writeText(PROMO); } catch (e) {}
        self.setState({ promoCopied: true });
        clearTimeout(self.pt);
        self.pt = setTimeout(function () { self.setState({ promoCopied: false }); }, 2500);
      },
      copyAddress: function () {
        try { if (navigator.clipboard) navigator.clipboard.writeText('Marani Hall, Aghmashenebeli St 156, Mtskheta 3300, Georgia'); } catch (e) {}
        self.setState({ copied: true });
        clearTimeout(self.ct);
        self.ct = setTimeout(function () { self.setState({ copied: false }); }, 2500);
      },
      showForm: !st.sent,
      sent: st.sent,
      name: st.name,
      onName: function (e) { self.setState({ name: e.target.value, errName: false }); },
      errName: st.errName,
      errAttend: st.errAttend,
      yesPressed: st.attend === 'yes' ? 'true' : 'false',
      noPressed: st.attend === 'no' ? 'true' : 'false',
      yesStyle: pill(st.attend === 'yes'),
      noStyle: pill(st.attend === 'no'),
      pickYes: function () { self.setState({ attend: 'yes', errAttend: false, guests: resize(self.state.count) }); },
      pickNo: function () { self.setState({ attend: 'no', errAttend: false }); },
      attendYes: st.attend === 'yes',
      count: st.count,
      dec: function () { var n = Math.max(1, self.state.count - 1); self.setState({ count: n, guests: resize(n) }); },
      inc: function () { var n = Math.min(12, self.state.count + 1); self.setState({ count: n, guests: resize(n) }); },
      guestFields: guestFields,
      submit: function () {
        var errName = !self.state.name.trim();
        var errAttend = !self.state.attend;
        var errGuests = self.state.attend === 'yes' ? self.state.guests.map(function (g) { return !String(g || '').trim(); }) : [];
        var anyGuest = errGuests.some(function (x) { return x; });
        if (errName || errAttend || anyGuest) { self.setState({ errName: errName, errAttend: errAttend, errGuests: errGuests }); return; }
        if (self.state.sending) return;
        self.setState({ sending: true });
        var st2 = self.state;
        window.WEDDING.sendRSVP({ name: st2.name.trim(), attend: st2.attend, count: st2.attend === "yes" ? st2.count : 0, guests: st2.attend === "yes" ? st2.guests.map(function (g) { return String(g || "").trim(); }) : [], lang: lang })
          .then(function () { self.setState({ sending: false, sent: true }); })
          .catch(function () { self.setState({ sending: false }); window.WEDDING.toast("sendError", lang); });
      },
      thanks: st.attend === 'no' ? t.thanksNo : t.thanksYes,
      edit: function () { self.setState({ sent: false }); },
      todoCats: todoCats,
      todoItems: todoItems,
      setCar: function (el) { self.car = el; },
      carPrev: function () { carMove(-1); },
      carNext: function () { carMove(1); },
      chevFlip: rtl ? 'transform: scaleX(-1)' : '',
      gcalUrl: gcalUrl
    };
  }
}
return Component;
})(window.DCLogic);
TPL.DesktopSections = "<div style=\"width: 100%; min-height: {{rootMinH}}; display: flex; flex-direction: column; container-type: inline-size; background: #F8F3EA; color: #3E322A; font-family: 'Spectral', serif\">\n\n<div dir=\"{{dir}}\" lang=\"{{lang}}\" style=\"flex: 1 0 auto; display: flex; flex-direction: column; font-family: {{bodyFont}}\">\n\n<section style=\"position: relative; isolation: isolate; padding: clamp(64px, 10cqi, 120px) clamp(24px, 6cqi, 64px); text-align: center\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.welcome}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<div style=\"max-width: 640px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 24px\">\n<img src=\"assets/img/logo.png\" alt=\"\" style=\"width: clamp(64px, 12cqi, 96px); height: auto\">\n<p style=\"margin: 0; font-size: clamp(21px, 3.2cqi, 30px); line-height: 1.55; font-weight: 300; font-style: {{italic}}; color: #3E322A\">{{t.welcome}}</p>\n<p style=\"margin: 0; font-family: {{displayFont}}; font-size: clamp(22px, 3cqi, 30px); color: #6E5885\">{{t.sign}}</p>\n</div>\n</section>\n\n<section style=\"position: relative; isolation: isolate; padding: clamp(36px, 5cqi, 64px) clamp(20px, 5cqi, 64px); background: #ECE4F0; text-align: center\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.countdown}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<div style=\"max-width: 720px; margin: 0 auto\">\n<h2 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(26px, 3.6cqi, 38px); line-height: 1.15; color: #3E322A\">{{t.cdTitle}}</h2>\n<div style=\"margin-top: clamp(16px, 2.4cqi, 28px); display: flex; flex-wrap: nowrap; justify-content: center; gap: clamp(8px, 1.4cqi, 16px)\">\n<sc-for list=\"{{countdown}}\" as=\"item\" hint-placeholder-count=\"4\">\n<div style=\"flex: 1 1 0; max-width: 140px; box-sizing: border-box; padding: clamp(10px, 1.6cqi, 16px) 4px; background: #F8F3EA; border: 1px solid #D9CCE3; border-radius: 4px; display: flex; flex-direction: column; align-items: center; gap: 6px\">\n<span style=\"font-family: 'Forum', serif; font-size: clamp(30px, 6cqi, 56px); line-height: 1; color: #6E5885\">{{item.value}}</span>\n<span style=\"font-size: clamp(12px, 1.5cqi, 14px); color: #5F5046\">{{item.unit}}</span>\n</div>\n</sc-for>\n</div>\n<div style=\"margin-top: clamp(14px, 2.2cqi, 22px); display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 8px\">\n<span style=\"flex: none; white-space: nowrap; font-size: 15px; color: #3E322A; margin-inline-end: 6px\">{{t.calTitle}}:</span>\n<a href=\"{{gcalUrl}}\" style=\"min-height: 40px; display: inline-flex; align-items: center; padding: 0 clamp(12px, 2cqi, 18px); border: 1px solid #6E5885; border-radius: 20px; background: #F8F3EA; color: #3E322A; text-decoration: none; font-size: clamp(13px, 1.8cqi, 15px); white-space: nowrap\">{{t.gcal}}</a>\n<a href=\"#ics\" style=\"min-height: 40px; display: inline-flex; align-items: center; padding: 0 clamp(12px, 2cqi, 18px); border: 1px solid #6E5885; border-radius: 20px; background: #F8F3EA; color: #3E322A; text-decoration: none; font-size: clamp(13px, 1.8cqi, 15px); white-space: nowrap\">{{t.ics}}</a>\n</div>\n</div>\n</section>\n\n<section style=\"position: relative; isolation: isolate; padding: clamp(64px, 10cqi, 120px) clamp(24px, 6cqi, 64px); background: #3E322A\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.program}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<div style=\"max-width: 560px; margin: 0 auto\">\n<h2 style=\"margin: 0; text-align: center; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(32px, 5cqi, 52px); line-height: 1.15; color: #EFE6D8\">{{t.progTitle}}</h2>\n<ol style=\"list-style: none; margin: clamp(32px, 5cqi, 52px) auto 0; padding: 0; width: fit-content; max-width: 100%\">\n<sc-for list=\"{{program}}\" as=\"item\" hint-placeholder-count=\"4\">\n<li style=\"position: relative; display: flex; align-items: flex-start; gap: clamp(18px, 3cqi, 28px); padding-bottom: {{item.pad}}\">\n<sc-if value=\"{{item.line}}\" hint-placeholder-val=\"{{ true }}\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset-inline-start: 15px; top: 32px; bottom: 0; width: 1px; background: #C9B080\"></div>\n</sc-if>\n<div aria-hidden=\"true\" style=\"flex: none; position: relative; width: 32px; height: 32px; box-sizing: border-box; border: 1.5px solid #C9B080; border-radius: 50%; background: #3E322A; display: flex; align-items: center; justify-content: center\">\n<div style=\"width: 10px; height: 10px; border-radius: 50%; background: #C9B080\"></div>\n</div>\n<div style=\"display: flex; flex-direction: column; gap: 6px; padding-top: 2px\">\n<span style=\"font-family: 'Forum', serif; font-size: clamp(28px, 4.4cqi, 38px); line-height: 1; color: #C9B080\">{{item.time}}</span>\n<span style=\"font-size: clamp(18px, 2.6cqi, 22px); line-height: 1.35; color: #EFE6D8\">{{item.label}}</span>\n</div>\n</li>\n</sc-for>\n</ol>\n</div>\n</section>\n\n<sc-if value=\"{{showHupa}}\" hint-placeholder-val=\"{{ true }}\">\n<section style=\"position: relative; isolation: isolate; z-index: 2; padding: clamp(56px, 9cqi, 112px) clamp(24px, 6cqi, 64px); background: #ECE4F0\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.hupa}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<div style=\"max-width: 960px; margin: 0 auto\">\n<h2 style=\"margin: 0; text-align: center; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(32px, 5cqi, 52px); line-height: 1.15; color: #3E322A\">{{t.hupaTitle}}</h2>\n<p style=\"margin: 20px auto 0; max-width: 640px; text-align: center; font-size: clamp(17px, 2.4cqi, 21px); line-height: 1.6; color: #3E322A\">{{t.hupaWhat}}</p>\n<p style=\"margin: 14px auto 0; max-width: 560px; text-align: center; font-size: clamp(16px, 2.2cqi, 19px); line-height: 1.55; color: #5F5046\">{{t.hupaIntro}}</p>\n<div style=\"margin-top: clamp(28px, 5cqi, 48px); display: flex; flex-wrap: wrap; gap: 16px\">\n<sc-for list=\"{{hupaItems}}\" as=\"item\" hint-placeholder-count=\"4\">\n<div style=\"flex: 1 1 300px; position: relative; box-sizing: border-box; padding: clamp(20px, 3.4cqi, 32px); background: #F8F3EA; border-radius: 4px; z-index: {{item.z}}\">\n<div style=\"display: flex; align-items: center; gap: 10px\">\n<h3 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(24px, 3.4cqi, 30px); color: #6E5885\">{{item.t}}</h3>\n<sc-if value=\"{{item.hasInfo}}\" hint-placeholder-val=\"{{ false }}\">\n<span onMouseEnter=\"{{item.infoShow}}\" onMouseLeave=\"{{item.infoHide}}\" style=\"position: relative; display: inline-flex\">\n<button type=\"button\" aria-label=\"{{t.infoAria}}\" aria-expanded=\"{{item.infoExpanded}}\" onClick=\"{{item.infoToggle}}\" style=\"width: 32px; height: 32px; border: 1px solid #A58CBB; border-radius: 16px; background: transparent; color: #6E5885; font-family: 'Spectral', serif; font-size: 16px; font-style: italic; line-height: 1; cursor: pointer; display: inline-flex; align-items: center; justify-content: center\">i</button>\n<sc-if value=\"{{item.infoOpen}}\" hint-placeholder-val=\"{{ false }}\">\n<div role=\"tooltip\" style=\"position: absolute; top: 40px; inset-inline-start: -12px; width: min(340px, 78cqi); box-sizing: border-box; padding: 18px 20px; background: #3E322A; color: #EFE6D8; border-radius: 4px; box-shadow: 0 10px 30px rgba(62,50,42,0.25); text-align: start\">\n<p style=\"margin: 0 0 10px; font-family: {{displayFont}}; font-size: 20px; color: #C9B080\">{{item.t}}</p>\n<ol style=\"margin: 0; padding-inline-start: 20px; display: flex; flex-direction: column; gap: 6px\">\n<sc-for list=\"{{item.info}}\" as=\"line\" hint-placeholder-count=\"7\">\n<li style=\"font-size: 14px; line-height: 1.5\">{{line.text}}</li>\n</sc-for>\n</ol>\n</div>\n</sc-if>\n</span>\n</sc-if>\n</div>\n<p style=\"margin: 10px 0 0; font-size: clamp(16px, 2.1cqi, 18px); line-height: 1.55; color: #3E322A\">{{item.d}}</p>\n</div>\n</sc-for>\n</div>\n</div>\n</section>\n</sc-if>\n\n<section style=\"position: relative; isolation: isolate; padding: clamp(64px, 10cqi, 120px) clamp(24px, 6cqi, 64px)\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.venue}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<div style=\"max-width: 1040px; margin: 0 auto\">\n<h2 style=\"margin: 0; text-align: center; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(32px, 5cqi, 52px); line-height: 1.15; color: #3E322A\">{{t.venueTitle}}</h2>\n<div style=\"margin-top: clamp(28px, 5cqi, 48px); display: flex; flex-wrap: wrap; gap: clamp(24px, 4cqi, 48px); align-items: center\">\n<div style=\"flex: 1 1 320px; position: relative; min-height: clamp(220px, 34cqi, 380px); background: #E2D3BC; border-radius: 4px; overflow: hidden\">\n<img src=\"assets/img/venue.jpg\" alt=\"Marani Hall\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 37%\">\n</div>\n<div style=\"flex: 1 1 320px; display: flex; flex-direction: column; gap: 14px\">\n<p style=\"margin: 0; font-family: 'Forum', serif; font-size: clamp(36px, 5.4cqi, 52px); line-height: 1.05; color: #3E322A\">Marani Hall</p>\n<p dir=\"ltr\" style=\"margin: 0; font-size: clamp(17px, 2.3cqi, 20px); line-height: 1.5; color: #3E322A; text-align: start\">Aghmashenebeli St 156, Mtskheta 3300, Georgia</p>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.5; color: #5F5046\">{{t.inKa}}: <span style=\"font-family: 'Noto Serif Georgian', serif; color: #3E322A\">მცხეთა, დავით აღმაშენებლის ქუჩა 156</span></p>\n<div style=\"display: flex; flex-wrap: wrap; gap: 10px; margin-top: 6px\">\n<button type=\"button\" onClick=\"{{copyAddress}}\" style=\"min-height: 48px; padding: 0 20px; border: 1px solid #3E322A; border-radius: 2px; background: transparent; color: #3E322A; font-family: inherit; font-size: 16px; cursor: pointer\">{{copyLabel}}</button>\n</div>\n<p style=\"margin: 12px 0 0; font-size: 15px; color: #5F5046\">{{t.maps}}</p>\n<div style=\"display: flex; flex-wrap: wrap; gap: 8px\">\n<a href=\"https://www.google.com/maps/search/?api=1&amp;query=Marani%20Hall%2C%20Aghmashenebeli%20St%20156%2C%20Mtskheta\" style=\"min-height: 44px; display: inline-flex; align-items: center; padding: 0 16px; border-radius: 22px; background: #E2D3BC; color: #3E322A; text-decoration: none; font-size: 15px\">Google Maps</a>\n<a href=\"https://maps.apple.com/?q=Marani%20Hall&amp;address=Aghmashenebeli%20St%20156%2C%20Mtskheta%203300%2C%20Georgia\" style=\"min-height: 44px; display: inline-flex; align-items: center; padding: 0 16px; border-radius: 22px; background: #E2D3BC; color: #3E322A; text-decoration: none; font-size: 15px\">Apple Maps</a>\n<a href=\"https://waze.com/ul?q=Marani%20Hall%20Mtskheta&amp;navigate=yes\" style=\"min-height: 44px; display: inline-flex; align-items: center; padding: 0 16px; border-radius: 22px; background: #E2D3BC; color: #3E322A; text-decoration: none; font-size: 15px\">Waze</a>\n<a href=\"https://yandex.com/maps/?text=Marani%20Hall%2C%20Aghmashenebeli%20St%20156%2C%20Mtskheta\" style=\"min-height: 44px; display: inline-flex; align-items: center; padding: 0 16px; border-radius: 22px; background: #E2D3BC; color: #3E322A; text-decoration: none; font-size: 15px\">{{t.yandex}}</a>\n</div>\n</div>\n</div>\n</div>\n</section>\n\n<section style=\"position: relative; isolation: isolate; padding: clamp(72px, 12cqi, 140px) clamp(24px, 6cqi, 64px); background: #3E322A; text-align: center\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.dress}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<p style=\"margin: 0; font-size: clamp(16px, 2.2cqi, 20px); color: #CDBFB0\">{{t.dress}}</p>\n<p style=\"margin: 12px 0 0; font-family: 'Forum', serif; font-size: clamp(60px, 13cqi, 150px); line-height: 1; color: #C9B080\">Black Tie</p>\n<p style=\"margin: clamp(16px, 2.6cqi, 28px) auto 0; max-width: 560px; font-size: clamp(17px, 2.4cqi, 22px); line-height: 1.6; color: #EFE6D8; white-space: pre-line\">{{t.dressSub}}</p>\n</section>\n\n<section style=\"position: relative; isolation: isolate; padding: clamp(64px, 10cqi, 120px) clamp(24px, 6cqi, 64px)\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.tips}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<div style=\"max-width: 1040px; margin: 0 auto\">\n<h2 style=\"margin: 0; text-align: center; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(32px, 5cqi, 52px); line-height: 1.15; color: #3E322A\">{{t.tipsTitle}}</h2>\n<div style=\"margin-top: clamp(28px, 5cqi, 48px); display: flex; flex-wrap: wrap; gap: 16px\">\n\n<div style=\"flex: 1 1 420px; box-sizing: border-box; padding: clamp(22px, 3.6cqi, 36px); border: 1px solid #E2D3BC; border-radius: 4px; display: flex; flex-direction: column; gap: 12px\">\n<svg aria-hidden=\"true\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#6E5885\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 17h14M5 17v-4l2-5h10l2 5v4M5 17v2M19 17v2\"></path><circle cx=\"8\" cy=\"14\" r=\"1\"></circle><circle cx=\"16\" cy=\"14\" r=\"1\"></circle></svg>\n<h3 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(24px, 3.2cqi, 30px); color: #3E322A\">{{t.taxiT}}</h3>\n<p style=\"margin: 0; font-size: clamp(16px, 2.1cqi, 18px); line-height: 1.6; color: #3E322A\">{{t.taxiD}}</p>\n</div>\n\n<div style=\"flex: 1 1 420px; box-sizing: border-box; padding: clamp(22px, 3.6cqi, 36px); border: 1px solid #E2D3BC; border-radius: 4px; display: flex; flex-direction: column; gap: 12px\">\n<svg aria-hidden=\"true\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#6E5885\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 19v-3M10 19v-6M15 19v-9M20 19V7\"></path></svg>\n<h3 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(24px, 3.2cqi, 30px); color: #3E322A\">{{t.netT}}</h3>\n<p style=\"margin: 0; font-size: clamp(16px, 2.1cqi, 18px); line-height: 1.6; color: #3E322A\">{{t.netD}}</p>\n<div style=\"display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-top: 4px\">\n<span style=\"min-height: 44px; display: inline-flex; align-items: center; gap: 8px; padding: 0 4px 0 14px; border: 1px dashed #A58CBB; border-radius: 4px; font-size: 15px; color: #3E322A\">{{t.promo}}: <span style=\"color: #6E5885\">{{promoValue}}</span>\n<button type=\"button\" onClick=\"{{copyPromo}}\" aria-label=\"{{promoAria}}\" title=\"{{promoAria}}\" style=\"width: 40px; height: 40px; flex: none; display: inline-flex; align-items: center; justify-content: center; border: 0; border-radius: 4px; background: transparent; color: #6E5885; cursor: pointer\">\n<sc-if value=\"{{promoCopied}}\" hint-placeholder-val=\"{{ false }}\">\n<svg aria-hidden=\"true\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.5l4.5 4.5L19 7.5\"></path></svg>\n</sc-if>\n<sc-if value=\"{{promoNotCopied}}\" hint-placeholder-val=\"{{ true }}\">\n<svg aria-hidden=\"true\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"9\" y=\"9\" width=\"11\" height=\"11\" rx=\"2\"></rect><path d=\"M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3\"></path></svg>\n</sc-if>\n</button>\n</span>\n<a href=\"https://unisim.net/?promocode=glwedding\" style=\"min-height: 44px; display: inline-flex; align-items: center; padding: 0 16px; border-radius: 22px; background: #E2D3BC; color: #3E322A; text-decoration: none; font-size: 15px\">{{t.unisim}}</a>\n</div>\n</div>\n\n<div style=\"flex: 1 1 420px; box-sizing: border-box; padding: clamp(22px, 3.6cqi, 36px); border: 1px solid #E2D3BC; border-radius: 4px; display: flex; flex-direction: column; gap: 12px\">\n<svg aria-hidden=\"true\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#6E5885\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9.5 4.5L12 6l2.5-1.5M9.5 19.5L12 18l2.5 1.5\"></path></svg>\n<h3 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(24px, 3.2cqi, 30px); color: #3E322A\">{{t.weatherT}}</h3>\n<p style=\"margin: 0; font-size: clamp(16px, 2.1cqi, 18px); line-height: 1.6; color: #3E322A\">{{t.weatherD}}</p>\n</div>\n\n<div style=\"flex: 1 1 420px; box-sizing: border-box; padding: clamp(22px, 3.6cqi, 36px); border: 1px solid #E2D3BC; border-radius: 4px; display: flex; flex-direction: column; gap: 12px\">\n<svg aria-hidden=\"true\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#6E5885\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"9\" cy=\"9\" r=\"5.5\"></circle><path d=\"M14.5 8.6a5.5 5.5 0 1 1-5.9 5.9\"></path></svg>\n<h3 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(24px, 3.2cqi, 30px); color: #3E322A\">{{t.moneyT}}</h3>\n<p style=\"margin: 0; font-size: clamp(16px, 2.1cqi, 18px); line-height: 1.6; color: #3E322A\">{{t.moneyD}}</p>\n</div>\n\n</div>\n</div>\n</section>\n\n<section style=\"position: relative; isolation: isolate; padding: clamp(56px, 9cqi, 104px) 0; background: #EFE6D8\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.todo}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<div style=\"max-width: 1040px; margin: 0 auto; padding: 0 clamp(24px, 6cqi, 64px); box-sizing: border-box\">\n<h2 style=\"margin: 0; text-align: center; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(32px, 5cqi, 52px); line-height: 1.15; color: #3E322A\">{{t.todoTitle}}</h2>\n<p style=\"margin: 12px auto 0; max-width: 560px; text-align: center; font-size: clamp(16px, 2.2cqi, 19px); line-height: 1.55; color: #5F5046\">{{t.todoSub}}</p>\n<div role=\"tablist\" aria-label=\"{{t.todoTitle}}\" style=\"margin-top: clamp(24px, 4cqi, 36px); display: flex; flex-wrap: nowrap; justify-content: safe center; gap: 8px; overflow-x: auto; padding-bottom: 4px\">\n<sc-for list=\"{{todoCats}}\" as=\"item\" hint-placeholder-count=\"5\">\n<button type=\"button\" role=\"tab\" aria-selected=\"{{item.selected}}\" onClick=\"{{item.pick}}\" style=\"{{item.style}}\">{{item.label}}</button>\n</sc-for>\n</div>\n</div>\n<div ref=\"{{setCar}}\" style=\"margin-top: clamp(20px, 3cqi, 28px); display: flex; gap: 16px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: clamp(24px, 6cqi, 64px); padding: 4px clamp(24px, 6cqi, 64px) 12px; box-sizing: border-box; max-width: 1168px; margin-inline: auto\">\n<sc-for list=\"{{todoItems}}\" as=\"item\" hint-placeholder-count=\"4\">\n<div style=\"flex: 0 0 clamp(250px, 72cqi, 300px); scroll-snap-align: start; box-sizing: border-box; background: #F8F3EA; border-radius: 4px; overflow: hidden; display: flex; flex-direction: column\">\n<div style=\"position: relative; height: 150px; background: {{item.tint}}; overflow: hidden\">\n<sc-if value=\"{{item.hasPhoto}}\" hint-placeholder-val=\"{{ true }}\"><img src=\"{{item.photo}}\" alt=\"{{item.name}}\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover\"></sc-if>\n<sc-if value=\"{{item.noPhoto}}\" hint-placeholder-val=\"{{ false }}\"><span style=\"position: absolute; left: 14px; bottom: 12px; font-size: 12px; color: #5F5046\">Фото — добавим позже</span></sc-if>\n</div>\n<div style=\"flex: 1; box-sizing: border-box; padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 8px\">\n<h3 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(22px, 3cqi, 26px); line-height: 1.2; color: #3E322A\">{{item.name}}</h3>\n<p style=\"margin: 0; font-size: 15px; line-height: 1.55; color: #3E322A\">{{item.desc}}</p>\n<a href=\"{{item.map}}\" style=\"margin-top: auto; align-self: flex-start; min-height: 40px; display: inline-flex; align-items: center; padding: 0 14px; border-radius: 20px; background: #E2D3BC; color: #3E322A; text-decoration: none; font-size: 14px\">{{t.mapLbl}}</a>\n</div>\n</div>\n</sc-for>\n</div>\n<div style=\"margin-top: 8px; display: flex; justify-content: center; gap: 12px\">\n<button type=\"button\" aria-label=\"{{t.prevLbl}}\" onClick=\"{{carPrev}}\" style=\"width: 44px; height: 44px; border: 1px solid #8A7867; border-radius: 22px; background: transparent; color: #3E322A; cursor: pointer; display: inline-flex; align-items: center; justify-content: center\">\n<svg aria-hidden=\"true\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"{{chevFlip}}\"><path d=\"M15 5l-7 7 7 7\"></path></svg>\n</button>\n<button type=\"button\" aria-label=\"{{t.nextLbl}}\" onClick=\"{{carNext}}\" style=\"width: 44px; height: 44px; border: 1px solid #8A7867; border-radius: 22px; background: transparent; color: #3E322A; cursor: pointer; display: inline-flex; align-items: center; justify-content: center\">\n<svg aria-hidden=\"true\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"{{chevFlip}}\"><path d=\"M9 5l7 7-7 7\"></path></svg>\n</button>\n</div>\n</section>\n\n<section id=\"rsvp\" style=\"position: relative; isolation: isolate; padding: clamp(64px, 10cqi, 120px) clamp(24px, 6cqi, 64px); background: #ECE4F0\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.rsvp}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<div style=\"max-width: 560px; margin: 0 auto\">\n<h2 style=\"margin: 0; text-align: center; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(32px, 5cqi, 52px); line-height: 1.15; color: #3E322A\">{{t.rsvpTitle}}</h2>\n<p style=\"margin: 12px 0 0; text-align: center; font-size: clamp(16px, 2.2cqi, 19px); color: #5F5046\">{{t.rsvpBy}}</p>\n\n<sc-if value=\"{{showForm}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"margin-top: clamp(28px, 5cqi, 40px); box-sizing: border-box; padding: clamp(22px, 4cqi, 40px); background: #F8F3EA; border-radius: 4px; display: flex; flex-direction: column; gap: 22px\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"rsvp-name\" style=\"font-size: 16px; color: #3E322A\">{{t.nameL}}</label>\n<input id=\"rsvp-name\" type=\"text\" value=\"{{name}}\" onChange=\"{{onName}}\" autocomplete=\"name\" style=\"min-height: 50px; box-sizing: border-box; padding: 0 14px; border: 1px solid #8A7867; border-radius: 2px; background: #FFFDF9; font-family: inherit; font-size: 17px; color: #3E322A\">\n<sc-if value=\"{{errName}}\" hint-placeholder-val=\"{{ false }}\">\n<p style=\"margin: 0; font-size: 14px; color: #9A3B2E\">{{t.errName}}</p>\n</sc-if>\n</div>\n\n<div style=\"display: flex; flex-direction: column; gap: 10px\" role=\"group\" aria-label=\"{{t.attendL}}\">\n<p style=\"margin: 0; font-size: 16px; color: #3E322A\">{{t.attendL}}</p>\n<div style=\"display: flex; flex-wrap: wrap; gap: 10px\">\n<button type=\"button\" onClick=\"{{pickYes}}\" aria-pressed=\"{{yesPressed}}\" style=\"{{yesStyle}}\">{{t.yes}}</button>\n<button type=\"button\" onClick=\"{{pickNo}}\" aria-pressed=\"{{noPressed}}\" style=\"{{noStyle}}\">{{t.no}}</button>\n</div>\n<sc-if value=\"{{errAttend}}\" hint-placeholder-val=\"{{ false }}\">\n<p style=\"margin: 0; font-size: 14px; color: #9A3B2E\">{{t.errAttend}}</p>\n</sc-if>\n</div>\n\n<sc-if value=\"{{attendYes}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display: flex; flex-direction: column; gap: 10px\">\n<p style=\"margin: 0; font-size: 16px; color: #3E322A\">{{t.countL}}</p>\n<div style=\"display: flex; align-items: center; gap: 14px\">\n<button type=\"button\" aria-label=\"−1\" onClick=\"{{dec}}\" style=\"width: 48px; height: 48px; border: 1px solid #8A7867; border-radius: 24px; background: transparent; color: #3E322A; font-size: 22px; cursor: pointer\">−</button>\n<span style=\"min-width: 32px; text-align: center; font-family: 'Forum', serif; font-size: 32px; color: #6E5885\">{{count}}</span>\n<button type=\"button\" aria-label=\"+1\" onClick=\"{{inc}}\" style=\"width: 48px; height: 48px; border: 1px solid #8A7867; border-radius: 24px; background: transparent; color: #3E322A; font-size: 22px; cursor: pointer\">+</button>\n</div>\n</div>\n<sc-for list=\"{{guestFields}}\" as=\"item\" hint-placeholder-count=\"0\">\n<div style=\"display: flex; flex-direction: column; gap: 8px\">\n<label for=\"{{item.id}}\" style=\"font-size: 16px; color: #3E322A\">{{item.label}}</label>\n<input id=\"{{item.id}}\" type=\"text\" required aria-required=\"true\" aria-invalid=\"{{item.invalid}}\" value=\"{{item.value}}\" onChange=\"{{item.onChange}}\" style=\"{{item.inputStyle}}\">\n<sc-if value=\"{{item.err}}\" hint-placeholder-val=\"{{ false }}\">\n<p style=\"margin: 0; font-size: 14px; color: #9A3B2E\">{{t.errGuest}}</p>\n</sc-if>\n</div>\n</sc-for>\n</sc-if>\n\n<button type=\"button\" onClick=\"{{submit}}\" style=\"min-height: 56px; border: 0; border-radius: 2px; background: #C9B080; color: #3E322A; font-family: inherit; font-size: 17px; letter-spacing: 0.04em; cursor: pointer\">{{t.send}}</button>\n</div>\n</sc-if>\n\n<sc-if value=\"{{sent}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"margin-top: clamp(28px, 5cqi, 40px); box-sizing: border-box; padding: clamp(28px, 5cqi, 48px); background: #F8F3EA; border-radius: 4px; display: flex; flex-direction: column; align-items: center; gap: 18px; text-align: center\">\n<img src=\"assets/img/logo.png\" alt=\"\" style=\"width: 64px; height: auto\">\n<p style=\"margin: 0; font-size: clamp(19px, 2.8cqi, 24px); line-height: 1.5; color: #3E322A\">{{thanks}}</p>\n<button type=\"button\" onClick=\"{{edit}}\" style=\"min-height: 44px; padding: 0 18px; border: 1px solid #6E5885; border-radius: 22px; background: transparent; color: #6E5885; font-family: inherit; font-size: 15px; cursor: pointer\">{{t.edit}}</button>\n</div>\n</sc-if>\n</div>\n</section>\n\n<section style=\"position: relative; isolation: isolate; padding: clamp(72px, 10cqi, 120px) clamp(24px, 6cqi, 64px); text-align: center\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.wait}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<h2 style=\"margin: 0; font-family: {{displayFont}}; font-weight: 400; font-size: clamp(40px, 5.5cqi, 60px); line-height: 1.15; color: #3E322A\">{{t.waitTitle}}</h2>\n<p style=\"margin: clamp(14px, 2cqi, 20px) 0 0; font-size: clamp(20px, 2.4cqi, 24px); line-height: 1.45; font-style: {{italic}}; color: #6E5885\">{{t.waitSign}}</p>\n</section>\n\n<footer style=\"flex: none; position: relative; isolation: isolate; padding: clamp(48px, 4.5cqi, 64px) clamp(24px, 6cqi, 64px); background: #3E322A; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; text-align: center\">\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; overflow: hidden; z-index: -1; pointer-events: none\"><sc-for list=\"{{deco.footer}}\" as=\"d\" hint-placeholder-count=\"0\"><div class=\"{{d.cls}}\" style=\"{{d.style}}\"></div></sc-for></div>\n<img src=\"assets/img/logo.png\" alt=\"George &amp; Lana\" style=\"width: clamp(64px, 6cqi, 80px); height: auto\">\n<p style=\"margin: 0; font-family: {{displayFont}}; font-size: clamp(28px, 3cqi, 38px); line-height: 1.2; color: #EFE6D8\">{{t.names}}</p>\n<div style=\"display: flex; align-items: center; gap: 16px\">\n<p style=\"margin: 0; font-size: 16px; letter-spacing: 0.14em; color: #CDBFB0\">21.01.2027</p>\n<div aria-hidden=\"true\" style=\"width: 1px; height: 18px; background: #C9B080\"></div>\n<p style=\"margin: 0; font-size: 15px; color: #C9B080\">{{t.hdate}}</p>\n</div>\n</footer>\n\n</div>\n</div>";
COMP.DesktopSections = (function (DCLogic) {
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { lang: null, hupa: null, now: Date.now(), name: '', attend: null, count: 1, guests: [], sent: false, errName: false, errAttend: false, copied: false, promoCopied: false, cat: 'food', infoIdx: null, errGuests: [] };
  }
  componentDidMount() {
    var self = this;
    this.iv = setInterval(function () { self.setState({ now: Date.now() }); }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.iv);
    clearTimeout(this.ct);
    clearTimeout(this.pt);
  }
  renderVals() {
    var self = this;
    var st = this.state;
    var T = {
      ru: {
        names: 'Георгий и Лана', hdate: '13 Шват 5787',
        welcome: 'Скоро начнётся наша общая история, и нам очень хочется, чтобы её первые страницы были написаны рядом с вами. Будем счастливы видеть вас на нашей свадьбе.', sign: 'С любовью, \nГеоргий и Лана',
        cdTitle: 'До встречи осталось', cdWhen: '21.01.2027, 16:00 по времени Тбилиси',
        progTitle: 'Программа дня', prog: ['Сбор гостей', 'Хупа', 'Начало банкета'],
        kosher: 'Для всех гостей будет полностью кошерное меню.',
        infoAria: 'Какие это благословения', hupaTitle: 'Что такое хупа', hupaWhat: 'Хупа — это еврейская свадебная церемония. Она проходит под балдахином, который тоже называют хупой: жених и невеста стоят под ним, раввин проводит обряд, и именно здесь они становятся мужем и женой.', hupaIntro: 'Церемония полна символов. Вот главные из них.',
        hupaItems: [['Балдахин', 'Символ будущего общего дома пары.'], ['Ктуба', 'Брачный договор, его зачитывают вслух во время церемонии.'], ['Семь благословений', 'Благословения, которые произносят над бокалом вина.', ['«Сотворивший плод виноградной лозы» — благословение над вином.', '«Всё сотворивший во славу Свою».', '«Сотворивший человека».', 'Сотворение человека по образу Творца и продолжение жизни.', 'Радость Сиона о возвращении её детей.', 'Пожелание жениху и невесте радости, как у первых людей в Эдемском саду.', 'Благословение радости и веселья, любви, братства, мира и дружбы — и голоса жениха и невесты в Иерусалиме.']], ['Разбитый бокал', 'Жених разбивает бокал в память о разрушенном Храме. Это конец церемонии — гости кричат «Мазаль тов!», то есть «Поздравляем!».']],
        venueTitle: 'Место проведения', inKa: 'По-грузински', copy: 'Скопировать адрес', copied: 'Адрес скопирован', maps: 'Открыть на карте', yandex: 'Яндекс Карты',
        dress: 'Дресс-код', dressSub: 'Костюм для мужчин\nВечерние платья для дам',
        tipsTitle: 'Если вы приезжаете в Тбилиси',
        taxiT: 'Такси', taxiD: 'Пользуйтесь приложениями Bolt или Yandex Go: цена видна заранее, оплатить можно картой. В аэропорту не соглашайтесь на предложения водителей в зале прилёта — закажите машину в приложении.',
        netT: 'Мобильный интернет', netD: 'Удобнее всего eSIM UNISIM: интернет работает сразу после прилёта, а платите вы только за использованный трафик.',
        promo: 'Промокод на 20%', promoCopy: 'Скопировать промокод', promoDone: 'Промокод скопирован', unisim: 'Открыть unisim.net',
        weatherT: 'Погода в январе', weatherD: 'Днём в среднем около +7 °C, ночью около −2 °C, возможен снег. Вечером понадобится тёплое пальто.',
        moneyT: 'Обмен денег', moneyD: 'Валюта — грузинский лари. Если хотите обменять валюту, в городе курс будет выгоднее. Также практически везде можно платить картой. Оплата картами РФ недоступна.',
        rsvpTitle: 'Подтвердите участие', rsvpBy: 'Подтвердите ваше присутствие до 15.11.2026. Это очень поможет в организации мероприятия.',
        nameL: 'Ваше имя и фамилия', attendL: 'Подтвердите присутствие на торжестве', yes: 'С радостью приду', no: 'К сожалению, не смогу',
        countL: 'Сколько вас будет, включая вас', guest: 'Имя гостя', send: 'Отправить ответ',
        errName: 'Укажите имя', errGuest: 'Укажите имя гостя', errAttend: 'Выберите, придёте ли вы',
        thanksYes: 'Спасибо! Ждём вас 21.01.2027.', thanksNo: 'Спасибо, что сообщили. Нам будет вас не хватать.', edit: 'Изменить ответ',
        todoTitle: 'Что делать в Тбилиси', todoSub: 'Для тех, кто приедет заранее или останется после свадьбы.', mapLbl: 'На карте', prevLbl: 'Назад', nextLbl: 'Вперёд',
        todo: [
          ['food', 'Где поесть', [['Alubali', 'Традиционная грузинская кухня по старинным рецептам из разных регионов, уютный зелёный двор.', 'Alubali Restaurant Tbilisi'], ['Alfredo', 'Итальянская кухня: пицца, паста, ризотто. Столик лучше бронировать заранее.', 'ALFREDO Irakli Abashidze Street Tbilisi'], ['OtsY', 'Современная грузинская кухня в Старом городе, с видом на часовую башню. Столик лучше бронировать заранее.', 'OtsY Ioane Shavteli Street Tbilisi'], ['Keto & Kote', 'Грузинская кухня в старом особняке с садом и видом на город. Вывески нет — вход со двора.', 'Keto & Kote Tbilisi'], ['Пончики на Фуникулёре', 'Знаменитые пончики с кремом в кафе на вершине Мтацминды. Наверх удобно подняться на фуникулёре.', 'Funicular Restaurant Complex Mtatsminda Tbilisi'], ['Retro', 'Вкусные хачапури по-аджарски — тесто готовят прямо на глазах.', 'Retro 1 Davit Gamrekeli Street Tbilisi'], ['Georgian House', 'Классическая грузинская еда с колоритом: большие залы, бывают живая музыка и национальные танцы.', 'Georgian House restaurant Giorgi Tsabadze Tbilisi'], ['Kikodze', 'Завтраки: сырники и бенедикт с лососем. Внутри бывшей винной фабрики Wine Factory N1.', 'Kikodze Bar Tbilisi']]],
          ['kosher', 'Кошерная еда', [['Mendi’s', 'Кошерная грузинская кухня в Старом городе, на улице Бамбис Риги. В шаббат закрыт.', 'Mendis 7 Bambis Rigi Street Tbilisi'], ['Shalom Aleichem', 'Кошерный ресторан рядом с Большой синагогой: фалафель, хумус, пита. В шаббат закрыт.', 'Shalom Aleichem Kosher Restaurant Tbilisi'], ['King David', 'Традиционные грузинские блюда, всё кошерное, и кошерное грузинское вино. Рядом с Большой синагогой. В шаббат закрыт.', 'Kosher restaurant King David Tbilisi'], ['Organique Kosher Grill', 'Кошерный гриль: израильские и грузинские блюда. Закрыт в пятницу и субботу.', 'Organique Kosher Grill Tbilisi']]],
          ['sights', 'Что посмотреть', [['Парк Рике', 'Парк на берегу Куры у Моста Мира; отсюда отправляется канатная дорога к Нарикале.', 'Rike Park Tbilisi'], ['Водопад Легвтахеви', 'Водопад в ущелье прямо за серными банями, в нескольких минутах ходьбы от Старого города.', 'Leghvtakhevi Waterfall Tbilisi'], ['Парк Мтацминда', 'Парк развлечений на вершине горы Мтацминда, с колесом обозрения и панорамой города. Наверх — на фуникулёре.', 'Mtatsminda Park Tbilisi'], ['Проспект Руставели', 'Главная улица города: опера, театры, музеи и кафе.', 'Rustaveli Avenue Tbilisi'], ['Крепость Нарикала', 'Древняя крепость над Старым городом. Наверх можно подняться на канатной дороге из парка Рике.', 'Narikala Fortress Tbilisi']]],
          ['wine', 'Вино и коктейли', [['Cocktail Factory', 'Коктейль-бар во дворе Wine Factory N1: авторские и классические коктейли.', 'Cocktail Factory Tbilisi'], ['Weather Report', 'Бар на верхнем этаже отеля Pullman в Axis Towers: коктейли и панорама города, особенно на закате.', 'Weather Report Sky Bar Tbilisi'], ['Vino Underground', 'Один из первых в Тбилиси баров натуральных вин, с дегустациями и закусками.', 'Vino Underground Tbilisi'], ['Karalashvili Wine Cellar', 'Исторический винный погреб в Старом городе: дегустации грузинских вин и чачи с сырами.', 'Karalashvili wine cellar Tbilisi']]]
        ],
        calTitle: 'Добавить в календарь', gcal: 'Google Календарь', ics: 'Apple и Outlook', calText: 'Свадьба Георгия и Ланы', waitTitle: 'Ждём вас', waitSign: 'С уважением, семьи Чиквашвили и Джанашвили'
      },
      en: {
        names: 'George & Lana', hdate: '13 Shevat 5787',
        welcome: 'Our story together is about to begin, and we would love for its very first pages to be written with you by our side. We will be so happy to see you at our wedding.', sign: 'With love, George & Lana',
        cdTitle: 'Counting down to our day', cdWhen: '21.01.2027, 4:00 PM Tbilisi time',
        progTitle: 'The day’s programme', prog: ['Guest arrival', 'Chuppah', 'Banquet begins'],
        kosher: 'A fully kosher menu will be served to all guests.',
        infoAria: 'About the seven blessings', hupaTitle: 'What is a chuppah', hupaWhat: 'The chuppah is the Jewish wedding ceremony. It takes place under a canopy, also called a chuppah: the bride and groom stand beneath it while the rabbi conducts the ceremony, and here they become husband and wife.', hupaIntro: 'The ceremony is rich in symbols. Here are the main ones.',
        hupaItems: [['The canopy', 'A symbol of the couple’s future shared home.'], ['Ketubah', 'The marriage contract, read aloud during the ceremony.'], ['Seven blessings', 'Blessings recited over a cup of wine.', ['“Who creates the fruit of the vine”, the blessing over wine.', '“Who has created all things for His glory.”', '“Creator of man.”', 'The creation of humankind in God’s image, and the continuation of life.', 'Zion rejoicing at the return of her children.', 'A wish that the couple rejoice as the first couple did in the Garden of Eden.', 'A blessing of joy and gladness, love, harmony, peace and friendship, and the voices of bride and groom heard in Jerusalem.']], ['Breaking the glass', 'The groom breaks a glass in memory of the destroyed Temple. This ends the ceremony, and guests shout “Mazel tov!”, meaning “Congratulations!”']],
        venueTitle: 'Venue', inKa: 'In Georgian', copy: 'Copy address', copied: 'Address copied', maps: 'Open in maps', yandex: 'Yandex Maps',
        dress: 'Dress code', dressSub: 'Suits for gentlemen\nEvening gowns for ladies',
        tipsTitle: 'If you are coming to Tbilisi',
        taxiT: 'Taxi', taxiD: 'Use the Bolt or Yandex Go apps: you see the fare in advance and can pay by card. At the airport, decline offers from drivers in the arrivals hall and book a car in the app instead.',
        netT: 'Mobile internet', netD: 'The easiest option is the UNISIM eSIM: data works as soon as you land and you only pay for what you use.',
        promo: 'Promo code for 20% off', promoCopy: 'Copy promo code', promoDone: 'Promo code copied', unisim: 'Open unisim.net',
        weatherT: 'Weather in January', weatherD: 'Days average around +7 °C and nights around −2 °C, and snow is possible. You will want a warm coat in the evening.',
        moneyT: 'Currency exchange', moneyD: 'The currency is the Georgian lari. If you want to exchange money, you will get a better rate in the city. You can also pay by card almost everywhere.',
        rsvpTitle: 'Please confirm your attendance', rsvpBy: 'Please confirm your attendance by 15.11.2026. It will greatly help us with the planning.',
        nameL: 'Your full name', attendL: 'Please confirm your attendance at the celebration', yes: 'Joyfully accept', no: 'Regretfully decline',
        countL: 'Number of guests, including you', guest: 'Guest name', send: 'Send reply',
        errName: 'Please enter your name', errGuest: 'Please enter the guest’s name', errAttend: 'Please choose whether you will attend',
        thanksYes: 'Thank you! We look forward to seeing you on 21.01.2027.', thanksNo: 'Thank you for letting us know. You will be missed.', edit: 'Change reply',
        todoTitle: 'Things to do in Tbilisi', todoSub: 'For those arriving early or staying on after the wedding.', mapLbl: 'Map', prevLbl: 'Previous', nextLbl: 'Next',
        todo: [
          ['food', 'Where to eat', [['Alubali', 'Traditional Georgian food based on old recipes from different regions, with a cosy leafy courtyard.', 'Alubali Restaurant Tbilisi'], ['Alfredo', 'Italian cuisine: pizza, pasta and risotto. Booking ahead is a good idea.', 'ALFREDO Irakli Abashidze Street Tbilisi'], ['OtsY', 'Modern Georgian cuisine in the Old Town, with a view of the clock tower. Booking ahead is a good idea.', 'OtsY Ioane Shavteli Street Tbilisi'], ['Keto & Kote', 'Georgian food in an old mansion with a garden and city views. There’s no sign — the entrance is through the courtyard.', 'Keto & Kote Tbilisi'], ['Doughnuts at the Funicular', 'The famous cream-filled doughnuts at the café on top of Mtatsminda. The easiest way up is the funicular.', 'Funicular Restaurant Complex Mtatsminda Tbilisi'], ['Retro', 'Delicious Adjarian khachapuri, with the dough made right in front of you.', 'Retro 1 Davit Gamrekeli Street Tbilisi'], ['Georgian House', 'Classic Georgian food with plenty of local colour: big halls, and sometimes live music and folk dancing.', 'Georgian House restaurant Giorgi Tsabadze Tbilisi'], ['Kikodze', 'Breakfast: syrniki and salmon Benedict. Inside the former Wine Factory N1.', 'Kikodze Bar Tbilisi']]],
          ['kosher', 'Kosher food', [['Mendi’s', 'Kosher Georgian cuisine in the Old Town, on Bambis Rigi Street. Closed on Shabbat.', 'Mendis 7 Bambis Rigi Street Tbilisi'], ['Shalom Aleichem', 'A kosher restaurant next to the Great Synagogue: falafel, hummus and pita. Closed on Shabbat.', 'Shalom Aleichem Kosher Restaurant Tbilisi'], ['King David', 'Traditional Georgian dishes, all kosher, plus kosher Georgian wine. Next to the Great Synagogue. Closed on Shabbat.', 'Kosher restaurant King David Tbilisi'], ['Organique Kosher Grill', 'A kosher grill with Israeli and Georgian dishes. Closed on Friday and Saturday.', 'Organique Kosher Grill Tbilisi']]],
          ['sights', 'What to see', [['Rike Park', 'A riverside park by the Bridge of Peace; the cable car to Narikala starts here.', 'Rike Park Tbilisi'], ['Leghvtakhevi Waterfall', 'A waterfall in the gorge right behind the sulphur baths, a few minutes’ walk from the Old Town.', 'Leghvtakhevi Waterfall Tbilisi'], ['Mtatsminda Park', 'An amusement park on top of Mount Mtatsminda, with a Ferris wheel and city views. Take the funicular up.', 'Mtatsminda Park Tbilisi'], ['Rustaveli Avenue', 'The city’s main street: the opera, theatres, museums and cafés.', 'Rustaveli Avenue Tbilisi'], ['Narikala Fortress', 'An ancient fortress above the Old Town. Ride the cable car up from Rike Park.', 'Narikala Fortress Tbilisi']]],
          ['wine', 'Wine & cocktails', [['Cocktail Factory', 'A cocktail bar in the courtyard of Wine Factory N1: signature and classic cocktails.', 'Cocktail Factory Tbilisi'], ['Weather Report', 'A bar on the top floor of the Pullman hotel in Axis Towers: cocktails and a city panorama, best at sunset.', 'Weather Report Sky Bar Tbilisi'], ['Vino Underground', 'One of Tbilisi’s first natural wine bars, with tastings and small plates.', 'Vino Underground Tbilisi'], ['Karalashvili Wine Cellar', 'A historic wine cellar in the Old Town: tastings of Georgian wine and chacha with cheese.', 'Karalashvili wine cellar Tbilisi']]]
        ],
        calTitle: 'Add to calendar', gcal: 'Google Calendar', ics: 'Apple & Outlook', calText: 'George & Lana’s wedding', waitTitle: 'We look forward to seeing you', waitSign: 'With kind regards, the Chikvashvili and Janashvili families'
      },
      ka: {
        names: 'გიორგი და ლანა', hdate: '13 შვატი 5787',
        welcome: 'მალე ჩვენი საერთო ისტორია დაიწყება და ძალიან გვინდა, რომ მისი პირველი გვერდები თქვენთან ერთად დაიწეროს. ბედნიერები ვიქნებით, თუ ჩვენს ქორწილზე გიხილავთ.', sign: 'სიყვარულით, გიორგი და ლანა',
        cdTitle: 'შეხვედრამდე დარჩა', cdWhen: '21.01.2027, 16:00, თბილისის დროით',
        progTitle: 'დღის პროგრამა', prog: ['სტუმრების შეკრება', 'ხუპა', 'ბანკეტის დაწყება'],
        kosher: 'ყველა სტუმრისთვის მომზადდება სრულად კოშერული მენიუ.',
        infoAria: 'შვიდი კურთხევის შესახებ', hupaTitle: 'რა არის ხუპა', hupaWhat: 'ხუპა ებრაული საქორწინო ცერემონიაა. ის ბალდახინის ქვეშ იმართება, რომელსაც ასევე ხუპა ჰქვია: საქმრო და პატარძალი მის ქვეშ დგანან, რაბინი რიტუალს ატარებს და სწორედ აქ ხდებიან ისინი ცოლ-ქმარი.', hupaIntro: 'ცერემონია სიმბოლოებით არის სავსე. აი, მთავარი მათგანი.',
        hupaItems: [['ბალდახინი', 'წყვილის მომავალი საერთო სახლის სიმბოლო.'], ['ქთუბა', 'საქორწინო ხელშეკრულება, რომელსაც ცერემონიის დროს ხმამაღლა კითხულობენ.'], ['შვიდი კურთხევა', 'კურთხევები, რომლებიც ღვინის თასზე წარმოითქმის.', ['„ვაზის ნაყოფის შემოქმედო“ — კურთხევა ღვინოზე.', '„ყოველივეს შემოქმედო თავისი დიდებისათვის“.', '„ადამიანის შემოქმედო“.', 'ადამიანის შექმნა შემოქმედის ხატად და სიცოცხლის გაგრძელება.', 'სიონის სიხარული მისი შვილების დაბრუნებით.', 'სურვილი, რომ საქმრომ და პატარძალმა გაიხარონ, როგორც პირველმა ადამიანებმა ედემის ბაღში.', 'სიხარულის, სიყვარულის, ძმობის, მშვიდობისა და მეგობრობის კურთხევა — და საქმროსა და პატარძლის ხმა იერუსალიმში.']], ['ჭიქის გატეხვა', 'საქმრო ჭიქას ამტვრევს დანგრეული ტაძრის ხსოვნისთვის. ამით ცერემონია სრულდება და სტუმრები შესძახებენ: „მაზალ ტოვ!“, ანუ „გილოცავთ!“']],
        venueTitle: 'ადგილი', inKa: 'ქართულად', copy: 'მისამართის კოპირება', copied: 'მისამართი დაკოპირდა', maps: 'რუკაზე გახსნა', yandex: 'Yandex Maps',
        dress: 'დრესკოდი', dressSub: 'მამაკაცებისთვის — კოსტიუმი\nქალბატონებისთვის — საღამოს კაბა',
        tipsTitle: 'თუ თბილისში ჩამოდიხართ',
        taxiT: 'ტაქსი', taxiD: 'ისარგებლეთ Bolt-ის ან Yandex Go-ს აპლიკაციით: ფასი წინასწარ ჩანს და ბარათით გადახდაც შეიძლება. აეროპორტში ნუ დათანხმდებით ჩამოსვლის დარბაზში მძღოლების შეთავაზებებს — მანქანა აპლიკაციით გამოიძახეთ.',
        netT: 'მობილური ინტერნეტი', netD: 'ყველაზე მოსახერხებელია UNISIM eSIM: ინტერნეტი ჩამოსვლისთანავე მუშაობს და იხდით მხოლოდ გამოყენებულ ტრაფიკში.',
        promo: '20%-იანი პრომოკოდი', promoCopy: 'პრომოკოდის კოპირება', promoDone: 'პრომოკოდი დაკოპირდა', unisim: 'unisim.net-ის გახსნა',
        weatherT: 'ამინდი იანვარში', weatherD: 'დღისით საშუალოდ დაახლოებით +7 °C-ია, ღამით დაახლოებით −2 °C, შესაძლებელია თოვლი. საღამოს თბილი პალტო დაგჭირდებათ.',
        moneyT: 'ფულის გადაცვლა', moneyD: 'ვალუტა — ქართული ლარი. თუ ვალუტის გადაცვლა გსურთ, ქალაქში კურსი უფრო ხელსაყრელი იქნება. ასევე თითქმის ყველგან შეგიძლიათ ბარათით გადახდა.',
        rsvpTitle: 'გთხოვთ, დაადასტუროთ დასწრება', rsvpBy: 'გთხოვთ, დაადასტუროთ დასწრება 15.11.2026-მდე. ეს ძალიან დაგვეხმარება ღონისძიების ორგანიზებაში.',
        nameL: 'თქვენი სახელი და გვარი', attendL: 'დაადასტურეთ დასწრება ზეიმზე', yes: 'სიამოვნებით მოვალ', no: 'სამწუხაროდ, ვერ მოვალ',
        countL: 'სტუმრების რაოდენობა, თქვენი ჩათვლით', guest: 'სტუმრის სახელი', send: 'პასუხის გაგზავნა',
        errName: 'მიუთითეთ სახელი', errGuest: 'მიუთითეთ სტუმრის სახელი', errAttend: 'აირჩიეთ, მობრძანდებით თუ არა',
        thanksYes: 'გმადლობთ! გელოდებით 21.01.2027-ს.', thanksNo: 'გმადლობთ, რომ შეგვატყობინეთ. მოგვენატრებით.', edit: 'პასუხის შეცვლა',
        todoTitle: 'რა ვაკეთოთ თბილისში', todoSub: 'მათთვის, ვინც ადრე ჩამოვა ან ქორწილის შემდეგ დარჩება.', mapLbl: 'რუკაზე', prevLbl: 'წინა', nextLbl: 'შემდეგი',
        todo: [
          ['food', 'სად ვჭამოთ', [['Alubali', 'ტრადიციული ქართული სამზარეულო სხვადასხვა კუთხის ძველი რეცეპტებით, მყუდრო მწვანე ეზო.', 'Alubali Restaurant Tbilisi'], ['Alfredo', 'იტალიური სამზარეულო: პიცა, პასტა, რიზოტო. მაგიდის წინასწარ დაჯავშნა სჯობს.', 'ALFREDO Irakli Abashidze Street Tbilisi'], ['OtsY', 'თანამედროვე ქართული სამზარეულო ძველ თბილისში, საათის კოშკის ხედით. მაგიდის წინასწარ დაჯავშნა სჯობს.', 'OtsY Ioane Shavteli Street Tbilisi'], ['Keto & Kote', 'ქართული სამზარეულო ძველ სახლში, ბაღითა და ქალაქის ხედით. აბრა არ აქვს — შესასვლელი ეზოდანაა.', 'Keto & Kote Tbilisi'], ['პონჩიკები ფუნიკულიორზე', 'ცნობილი კრემიანი პონჩიკები კაფეში მთაწმინდის თავზე. ზემოთ ასვლა ფუნიკულიორით არის მოსახერხებელი.', 'Funicular Restaurant Complex Mtatsminda Tbilisi'], ['Retro', 'გემრიელი აჭარული ხაჭაპური — ცომს თვალწინ ამზადებენ.', 'Retro 1 Davit Gamrekeli Street Tbilisi'], ['Georgian House', 'კლასიკური ქართული სამზარეულო ადგილობრივი კოლორიტით: დიდი დარბაზები, ზოგჯერ ცოცხალი მუსიკა და ქართული ცეკვები.', 'Georgian House restaurant Giorgi Tsabadze Tbilisi'], ['Kikodze', 'საუზმე: სირნიკები და ბენედიქტი ორაგულით. ყოფილ ღვინის ქარხანაში, Wine Factory N1-ში.', 'Kikodze Bar Tbilisi']]],
          ['kosher', 'კოშერული საკვები', [['Mendi’s', 'კოშერული ქართული სამზარეულო ძველ თბილისში, ბამბის რიგზე. შაბათს დაკეტილია.', 'Mendis 7 Bambis Rigi Street Tbilisi'], ['Shalom Aleichem', 'კოშერული რესტორანი დიდ სინაგოგასთან: ფალაფელი, ჰუმუსი, პიტა. შაბათს დაკეტილია.', 'Shalom Aleichem Kosher Restaurant Tbilisi'], ['King David', 'ტრადიციული ქართული კერძები, ყველაფერი კოშერულია, და კოშერული ქართული ღვინო. დიდ სინაგოგასთან. შაბათს დაკეტილია.', 'Kosher restaurant King David Tbilisi'], ['Organique Kosher Grill', 'კოშერული გრილი: ისრაელური და ქართული კერძები. პარასკევს და შაბათს დაკეტილია.', 'Organique Kosher Grill Tbilisi']]],
          ['sights', 'რა ვნახოთ', [['რიყის პარკი', 'პარკი მტკვრის ნაპირზე, მშვიდობის ხიდთან; აქედან იწყება საბაგირო ნარიყალამდე.', 'Rike Park Tbilisi'], ['ლეღვთახევის ჩანჩქერი', 'ჩანჩქერი ხეობაში, გოგირდის აბანოების უკან, ძველი ქალაქიდან რამდენიმე წუთის სავალზე.', 'Leghvtakhevi Waterfall Tbilisi'], ['მთაწმინდის პარკი', 'გასართობი პარკი მთაწმინდის თავზე, ეშმაკის ბორბლითა და ქალაქის პანორამით. ზემოთ — ფუნიკულიორით.', 'Mtatsminda Park Tbilisi'], ['რუსთაველის გამზირი', 'ქალაქის მთავარი ქუჩა: ოპერა, თეატრები, მუზეუმები და კაფეები.', 'Rustaveli Avenue Tbilisi'], ['ნარიყალას ციხე', 'უძველესი ციხე ძველი ქალაქის თავზე. ზემოთ რიყის პარკიდან საბაგიროთი ასვლაა შესაძლებელი.', 'Narikala Fortress Tbilisi']]],
          ['wine', 'ღვინო და კოქტეილები', [['Cocktail Factory', 'კოქტეილ-ბარი Wine Factory N1-ის ეზოში: საავტორო და კლასიკური კოქტეილები.', 'Cocktail Factory Tbilisi'], ['Weather Report', 'ბარი სასტუმრო Pullman-ის ზედა სართულზე, Axis Towers-ში: კოქტეილები და ქალაქის პანორამა, განსაკუთრებით მზის ჩასვლისას.', 'Weather Report Sky Bar Tbilisi'], ['Vino Underground', 'თბილისის ერთ-ერთი პირველი ნატურალური ღვინის ბარი, დეგუსტაციებითა და წასახემსებლით.', 'Vino Underground Tbilisi'], ['Karalashvili Wine Cellar', 'ისტორიული მარანი ძველ თბილისში: ქართული ღვინისა და ჭაჭის დეგუსტაცია ყველთან ერთად.', 'Karalashvili wine cellar Tbilisi']]]
        ],
        calTitle: 'კალენდარში დამატება', gcal: 'Google Calendar', ics: 'Apple და Outlook', calText: 'გიორგისა და ლანას ქორწილი', waitTitle: 'გელოდებით', waitSign: 'პატივისცემით, ჩიქვაშვილებისა და ჯანაშვილების ოჯახები'
      },
      he: {
        names: 'גיאורגי ולאנה', hdate: 'י״ג שבט תשפ״ז',
        welcome: 'בקרוב יתחיל הסיפור המשותף שלנו, ומאוד נרצה שהדפים הראשונים שלו ייכתבו לצדכם. נשמח מאוד לראותכם בחתונתנו.', sign: 'באהבה, גיאורגי ולאנה',
        cdTitle: 'נותרו עד שניפגש', cdWhen: '21.01.2027, 16:00 לפי שעון טביליסי',
        progTitle: 'סדר היום', prog: ['קבלת פנים', 'חופה', 'תחילת הסעודה'],
        kosher: 'לכל האורחים יוגש תפריט כשר לחלוטין.',
        infoAria: 'על שבע הברכות', hupaTitle: 'מהי חופה', hupaWhat: 'החופה היא טקס הנישואין היהודי. הוא נערך תחת כיסוי שנקרא גם הוא חופה: החתן והכלה עומדים תחתיו, הרב עורך את הטקס, ובו הם הופכים לבעל ולאישה.', hupaIntro: 'הטקס עשיר בסמלים. הנה העיקריים שבהם.',
        hupaItems: [['הכיסוי', 'סמל לבית המשותף של בני הזוג.'], ['כתובה', 'חוזה הנישואין, שנקרא בקול במהלך הטקס.'], ['שבע ברכות', 'ברכות הנאמרות על כוס יין.', ['בורא פרי הגפן', 'שהכל ברא לכבודו', 'יוצר האדם', 'אשר יצר את האדם בצלמו', 'שוש תשיש ותגל העקרה', 'שמח תשמח רעים האהובים', 'אשר ברא ששון ושמחה']], ['שבירת הכוס', 'החתן שובר כוס זכר לחורבן בית המקדש. בכך מסתיים הטקס, והאורחים קוראים „מזל טוב!”']],
        venueTitle: 'מקום האירוע', inKa: 'בגאורגית', copy: 'העתקת הכתובת', copied: 'הכתובת הועתקה', maps: 'פתיחה במפות', yandex: 'Yandex Maps',
        dress: 'קוד לבוש', dressSub: 'חליפה לגברים\nשמלת ערב לנשים',
        tipsTitle: 'למי שמגיע לטביליסי',
        taxiT: 'מוניות', taxiD: 'השתמשו באפליקציות Bolt או Yandex Go: המחיר מוצג מראש ואפשר לשלם בכרטיס. בשדה התעופה סרבו להצעות של נהגים באולם הנוסעים הנכנסים והזמינו רכב באפליקציה.',
        netT: 'אינטרנט סלולרי', netD: 'הדרך הנוחה ביותר היא eSIM של UNISIM: הגלישה פועלת מיד עם הנחיתה ומשלמים רק על מה שמשתמשים.',
        promo: 'קוד הנחה של 20%', promoCopy: 'העתקת קוד ההנחה', promoDone: 'קוד ההנחה הועתק', unisim: 'לאתר unisim.net',
        weatherT: 'מזג האוויר בינואר', weatherD: 'ביום הטמפרטורה הממוצעת היא בערך ‎+7 °C‎ ובלילה בערך ‎−2 °C‎, וייתכן שלג. בערב תצטרכו מעיל חם.',
        moneyT: 'המרת כסף', moneyD: 'המטבע הוא לארי גאורגי. אם תרצו להמיר כסף, בעיר השער משתלם יותר. כמעט בכל מקום אפשר גם לשלם בכרטיס.',
        rsvpTitle: 'אנא אשרו הגעה', rsvpBy: 'אנא אשרו את הגעתכם עד 15.11.2026. זה יעזור לנו מאוד בארגון האירוע.',
        nameL: 'שם מלא', attendL: 'אשרו את השתתפותכם בחגיגה', yes: 'אגיע בשמחה', no: 'לצערי לא אוכל להגיע',
        countL: 'מספר האורחים, כולל אתכם', guest: 'שם האורח', send: 'שליחת תשובה',
        errName: 'נא למלא שם', errGuest: 'נא למלא את שם האורח', errAttend: 'נא לבחור אם תגיעו',
        thanksYes: 'תודה! מחכים לכם ב-21.01.2027.', thanksNo: 'תודה שעדכנתם. נתגעגע אליכם.', edit: 'שינוי התשובה',
        todoTitle: 'מה לעשות בטביליסי', todoSub: 'למי שמגיע מוקדם או נשאר אחרי החתונה.', mapLbl: 'במפה', prevLbl: 'הקודם', nextLbl: 'הבא',
        todo: [
          ['food', 'איפה לאכול', [['Alubali', 'מטבח גאורגי מסורתי לפי מתכונים ישנים מאזורים שונים, עם חצר ירוקה ונעימה.', 'Alubali Restaurant Tbilisi'], ['Alfredo', 'מטבח איטלקי: פיצה, פסטה וריזוטו. מומלץ להזמין מקום מראש.', 'ALFREDO Irakli Abashidze Street Tbilisi'], ['OtsY', 'מטבח גאורגי מודרני בעיר העתיקה, עם נוף למגדל השעון. מומלץ להזמין מקום מראש.', 'OtsY Ioane Shavteli Street Tbilisi'], ['Keto & Kote', 'אוכל גאורגי בבית ישן עם גינה ונוף לעיר. אין שלט – הכניסה דרך החצר.', 'Keto & Kote Tbilisi'], ['סופגניות בפוניקולר', 'הסופגניות המפורסמות במילוי קרם בבית הקפה שעל פסגת מטאצמינדה. הכי נוח לעלות לשם בפוניקולר.', 'Funicular Restaurant Complex Mtatsminda Tbilisi'], ['Retro', 'חצ׳פורי אג׳רי טעים, והבצק מוכן ממש מול העיניים.', 'Retro 1 Davit Gamrekeli Street Tbilisi'], ['Georgian House', 'אוכל גאורגי קלאסי עם הרבה צבע מקומי: אולמות גדולים, ולפעמים מוזיקה חיה וריקודי עם.', 'Georgian House restaurant Giorgi Tsabadze Tbilisi'], ['Kikodze', 'ארוחות בוקר: סירניקי ובנדיקט סלמון. בתוך מפעל היין לשעבר Wine Factory N1.', 'Kikodze Bar Tbilisi']]],
          ['kosher', 'אוכל כשר', [['מנדי׳ס', 'מטבח גאורגי כשר בעיר העתיקה, ברחוב במביס ריגי. סגור בשבת.', 'Mendis 7 Bambis Rigi Street Tbilisi'], ['שלום עליכם', 'מסעדה כשרה ליד בית הכנסת הגדול: פלאפל, חומוס ופיתה. סגור בשבת.', 'Shalom Aleichem Kosher Restaurant Tbilisi'], ['קינג דוד', 'מנות גאורגיות מסורתיות, הכול כשר, ויין גאורגי כשר. ליד בית הכנסת הגדול. סגור בשבת.', 'Kosher restaurant King David Tbilisi'], ['אורגניק גריל כשר', 'גריל כשר עם מנות ישראליות וגאורגיות. סגור בימי שישי ושבת.', 'Organique Kosher Grill Tbilisi']]],
          ['sights', 'מה לראות', [['פארק ריקה', 'פארק על גדת הנהר ליד גשר השלום; מכאן יוצא הרכבל למבצר נריקלה.', 'Rike Park Tbilisi'], ['מפל לגבטחווי', 'מפל בערוץ ממש מאחורי בתי המרחץ הגופריתיים, כמה דקות הליכה מהעיר העתיקה.', 'Leghvtakhevi Waterfall Tbilisi'], ['פארק מטאצמינדה', 'פארק שעשועים על פסגת הר מטאצמינדה, עם גלגל ענק ותצפית על העיר. עולים אליו בפוניקולר.', 'Mtatsminda Park Tbilisi'], ['שדרות רוסתוולי', 'הרחוב הראשי של העיר: אופרה, תיאטראות, מוזיאונים ובתי קפה.', 'Rustaveli Avenue Tbilisi'], ['מבצר נריקלה', 'מבצר עתיק מעל העיר העתיקה. אפשר לעלות אליו ברכבל מפארק ריקה.', 'Narikala Fortress Tbilisi']]],
          ['wine', 'יין וקוקטיילים', [['Cocktail Factory', 'בר קוקטיילים בחצר של Wine Factory N1: קוקטיילים מקוריים וקלאסיים.', 'Cocktail Factory Tbilisi'], ['Weather Report', 'בר בקומה העליונה של מלון Pullman במגדלי Axis: קוקטיילים ונוף פנורמי לעיר, במיוחד בשקיעה.', 'Weather Report Sky Bar Tbilisi'], ['Vino Underground', 'אחד מברי היין הטבעי הראשונים בטביליסי, עם טעימות ומנות קטנות.', 'Vino Underground Tbilisi'], ['Karalashvili Wine Cellar', 'מרתף יין היסטורי בעיר העתיקה: טעימות של יינות גאורגיים וצ׳אצ׳ה עם גבינות.', 'Karalashvili wine cellar Tbilisi']]]
        ],
        calTitle: 'הוספה ליומן', gcal: 'Google Calendar', ics: 'Apple ו-Outlook', calText: 'החתונה של גיאורגי ולאנה', waitTitle: 'מחכים לכם', waitSign: 'בברכה, משפחות צ׳יקוואשווילי וג׳נאשווילי'
      }
    };
    var FONT = {
      ru: { d: "'Forum', serif", b: "'Spectral', serif", italic: 'italic' },
      en: { d: "'Forum', serif", b: "'Spectral', serif", italic: 'italic' },
      ka: { d: "'Noto Serif Georgian', serif", b: "'Noto Serif Georgian', serif", italic: 'normal' },
      he: { d: "'Frank Ruhl Libre', serif", b: "'Frank Ruhl Libre', serif", italic: 'normal' }
    };
    var UNITS = {
      en: [['day', 'days'], ['hour', 'hours'], ['minute', 'minutes'], ['second', 'seconds']],
      ka: [['დღე'], ['საათი'], ['წუთი'], ['წამი']],
      he: [['ימים'], ['שעות'], ['דקות'], ['שניות']]
    };
    var RU_UNITS = [['день', 'дня', 'дней'], ['час', 'часа', 'часов'], ['минута', 'минуты', 'минут'], ['секунда', 'секунды', 'секунд']];
    function ruPlural(n, f) {
      var a = n % 100, b = n % 10;
      if (a > 10 && a < 20) return f[2];
      if (b === 1) return f[0];
      if (b > 1 && b < 5) return f[1];
      return f[2];
    }
    var embedded = this.props.embedded === true;
    var PROMO = 'glwedding';
    var lang = embedded ? (this.props.lang || 'ru') : (st.lang || this.props.lang || 'ru');
    if (!T[lang]) lang = 'ru';
    var t = T[lang];
    var hupa = (embedded || st.hupa === null) ? this.props.hupa !== false : st.hupa;

    var target = Date.UTC(2027, 0, 21, 12, 0, 0);
    var diff = Math.max(0, target - st.now);
    var parts = [Math.floor(diff / 86400000), Math.floor(diff / 3600000) % 24, Math.floor(diff / 60000) % 60, Math.floor(diff / 1000) % 60];
    var countdown = parts.map(function (n, i) {
      var unit;
      if (lang === 'ru') unit = ruPlural(n, RU_UNITS[i]);
      else if (lang === 'en') unit = UNITS.en[i][n === 1 ? 0 : 1];
      else unit = UNITS[lang][i][0];
      return { value: i === 0 ? String(n) : (n < 10 ? '0' + n : String(n)), unit: unit };
    });

    var times = ['16:00', '17:00', '18:00'];
    var program = t.prog.map(function (label, i) { var last = i === t.prog.length - 1; return { time: times[i], label: label, line: !last, pad: last ? '0' : 'clamp(28px, 4.5cqi, 44px)' }; });
    var hupaItems = t.hupaItems.map(function (x, i) {
      var open = st.infoIdx === i;
      return {
        t: x[0], d: x[1],
        hasInfo: !!x[2],
        info: x[2] ? x[2].map(function (l) { return { text: l }; }) : [],
        infoOpen: open,
        infoExpanded: open ? 'true' : 'false',
        z: open ? 5 : 1,
        infoShow: function () { self.infoByClick = false; self.setState({ infoIdx: i }); },
        infoHide: function () { if (self.state.infoIdx === i) self.setState({ infoIdx: null }); },
        infoToggle: function () { if (self.state.infoIdx === i && self.infoByClick) { self.infoByClick = false; self.setState({ infoIdx: null }); } else { self.infoByClick = true; self.setState({ infoIdx: i }); } }
      };
    });

    var labels = [['ru', 'Рус'], ['en', 'Eng'], ['ka', 'ქარ'], ['he', 'עב']];
    var testLangs = labels.map(function (l) {
      var active = l[0] === lang;
      return {
        label: l[1],
        pressed: active ? 'true' : 'false',
        style: 'min-width: 52px; min-height: 40px; padding: 0 12px; border-radius: 20px; cursor: pointer; font-size: 14px; font-family: inherit; ' + (active ? 'border: 1px solid #C9B080; background: #C9B080; color: #2B2420' : 'border: 1px solid #6E5F52; background: transparent; color: #EFE6D8'),
        pick: function () { self.setState({ lang: l[0] }); }
      };
    });

    function pill(active) {
      return 'min-height: 48px; padding: 0 18px; border-radius: 24px; cursor: pointer; font-family: inherit; font-size: 16px; ' + (active ? 'border: 1px solid #6E5885; background: #6E5885; color: #F8F3EA' : 'border: 1px solid #8A7867; background: transparent; color: #3E322A');
    }
    function resize(n) {
      var g = st.guests.slice(0, Math.max(0, n - 1));
      while (g.length < n - 1) g.push('');
      return g;
    }
    var guestFields = st.attend === 'yes' ? st.guests.map(function (v, i) {
      return {
        id: 'rsvp-guest-' + (i + 2),
        label: t.guest + ' ' + (i + 2),
        value: v,
        err: !!(st.errGuests && st.errGuests[i]),
        invalid: (st.errGuests && st.errGuests[i]) ? 'true' : 'false',
        inputStyle: 'min-height: 50px; box-sizing: border-box; padding: 0 14px; border: 1px solid ' + ((st.errGuests && st.errGuests[i]) ? '#9A3B2E' : '#8A7867') + '; border-radius: 2px; background: #FFFDF9; font-family: inherit; font-size: 17px; color: #3E322A',
        onChange: function (e) {
          var g = self.state.guests.slice(); g[i] = e.target.value;
          var eg = (self.state.errGuests || []).slice(); eg[i] = false;
          self.setState({ guests: g, errGuests: eg });
        }
      };
    }) : [];

    var catId = st.cat || 'food';
    var catRow = t.todo.filter(function (c) { return c[0] === catId; })[0] || t.todo[0];
    var todoCats = t.todo.map(function (c) {
      var active = c[0] === catRow[0];
      return {
        label: c[1],
        selected: active ? 'true' : 'false',
        style: 'flex: none; min-height: 44px; padding: 0 18px; border-radius: 22px; cursor: pointer; font-family: inherit; font-size: 15px; white-space: nowrap; ' + (active ? 'border: 1px solid #3E322A; background: #3E322A; color: #F8F3EA' : 'border: 1px solid #A8917A; background: transparent; color: #3E322A'),
        pick: function () { self.setState({ cat: c[0] }); try { if (self.car) self.car.scrollTo({ left: 0 }); } catch (e) {} }
      };
    });
    var tints = ['#E2D3BC', '#D9CCE3', '#D6C3A6', '#E4D9EA'];
    var PHOTOS = {
      'Organique Kosher Grill Tbilisi': 'assets/img/places/organique.jpg',
      'Kosher restaurant King David Tbilisi': 'assets/img/places/kingdavid.jpg',
      'Mendis 7 Bambis Rigi Street Tbilisi': 'assets/img/places/mendis.jpg',
      'Shalom Aleichem Kosher Restaurant Tbilisi': 'assets/img/places/shalom.jpg',
      'Karalashvili wine cellar Tbilisi': 'assets/img/places/karalashvili.jpg',
      'Vino Underground Tbilisi': 'assets/img/places/vinounderground.jpg',
      'Weather Report Sky Bar Tbilisi': 'assets/img/places/weatherreport.jpg',
      'Cocktail Factory Tbilisi': 'assets/img/places/cocktailfactory.jpg',
      'Narikala Fortress Tbilisi': 'assets/img/places/narikala.jpg',
      'Rustaveli Avenue Tbilisi': 'assets/img/places/rustaveli.jpg',
      'Mtatsminda Park Tbilisi': 'assets/img/places/mtatsminda.jpg',
      'Leghvtakhevi Waterfall Tbilisi': 'assets/img/places/waterfall.jpg',
      'Rike Park Tbilisi': 'assets/img/places/rike.jpg',
      'Kikodze Bar Tbilisi': 'assets/img/places/kikodze.jpg',
      'Georgian House restaurant Giorgi Tsabadze Tbilisi': 'assets/img/places/georgianhouse.jpg',
      'Retro 1 Davit Gamrekeli Street Tbilisi': 'assets/img/places/retro.jpg',
      'Funicular Restaurant Complex Mtatsminda Tbilisi': 'assets/img/places/funicular.jpg',
      'OtsY Ioane Shavteli Street Tbilisi': 'assets/img/places/keto.jpg',
      'Keto & Kote Tbilisi': 'assets/img/places/otsy.jpg',
      'ALFREDO Irakli Abashidze Street Tbilisi': 'assets/img/places/alfredo.jpg',
      'Alubali Restaurant Tbilisi': 'assets/img/places/alubali.jpg'
    };
    var todoItems = catRow[2].map(function (x, i) {
      return { name: x[0], desc: x[1], tint: tints[i % tints.length], photo: PHOTOS[x[2]] || '', hasPhoto: !!PHOTOS[x[2]], noPhoto: !PHOTOS[x[2]], map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(x[2]) };
    });
    var rtl = lang === 'he';
    function carMove(dirSign) {
      if (!self.car) return;
      var step = Math.max(260, Math.round(self.car.clientWidth * 0.8));
      try { self.car.scrollBy({ left: dirSign * (rtl ? -1 : 1) * step, behavior: 'smooth' }); } catch (e) { self.car.scrollLeft += dirSign * (rtl ? -1 : 1) * step; }
    }
    var gcalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
      + '&text=' + encodeURIComponent(t.calText)
      + '&dates=20270121T120000Z/20270121T210000Z'
      + '&location=' + encodeURIComponent('Marani Hall, Aghmashenebeli St 156, Mtskheta 3300, Georgia');

    function buildDeco(v) {
      var keys = ['welcome', 'countdown', 'program', 'hupa', 'venue', 'dress', 'tips', 'todo', 'rsvp', 'wait', 'footer'];
      var dark = { program: 1, dress: 1, footer: 1 };
      var base = 'position: absolute; pointer-events: none; z-index: -1; ';
      var out = {};
      keys.forEach(function (k) { out[k] = []; });
      if (v === 'arch') {
        var A = { welcome: [760, 40, 200], program: [680, 40, 180], dress: [720, 48, 190], footer: [600, 18, 150] };
        keys.forEach(function (k) {
          var c = dark[k] ? 'rgba(201,176,128,0.42)' : 'rgba(168,141,94,0.45)';
          var a = A[k];
          if (a) {
            var w = a[0], top = a[1], ry = a[2];
            out[k].push({ cls: '', style: base + 'left: 50%; width: ' + w + 'px; margin-left: -' + (w / 2) + 'px; top: ' + top + 'px; bottom: -1px; box-sizing: border-box; border: 1px solid ' + c + '; border-bottom: 0; border-radius: ' + (w / 2) + 'px ' + (w / 2) + 'px 0 0 / ' + ry + 'px ' + ry + 'px 0 0' });
            var w2 = w - 16;
            out[k].push({ cls: '', style: base + 'left: 50%; width: ' + w2 + 'px; margin-left: -' + (w2 / 2) + 'px; top: ' + (top + 8) + 'px; bottom: -1px; box-sizing: border-box; border: 1px solid ' + c + '; border-bottom: 0; border-radius: ' + (w2 / 2) + 'px ' + (w2 / 2) + 'px 0 0 / ' + (ry - 8) + 'px ' + (ry - 8) + 'px 0 0' });
          } else {
            out[k].push({ cls: '', style: base + 'left: 50%; top: 28px; width: 140px; margin-left: -166px; border-top: 1px solid ' + c });
            out[k].push({ cls: '', style: base + 'left: 50%; top: 28px; width: 140px; margin-left: 26px; border-top: 1px solid ' + c });
            out[k].push({ cls: '', style: base + 'left: 50%; top: 22px; width: 11px; height: 11px; margin-left: -6px; border: 1px solid ' + c + '; transform: rotate(45deg)' });
          }
        });
      }
      return out;
    }
    var deco = buildDeco(this.props.bg || 'arch');
    return {
      deco: deco,
      t: t,
      lang: lang,
      dir: lang === 'he' ? 'rtl' : 'ltr',
      displayFont: FONT[lang].d,
      bodyFont: FONT[lang].b,
      italic: FONT[lang].italic,
      showPanel: !embedded,
      rootMinH: embedded ? ((parseInt(this.props.minH, 10) || 0) + 'px') : '100vh',
      testLangs: testLangs,
      hupaLabel: hupa ? 'Блок «Хупа»: показан' : 'Блок «Хупа»: скрыт',
      toggleHupa: function () { self.setState({ hupa: !hupa }); },
      showHupa: hupa,
      countdown: countdown,
      program: program,
      hupaItems: hupaItems,
      copyLabel: st.copied ? t.copied : t.copy,
      promoValue: PROMO,
      promoCopied: st.promoCopied,
      promoNotCopied: !st.promoCopied,
      promoAria: st.promoCopied ? t.promoDone : t.promoCopy,
      copyPromo: function () {
        try { if (navigator.clipboard) navigator.clipboard.writeText(PROMO); } catch (e) {}
        self.setState({ promoCopied: true });
        clearTimeout(self.pt);
        self.pt = setTimeout(function () { self.setState({ promoCopied: false }); }, 2500);
      },
      copyAddress: function () {
        try { if (navigator.clipboard) navigator.clipboard.writeText('Marani Hall, Aghmashenebeli St 156, Mtskheta 3300, Georgia'); } catch (e) {}
        self.setState({ copied: true });
        clearTimeout(self.ct);
        self.ct = setTimeout(function () { self.setState({ copied: false }); }, 2500);
      },
      showForm: !st.sent,
      sent: st.sent,
      name: st.name,
      onName: function (e) { self.setState({ name: e.target.value, errName: false }); },
      errName: st.errName,
      errAttend: st.errAttend,
      yesPressed: st.attend === 'yes' ? 'true' : 'false',
      noPressed: st.attend === 'no' ? 'true' : 'false',
      yesStyle: pill(st.attend === 'yes'),
      noStyle: pill(st.attend === 'no'),
      pickYes: function () { self.setState({ attend: 'yes', errAttend: false, guests: resize(self.state.count) }); },
      pickNo: function () { self.setState({ attend: 'no', errAttend: false }); },
      attendYes: st.attend === 'yes',
      count: st.count,
      dec: function () { var n = Math.max(1, self.state.count - 1); self.setState({ count: n, guests: resize(n) }); },
      inc: function () { var n = Math.min(12, self.state.count + 1); self.setState({ count: n, guests: resize(n) }); },
      guestFields: guestFields,
      submit: function () {
        var errName = !self.state.name.trim();
        var errAttend = !self.state.attend;
        var errGuests = self.state.attend === 'yes' ? self.state.guests.map(function (g) { return !String(g || '').trim(); }) : [];
        var anyGuest = errGuests.some(function (x) { return x; });
        if (errName || errAttend || anyGuest) { self.setState({ errName: errName, errAttend: errAttend, errGuests: errGuests }); return; }
        if (self.state.sending) return;
        self.setState({ sending: true });
        var st2 = self.state;
        window.WEDDING.sendRSVP({ name: st2.name.trim(), attend: st2.attend, count: st2.attend === "yes" ? st2.count : 0, guests: st2.attend === "yes" ? st2.guests.map(function (g) { return String(g || "").trim(); }) : [], lang: lang })
          .then(function () { self.setState({ sending: false, sent: true }); })
          .catch(function () { self.setState({ sending: false }); window.WEDDING.toast("sendError", lang); });
      },
      thanks: st.attend === 'no' ? t.thanksNo : t.thanksYes,
      edit: function () { self.setState({ sent: false }); },
      todoCats: todoCats,
      todoItems: todoItems,
      setCar: function (el) { self.car = el; },
      carPrev: function () { carMove(-1); },
      carNext: function () { carMove(1); },
      chevFlip: rtl ? 'transform: scaleX(-1)' : '',
      gcalUrl: gcalUrl
    };
  }
}
return Component;
})(window.DCLogic);
