/**
 * translations.js
 * Словник перекладів для i18n-рушія (див. js/app.js).
 *
 * LANGUAGES    — метадані мов: код, підпис у перемикачі (label), рідна назва,
 *                значення для <html lang>, локаль Intl.
 * TRANSLATIONS — словник «ключ → рядок» для кожної з 7 мов.
 *
 * Ключі використовуються в index.html через атрибути:
 *   data-i18n="key"             → textContent елемента
 *   data-i18n-alt="key"         → атрибут alt зображення
 *   data-i18n-aria-label="key"  → атрибут aria-label
 */

const DEFAULT_LANG = "uk";

const LANGUAGES = [
  { code: "uk", label: "UA", native: "Українська", htmlLang: "uk",    locale: "uk-UA" },
  { code: "en", label: "EN", native: "English",    htmlLang: "en",    locale: "en-US" },
  { code: "es", label: "ES", native: "Español",    htmlLang: "es",    locale: "es-ES" },
  { code: "pt", label: "PT", native: "Português",  htmlLang: "pt",    locale: "pt-BR" },
  { code: "fr", label: "FR", native: "Français",   htmlLang: "fr",    locale: "fr-FR" },
  { code: "de", label: "DE", native: "Deutsch",    htmlLang: "de",    locale: "de-DE" },
  { code: "zh", label: "ZH", native: "中文",        htmlLang: "zh-CN", locale: "zh-CN" }
];

