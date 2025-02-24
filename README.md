# Web Studio 5.0

![Web Studio 5.0](https://vorobeiivan.github.io/web-studio-5.0/)

## Опис проєкту

**Web Studio 5.0** – це сучасний адаптивний вебсайт, створений для демонстрації студійного портфоліо. Проєкт використовує сучасні технології розробки, такі як **HTML, SCSS, JavaScript, Vite**, а також підходи модульності через **partials HTML** та оптимізацію ресурсів.


## 🚀 Демо

🔗 [Макет у Figma](https://www.figma.com/design/wuEpGhwCepGCOUw7mZFRac/Web-Studio-(Version-5.0))

## 📁 Структура проєкту

```plaintext
src/
│   index.html          # Головний HTML-файл
│
├── js/                 # JavaScript файли
│   ├── main.js         # Основний скрипт
│   ├── modal.js        # Логіка модальних вікон
│   ├── scrollLock.js   # Блокування скролу
│
├── partials/           # Часткові HTML-фрагменти
│   ├── burger-modal.html
│   ├── feature.html
│   ├── footer.html
│   ├── form-modal.html
│   ├── header.html
│   ├── hero.html
│   ├── portfolio.html
│   ├── team.html
│
├── public/             # Статичні файли
│   ├── favicon.ico     # Іконка сайту
│   ├── assets/         # Шрифти, іконки, зображення
│       ├── fonts/      # Веб-шрифти (WOFF2, WOFF)
│       ├── icons/      # SVG-спрайт
│       ├── images/     # Оптимізовані WEBP-зображення
│
├── scss/               # SCSS-стилі
│   ├── base/           # Базові стилі (шрифти, скидання стилів)
│   ├── components/     # Кнопки, форми, логотипи, навігація
│   ├── sections/       # Окремі блоки сайту (хедер, футер, геро-секція)
│   ├── utils/          # Міксіни, змінні, функції
│   ├── main.scss       # Головний файл стилів
```

## 🛠️ Використані технології

| Технологія        | Призначення |
|------------------|------------|
| **HTML5**       | Розмітка сторінки |
| **SCSS (SASS)** | Стилізація та модульність стилів |
| **JavaScript**  | Інтерактивність (модальні вікна, анімації) |
| **Vite**        | Швидка збірка проєкту |
| **Prettier**    | Автоматичне форматування коду |
| **PostCSS**     | Оптимізація стилів |
| **SVG Sprite**  | Оптимізовані іконки |
| **WebP**        | Стиснуті зображення високої якості |
| **WOFF2**       | Оптимізовані веб-шрифти |

## 🔧 Встановлення та запуск

### 1️⃣ Клонування репозиторію
```sh
git clone https://github.com/yourusername/web-studio-5.0.git
cd web-studio-5.0
```

### 2️⃣ Встановлення залежностей
```sh
npm install
```

### 3️⃣ Запуск у режимі розробки
```sh
npm run dev
```

### 4️⃣ Збірка для продакшена
```sh
npm run build
```

## 📌 Додаткові ресурси
- [Документація Vite](https://vite.dev/guide/)
- [SASS](https://sass-lang.com/documentation/)
- [Prettier](https://prettier.io/docs/)
- [Інструмент для стиснення WebP](https://squoosh.app/)
- [Генератор favicon](https://www.favicon.cc/)
- [Конвертер шрифтів WOFF2](https://transfonter.org/)

## 🏆 Автори
**Розробка та дизайн:** [Іван Воробей](https://github.com/vorobeiivan)

---
© 2024 Web Studio 5.0. Усі права захищені.
