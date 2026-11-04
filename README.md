# Демо виджета «Таблица»

Открыть `index.html` в браузере — сервер не нужен.

- `index.html` — рамка demo-frame из ui-kit.
- `demo.html` — исходная демка целиком: редактор, документ и таблица.
- `vendor/ui-kit/` — локальная копия компонента demo-frame, токенов и шрифта рамки; источник и версия в `SOURCE.md`.
- `css/demo-frame.css`, `js/demo-frame.js` — подключение и настройка рамки.
- `css/table-widget.css` — стили (цвета — токены в `:root`).
- `css/icon-fonts.css` — иконочные шрифты, встроены как data URI.
- `js/` — скрипты, подключаются строго в этом порядке: `toolbar.js`, `table.js`, `commands.js`, `windows.js`, `toolbar-range.js`, `toolbar-columns.js`, `toolbar-rows.js`, `toolbar-cell.js`, `widget-outline.js`, `table-window.js`, `table-create.js`, `editor-toolbar-shadow.js`, `undo-redo-buttons.js`.

Шрифт Inter (прямой и курсив) подключается локально из `vendor/ui-kit/fonts/Inter/` через `css/fonts.css`. В автономный `index.html` шрифты встроены; Google Fonts не используется.
Правила и поведение — в документе проекта `rules.md`.

## Запуск в среде разработки

Из каталога `/workspace/table-widget`:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Сборка и установка npm-пакетов не нужны. Исходные HTML, CSS и JavaScript восстановлены из предоставленного архива.

После изменения `demo.html`, CSS, JS или настроек рамки обновите автономный файл просмотра:

```sh
python3 tools/build-demo.py
```

`index.html` содержит стили, скрипты, шрифты и сцену (`srcdoc`) внутри себя: для просмотра не требуется загрузка `demo.html` во вложенном окне.