const TRANSLATIONS = {
  /* =========================================================
     UK — Українська (мова за замовчуванням)
     ========================================================= */
  uk: {
    "meta.title": "Spider-Man: Brand New Day — фан-портал",
    "a11y.skip": "Перейти до вмісту",

    "nav.home": "На головну",
    "nav.story": "Сюжет",
    "nav.characters": "Персонажі",
    "nav.production": "Зйомки",
    "nav.boxoffice": "Касові збори",
    "nav.menu": "Меню",
    "lang.label": "Мова сайту",

    "hero.eyebrow": "Фан-портал · Фільм 2026 року",
    "hero.tagline": "Ніхто не пам’ятає його імені. Місто все ще потребує героя.",
    "hero.lead": "Четвертий сольний фільм Тома Голланда в ролі Людини-павука — історія про героя, якому довелося почати все з чистого аркуша.",
    "hero.cta": "Дивитися трейлер",
    "hero.more": "Дізнатися сюжет",
    "hero.imgAlt": "Людина-павук лежить на сталевій балці хмарочоса над Нью-Йорком і дивиться в телефон",

    "meta.release.label": "Прем’єра",
    "meta.release.value": "31 липня 2026",
    "meta.genre.label": "Жанр",
    "meta.genre.value": "Бойовик / Фантастика / Пригоди",
    "meta.runtime.label": "Тривалість",
    "meta.runtime.value": "150 хв",
    "meta.studio.label": "Студія",

    "story.label": "Сюжет",
    "story.title": "Почати все спочатку",
    "story.lead": "Після подій «Немає шляху додому» світ більше не знає, хто такий Пітер Паркер.",
    "story.p1": "Немає друзів, які б його пам’ятали, немає наставника й немає страховки — лише маленька квартира в Нью-Йорку та костюм. Пітер перетворює свою анонімність на новий початок і повністю присвячує себе вуличній боротьбі зі злочинністю.",
    "story.p2": "Та спокій триває недовго: дивна хвиля злочинів, несподівані союзники й загроза, з якою він ще ніколи не стикався, змушують його вирішити, яким героєм він хоче бути, коли ніхто не дивиться.",
    "story.pillar1.title": "Чистий аркуш",
    "story.pillar1.text": "Світ забув Пітера Паркера — і тепер у Людини-павука немає подвійного життя.",
    "story.pillar2.title": "Вулична справедливість",
    "story.pillar2.text": "Квінз, дахи й нічні провулки: дружній сусід повертається до своїх витоків.",
    "story.pillar3.title": "Зіткнення світів",
    "story.pillar3.text": "Нові союзники та небезпечні вороги з’являються в місті одночасно.",

    "characters.label": "Персонажі",
    "characters.title": "Головні герої",
    "characters.lead": "Чотири постаті, навколо яких обертається нова історія.",
    "characters.actorPrefix": "У ролі",

    "char.spidey.role": "Головний герой",
    "char.spidey.name": "Людина-павук / Пітер Паркер",
    "char.spidey.actor": "Том Голланд",
    "char.spidey.bio": "Через кілька років після того, як заклинання Доктора Стренджа стерло його з пам’яті всіх людей, Пітер живе сам і повністю присвячує себе захисту Нью-Йорка. Ніхто не знає його імені — і це водночас його свобода та найважчий тягар.",
    "char.spidey.alt": "Пітер Паркер у зеленій куртці серед натовпу фанатів Людини-павука",

    "char.jean.role": "Загадкова телепатка",
    "char.jean.name": "Джин Ґрей",
    "char.jean.actor": "Сейді Сінк",
    "char.jean.bio": "Молода телепатка, чиї здібності лише починають пробуджуватися. Її поява в місті змінює правила гри для Пітера й відчиняє двері до значно ширшого світу.",
    "char.jean.alt": "Джин Ґрей із рудим волоссям тримає рацію біля обличчя",

    "char.punisher.role": "Непередбачуваний союзник",
    "char.punisher.name": "Каратель / Френк Касл",
    "char.punisher.actor": "Джон Бернтал",
    "char.punisher.bio": "Колишній морський піхотинець, який веде власну війну зі злочинністю. Пітер і Френк хочуть безпечних вулиць, але їхні методи не можуть бути більш різними.",
    "char.punisher.alt": "Френк Касл у тактичному бронежилеті з черепом біля цегляної стіни",

    "char.mj.role": "Стара знайома",
    "char.mj.name": "ЕмДжей / Мішель Джонс",
    "char.mj.actor": "Зендея",
    "char.mj.bio": "Мішель більше не пам’ятає, хто такий Пітер, але вона, як і раніше, кмітлива, допитлива й безстрашна. Їхні шляхи знову перетинаються в місті, яке не перестає зводити їх разом.",
    "char.mj.alt": "Мішель Джонс у темній сукні стоїть у тьмяно освітленому приміщенні",

    "production.label": "Зйомки",
    "production.title": "Як створювали фільм",
    "director.role": "Режисер",
    "director.name": "Дестін Деніел Креттон",
    "director.alt": "Режисер Дестін Деніел Креттон на знімальному майданчику поруч із Людиною-павуком",
    "director.p1": "Режисер «Шан-Чі та легенди десяти кілець» перейняв сагу про Людину-павука після трилогії Джона Воттса. У центрі його бачення — персонаж: камерні, людяні моменти важать для нього стільки ж, скільки й масштабні екшн-сцени.",
    "director.p2": "Креттон зробив ставку на зйомки на реальних локаціях: вулиці Глазго перетворили на Нью-Йорк, тож бойові сцени виглядають приземлено, відчутно й по-вуличному.",

    "prod.duration.label": "Основні зйомки",
    "prod.duration.value": "≈4",
    "prod.duration.unit": "місяці",
    "prod.duration.detail": "Серпень — грудень 2025",
    "prod.locations.label": "Ключові локації",
    "prod.locations.value": "Глазго · Лондон · Кент",
    "prod.locations.detail": "Павільйони Pinewood Studios (Бакінгемшир, Англія)",
    "prod.budget.label": "Бюджет виробництва",
    "prod.budget.detail": "Орієнтовна оцінка",

    "box.label": "Касові збори",
    "box.title": "Історичний рекорд",
    "box.lead": "Цифри, які переписали таблиці найкасовіших фільмів.",
    "box.total.label": "Загальні світові збори",
    "box.opening.label": "Перший вікенд (США і Канада)",
    "box.openingWorld.label": "Перший вікенд у світі",
    "box.domestic.label": "США і Канада",
    "box.intl.label": "Решта світу",
    "box.split.title": "Співвідношення зборів",
    "box.record.title": "3-й найкасовіший фільм в історії кіно",
    "box.record.p1": "«Brand New Day» перевершив усі прогнози: фільм обігнав «Титанік» і «Аватар: Шлях води» та у світовому прокаті поступається лише «Аватару» й «Месникам: Завершення».",
    "box.m1": "Найбільший стартовий вікенд в історії прокату США",
    "box.m2": "1 млрд $ у світі всього за 6 днів",
    "box.m3": "Перший фільм про Людину-павука, що зібрав понад 2 млрд $",
    "box.m4": "Найкасовіший фільм в історії прокату Північної Америки",
    "box.note": "Дані приблизні — за відкритими даними сервісів відстеження касових зборів, осінь 2026 року.",

    "trailer.label": "Трейлер",
    "trailer.title": "Новий день починається зараз",
    "trailer.text": "Подивіться офіційний трейлер і поверніться в Нью-Йорк разом із Пітером Паркером.",
    "trailer.button": "Дивитися трейлер",
    "trailer.close": "Закрити",
    "trailer.fallback": "Відкрити на YouTube ↗",

    "footer.project": "Курсовий проєкт: багатомовний вебзастосунок",
    "footer.topic": "Розробка багатомовного сайту з перемиканням мов",
    "footer.author": "Автор",
    "footer.langs": "7 мов інтерфейсу",
    "footer.disclaimer": "Некомерційний фан-проєкт. Усі права на фільм і зображення належать Marvel Studios та Sony Pictures.",
    "footer.top": "Нагору ↑"
  },
  /* =========================================================
     EN — English
     ========================================================= */
  en: {
    "meta.title": "Spider-Man: Brand New Day — Fan Portal",
    "a11y.skip": "Skip to content",

    "nav.home": "Home",
    "nav.story": "Story",
    "nav.characters": "Characters",
    "nav.production": "Filming",
    "nav.boxoffice": "Box Office",
    "nav.menu": "Menu",
    "lang.label": "Site language",

    "hero.eyebrow": "Fan Portal · A 2026 Film",
    "hero.tagline": "No one remembers his name. The city still needs a hero.",
    "hero.lead": "Tom Holland’s fourth solo outing as Spider-Man — the story of a hero forced to start over with a clean slate.",
    "hero.cta": "Watch Trailer",
    "hero.more": "Explore the Story",
    "hero.imgAlt": "Spider-Man lying on a skyscraper’s steel beam above New York, looking at his phone",

    "meta.release.label": "Release",
    "meta.release.value": "July 31, 2026",
    "meta.genre.label": "Genre",
    "meta.genre.value": "Action / Sci-Fi / Adventure",
    "meta.runtime.label": "Runtime",
    "meta.runtime.value": "150 min",
    "meta.studio.label": "Studio",

    "story.label": "Story",
    "story.title": "Starting Over",
    "story.lead": "After the events of No Way Home, the world no longer knows who Peter Parker is.",
    "story.p1": "No friends who remember him, no mentor, no safety net — just a small apartment in New York and the suit. Peter turns his anonymity into a fresh start and devotes himself entirely to street-level crime fighting.",
    "story.p2": "But the quiet doesn’t last: a strange wave of crimes, unexpected allies and a threat unlike any he has faced force him to decide what kind of hero he wants to be when no one is watching.",
    "story.pillar1.title": "A Clean Slate",
    "story.pillar1.text": "The world has forgotten Peter Parker — and Spider-Man no longer lives a double life.",
    "story.pillar2.title": "Street-Level Justice",
    "story.pillar2.text": "Queens, rooftops and late-night alleys: the friendly neighbourhood hero returns to his roots.",
    "story.pillar3.title": "Collision Course",
    "story.pillar3.text": "New allies and dangerous enemies arrive in the city at the very same time.",

    "characters.label": "Characters",
    "characters.title": "The Main Cast",
    "characters.lead": "Four figures at the heart of the new story.",
    "characters.actorPrefix": "Played by",

    "char.spidey.role": "The Hero",
    "char.spidey.name": "Spider-Man / Peter Parker",
    "char.spidey.actor": "Tom Holland",
    "char.spidey.bio": "Years after Doctor Strange’s spell erased him from everyone’s memory, Peter lives alone and dedicates himself fully to protecting New York. No one knows his name — it is both his freedom and his heaviest burden.",
    "char.spidey.alt": "Peter Parker in a green jacket among a crowd of Spider-Man fans",

    "char.jean.role": "The Mysterious Telepath",
    "char.jean.name": "Jean Grey",
    "char.jean.actor": "Sadie Sink",
    "char.jean.bio": "A young telepath whose powers are only beginning to awaken. Her arrival in the city changes the rules of the game for Peter and opens the door to a much larger world.",
    "char.jean.alt": "Red-haired Jean Grey holding a walkie-talkie near her face",

    "char.punisher.role": "The Wild Card Ally",
    "char.punisher.name": "The Punisher / Frank Castle",
    "char.punisher.actor": "Jon Bernthal",
    "char.punisher.bio": "A former Marine waging his own war on crime. Peter and Frank both want safer streets, but their methods could not be further apart.",
    "char.punisher.alt": "Frank Castle in a tactical skull vest by a brick wall",

    "char.mj.role": "The Old Friend",
    "char.mj.name": "MJ / Michelle Jones",
    "char.mj.actor": "Zendaya",
    "char.mj.bio": "Michelle no longer remembers who Peter is, yet she is as sharp, curious and fearless as ever. Their paths cross again in a city that keeps pulling them together.",
    "char.mj.alt": "Michelle Jones in a dark dress standing in a dimly lit room",

    "production.label": "Filming",
    "production.title": "Making the Film",
    "director.role": "Director",
    "director.name": "Destin Daniel Cretton",
    "director.alt": "Director Destin Daniel Cretton on set next to Spider-Man",
    "director.p1": "The director of Shang-Chi and the Legend of the Ten Rings takes over the Spider-Man saga after Jon Watts’ trilogy. His vision is centred on character: intimate, human moments carry as much weight as the large-scale action set pieces.",
    "director.p2": "Cretton bet on real locations: the streets of Glasgow were dressed as New York, so the action feels grounded, tactile and street-level.",

    "prod.duration.label": "Principal Photography",
    "prod.duration.value": "≈4",
    "prod.duration.unit": "months",
    "prod.duration.detail": "August — December 2025",
    "prod.locations.label": "Key Locations",
    "prod.locations.value": "Glasgow · London · Kent",
    "prod.locations.detail": "Stage work at Pinewood Studios (Buckinghamshire, England)",
    "prod.budget.label": "Production Budget",
    "prod.budget.detail": "Estimated figure",

    "box.label": "Box Office",
    "box.title": "A Historic Record",
    "box.lead": "The numbers that rewrote the all-time charts.",
    "box.total.label": "Total Worldwide Gross",
    "box.opening.label": "Opening Weekend (US & Canada)",
    "box.openingWorld.label": "Worldwide Opening Weekend",
    "box.domestic.label": "US & Canada",
    "box.intl.label": "International",
    "box.split.title": "Domestic vs. International",
    "box.record.title": "The 3rd Highest-Grossing Film in Cinema History",
    "box.record.p1": "Brand New Day shattered every forecast: it overtook Titanic and Avatar: The Way of Water, and worldwide it now trails only Avatar and Avengers: Endgame.",
    "box.m1": "The biggest opening weekend in US box office history",
    "box.m2": "$1 billion worldwide in just 6 days",
    "box.m3": "The first Spider-Man film to cross $2 billion",
    "box.m4": "The highest-grossing film ever at the North American box office",
    "box.note": "Figures are approximate, based on public box office trackers, autumn 2026.",

    "trailer.label": "Trailer",
    "trailer.title": "A New Day Starts Now",
    "trailer.text": "Watch the official trailer and swing back into New York with Peter Parker.",
    "trailer.button": "Watch Trailer",
    "trailer.close": "Close",
    "trailer.fallback": "Open on YouTube ↗",

    "footer.project": "Coursework project: Multilingual Web Application",
    "footer.topic": "Development of a Multilingual Website with Language Switching",
    "footer.author": "Author",
    "footer.langs": "7 interface languages",
    "footer.disclaimer": "Non-commercial fan project. All rights to the film and images belong to Marvel Studios and Sony Pictures.",
    "footer.top": "Back to top ↑"
  },
};

// Робимо словник доступним глобально для js/app.js
window.I18N = { DEFAULT_LANG, LANGUAGES, TRANSLATIONS };