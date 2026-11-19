# Spider-Man: Brand New Day — багатомовний фан-портал

Курсовий проєкт на тему **«Розробка багатомовного сайту з перемиканням мов»**.

Мінімалістичний односторінковий сайт (landing page) про фільм *Spider-Man: Brand New Day* (2026) з власним i18n-рушієм на чистому JavaScript.

## Можливості

- 7 мов інтерфейсу: українська (за замовчуванням), English, Español, Português, Français, Deutsch, 中文
- Миттєве перемикання мови без перезавантаження сторінки (атрибути `data-i18n`, `data-i18n-alt`, `data-i18n-aria-label`)
- Автоматичне оновлення `<html lang>` і `<title>`
- Збереження вибраної мови в `localStorage`
- Форматування сум через `Intl.NumberFormat` відповідно до локалі (`$2.5B`, `2,5 млрд $`, `$25亿`)
- Scroll-reveal анімації (`IntersectionObserver`), анімація лічильників, підтримка `prefers-reduced-motion`
- Доступний перемикач мов (клавіатура: ↑ ↓ Home End Enter Esc)
- Адаптивна верстка (desktop / tablet / mobile)

## Структура

```
├── index.html            — семантична розмітка з data-i18n атрибутами
├── css/style.css         — стилі (Custom Properties, Grid/Flexbox, анімації)
├── js/translations.js    — словник перекладів для 7 мов
├── js/app.js             — i18n-рушій та інтерактивність
└── assets/               — зображення
```

## Запуск

Відкрийте `index.html` у браузері або скористайтеся розширенням **Live Server** у VS Code.

## Автор

Семчук Богдан

---

Некомерційний навчальний фан-проєкт. Усі права на фільм і зображення належать Marvel Studios та Sony Pictures.