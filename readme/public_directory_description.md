
# 📂 Папка public

## 📌 Загальний опис

Папка `public` у Vite використовується для зберігання статичних файлів, які не проходять обробку Vite та просто копіюються в папку `dist` під час збірки. Файли з цієї папки доступні напряму за URL `/назва_файлу`.

## 📂 Структура та призначення файлів

```
public/
│-- favicon.ico            # Іконка сайту (16x16 або 32x32)
│-- robots.txt             # Файл для SEO, керування індексацією пошуковими системами
│-- manifest.json          # Web App Manifest (для PWA)
│-- sitemap.xml            # XML-карта сайту для SEO
│-- browserconfig.xml      # Конфігурація плиток Windows
│
├── images/                # Статичні зображення (логотипи, OG-зображення тощо)
│   ├── logo.svg
│   ├── og-image.jpg       # Зображення для соцмереж (Open Graph)
│
├── fonts/                 # Шрифти (не обробляються Vite)
│   ├── custom.woff2
│
├── icons/                 # Іконки для мобільних пристроїв та PWA
│   ├── apple-touch-icon.png
│   ├── icon-192x192.png
│   ├── icon-512x512.png
│
├── videos/                # Статичні відеофайли
│   ├── intro.mp4
│
└── data/                  # JSON-файли, які використовуються на сайті
    ├── content.json
```

## 📌 Опис кожного файлу

### 🔹 favicon.ico
Фавіконка сайту. Використовується браузерами та відображається у вкладках. Рекомендується розмір 16x16 або 32x32 px.

### 🔹 robots.txt
Файл, який вказує пошуковим системам, які сторінки індексувати або ігнорувати.

Приклад:
```
User-agent: *
Disallow: /admin/
Allow: /
Sitemap: https://example.com/sitemap.xml
```

### 🔹 manifest.json (тільки для PWA)
Файл маніфесту PWA, що містить інформацію про додаток (іконки, кольори, назву тощо).

Приклад:
```
{
  "name": "My Web App",
  "short_name": "WebApp",
  "start_url": "/index.html",
  "display": "standalone",
  "icons": [
    {
      "src": "icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### 🔹 sitemap.xml
Карта сайту для пошукових систем. Допомагає Google, Bing та іншим ботам сканувати сторінки.

Приклад:
```
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://example.com/</loc>
        <lastmod>2024-02-13</lastmod>
        <priority>1.0</priority>
    </url>
</urlset>
```

### 🔹 browserconfig.xml (для Windows плиток)
Файл налаштувань плиток Windows.

```
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="smalltile.png"/>
      <square150x150logo src="mediumtile.png"/>
      <wide310x150logo src="widetile.png"/>
      <square310x310logo src="largetile.png"/>
      <TileColor>#2d89ef</TileColor>
    </tile>
  </msapplication>
</browserconfig>
```

## 📁 images/
Папка для статичних зображень. Сюди можна додавати логотипи, Open Graph (OG) зображення для соцмереж.

## 📁 fonts/
Шрифти, які не проходять обробку Vite, але використовуються напряму через @font-face в CSS.

## 📁 icons/
Іконки для PWA та мобільних пристроїв (Android, iOS). Рекомендовано розміри: 192x192px, 512x512px.

## 📁 videos/
Відеофайли, які використовуються безпосередньо на сайті, наприклад, інтро-ролики.

## 📁 data/
JSON-файли для збереження контенту або налаштувань, які можуть використовуватись у скриптах.

## 🛠 Коли використовувати public/?

✅ Якщо потрібно, щоб файл залишався незмінним після білду.  
✅ Якщо файл має бути доступний напряму за URL (/favicon.ico).  
✅ Якщо це шрифти, відео, зображення, JSON або XML-файли, які не потрібно імпортувати в код.  
✅ Якщо це файли, які мають бути доступні для SEO (sitemap.xml, robots.txt).

## ❌ Коли НЕ використовувати public/?

🚫 Якщо файл потрібно імпортувати в код (import у JS/SCSS). У такому випадку краще зберігати його в `src/assets/`.  
🚫 Якщо це компоненти, стилі або скрипти — їх слід зберігати в `src/`.

## 🔗 Корисні ресурси:

📘 Документація Vite: public directory  
📘 Google Developers: robots.txt  
📘 Google Developers: sitemap.xml

✍ Оновлено: 2025-02-13
