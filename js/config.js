/* Настройки сайта. Меняются здесь, остальной код трогать не нужно. */
window.WEDDING_CONFIG = {
  /* Адрес веб-приложения Google Apps Script (появится после «Развернуть → Веб-приложение»).
     Пока пусто — сайт работает в демо-режиме: тестовые гости ниже, ответы никуда не уходят. */
  scriptUrl: 'https://script.google.com/macros/s/AKfycbxFSKHyR0i-OKFRplrs3NYcnItZV_5_WEjnLd4r1o8pCLq79zo5O8HyqUo2o6nRZR4w/exec',

  /* Язык общей ссылки, если язык телефона гостя не русский, английский, грузинский или иврит. */
  fallbackLang: 'en',

  /* Тестовые гости для проверки до подключения таблицы: ?i=test-ru, ?i=test-en, ?i=test-ka, ?i=test-he */
  demoGuests: {
    'test-ru': { greeting: 'Дорогие Давид и Мария', lang: 'ru', hupa: true },
    'test-en': { greeting: 'Dear David and Maria', lang: 'en', hupa: true },
    'test-ka': { greeting: 'ძვირფასო დავით და მარიამ', lang: 'ka', hupa: false },
    'test-he': { greeting: 'דוד ומריה היקרים', lang: 'he', hupa: false }
  }
};
