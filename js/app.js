/**
 * app.js
 * 1. i18n-рушій: перемикання мов без перезавантаження, localStorage, <html lang>, <title>
 * 2. Перемикач мов (dropdown з клавіатурною навігацією)
 * 3. Форматування грошей через Intl.NumberFormat відповідно до локалі
 * 4. Анімація лічильників (count-up) у секції касових зборів
 * 5. Scroll-reveal анімації (IntersectionObserver)
 * 6. Липкий хедер, активне посилання навігації, мобільне меню
 * 7. Модальне вікно з трейлером YouTube
 */
(function () {
  "use strict";

  const { DEFAULT_LANG, LANGUAGES, TRANSLATIONS } = window.I18N;

  /* ---------------------------------------------------------
     Налаштування
     --------------------------------------------------------- */
  const STORAGE_KEY = "bnd-lang";
  const FADE_MS = 180;          // тривалість згасання тексту при зміні мови
  const COUNT_MS = 1800;        // тривалість анімації лічильників

  // ID відео з YouTube (частина після "watch?v="). Якщо порожній —
  // кнопка відкриває пошук трейлера на YouTube у новій вкладці.
  const TRAILER_VIDEO_ID = "8TZMtslA3UY";
  const TRAILER_SEARCH_URL =
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent("Spider-Man: Brand New Day official trailer");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;
  let currentLang = DEFAULT_LANG;

  /* =========================================================
     1. i18n-РУШІЙ
     ========================================================= */
  const isSupported = (code) => LANGUAGES.some((l) => l.code === code);
  const getLangMeta = (code) => LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];

  /** Повертає переклад ключа; якщо його немає — бере з мови за замовчуванням. */
  function t(key, lang = currentLang) {
    const dict = TRANSLATIONS[lang] || {};
    if (key in dict) return dict[key];
    if (key in TRANSLATIONS[DEFAULT_LANG]) return TRANSLATIONS[DEFAULT_LANG][key];
    console.warn(`[i18n] Missing key: "${key}"`);
    return key;
  }

  function readStoredLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return isSupported(saved) ? saved : null;
    } catch (e) {
      return null; // localStorage може бути недоступний (приватний режим тощо)
    }
  }

  function storeLang(code) {
    try { localStorage.setItem(STORAGE_KEY, code); } catch (e) { /* ігноруємо */ }
  }

  /** Підставляє переклади в усі елементи з data-i18n-атрибутами. */
  function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n, lang);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      el.setAttribute("alt", t(el.dataset.i18nAlt, lang));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel, lang));
    });

    const meta = getLangMeta(lang);
    root.setAttribute("lang", meta.htmlLang);
    root.dataset.lang = lang;               // для CSS (наприклад, шрифт для китайської)
    document.title = t("meta.title", lang);

    updateMoney();
    updateSwitcherUI();
  }

  /** Публічна функція зміни мови з плавним згасанням тексту. */
  function setLanguage(lang, { animate = true, save = true } = {}) {
    if (!isSupported(lang)) lang = DEFAULT_LANG;
    const changed = lang !== currentLang;
    currentLang = lang;
    if (save) storeLang(lang);

    if (!animate || !changed || reduceMotion) {
      applyTranslations(lang);
      return;
    }
    root.classList.add("is-switching");
    window.setTimeout(() => {
      applyTranslations(lang);
      // наступний кадр — повертаємо непрозорість
      requestAnimationFrame(() => root.classList.remove("is-switching"));
    }, FADE_MS);
  }

  /* =========================================================
     2. ПЕРЕМИКАЧ МОВ
     ========================================================= */
  const langSwitcher = document.getElementById("langSwitcher");
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");
  const langCurrentCode = document.getElementById("langCurrentCode");
  const langCurrentName = document.getElementById("langCurrentName");

  function buildSwitcher() {
    langMenu.innerHTML = "";
    LANGUAGES.forEach((l) => {
      const li = document.createElement("li");
      li.className = "lang__option";
      li.setAttribute("role", "option");
      li.setAttribute("tabindex", "-1");
      li.setAttribute("lang", l.htmlLang);
      li.dataset.lang = l.code;
      li.innerHTML =
        `<span class="lang__option-code">${l.label}</span>` +
        `<span class="lang__option-name">${l.native}</span>` +
        `<svg class="lang__check" width="12" height="9" viewBox="0 0 12 9" aria-hidden="true"><path d="M1 4.5l3.5 3.5L11 1" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`;
      li.addEventListener("click", () => {
        setLanguage(l.code);
        closeSwitcher(true);
      });
      langMenu.appendChild(li);
    });
  }

  function updateSwitcherUI() {
    const meta = getLangMeta(currentLang);
    langCurrentCode.textContent = meta.label;
    langCurrentName.textContent = meta.native;
    langMenu.querySelectorAll(".lang__option").forEach((opt) => {
      const active = opt.dataset.lang === currentLang;
      opt.classList.toggle("is-active", active);
      opt.setAttribute("aria-selected", String(active));
    });
  }

  const options = () => Array.from(langMenu.querySelectorAll(".lang__option"));

  function openSwitcher() {
    langSwitcher.classList.add("is-open");
    langToggle.setAttribute("aria-expanded", "true");
    const active = options().find((o) => o.dataset.lang === currentLang) || options()[0];
    active.focus();
  }

  function closeSwitcher(returnFocus = false) {
    langSwitcher.classList.remove("is-open");
    langToggle.setAttribute("aria-expanded", "false");
    if (returnFocus) langToggle.focus();
  }

  langToggle.addEventListener("click", () => {
    langSwitcher.classList.contains("is-open") ? closeSwitcher() : openSwitcher();
  });

  langToggle.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      openSwitcher();
    }
  });

  langMenu.addEventListener("keydown", (e) => {
    const list = options();
    const i = list.indexOf(document.activeElement);
    switch (e.key) {
      case "ArrowDown": e.preventDefault(); list[(i + 1) % list.length].focus(); break;
      case "ArrowUp":   e.preventDefault(); list[(i - 1 + list.length) % list.length].focus(); break;
      case "Home":      e.preventDefault(); list[0].focus(); break;
      case "End":       e.preventDefault(); list[list.length - 1].focus(); break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (list[i]) { setLanguage(list[i].dataset.lang); closeSwitcher(true); }
        break;
      case "Escape": e.preventDefault(); closeSwitcher(true); break;
      case "Tab": closeSwitcher(); break;
    }
  });

  document.addEventListener("click", (e) => {
    if (!langSwitcher.contains(e.target)) closeSwitcher();
  });

  /* =========================================================
     3. ФОРМАТУВАННЯ ГРОШЕЙ (Intl, залежить від мови)
     ========================================================= */
  function updateMoney() {
    // буде реалізовано в наступному коміті
  }

  /* =========================================================
     ІНІЦІАЛІЗАЦІЯ
     ========================================================= */
  function init() {
    buildSwitcher();
    currentLang = readStoredLang() || DEFAULT_LANG; // перший візит → українська
    applyTranslations(currentLang);
  }

  // доступ із консолі для демонстрації: setLanguage("en")
  window.setLanguage = (code) => setLanguage(code);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();