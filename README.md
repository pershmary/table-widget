# Демо виджета «Таблица»

Открыть `index.html` в браузере — сервер не нужен.

- `index.html` — страница: документ и таблица.
- `css/table-widget.css` — стили (цвета — токены в `:root`).
- `css/icon-fonts.css` — иконочные шрифты, встроены как data URI.
- `js/` — скрипты, подключаются строго в этом порядке: `toolbar.js`, `table.js`, `commands.js`, `windows.js`, `toolbar-range.js`, `toolbar-columns.js`, `toolbar-rows.js`, `toolbar-cell.js`, `widget-outline.js`, `table-window.js`, `table-create.js`, `editor-toolbar-shadow.js`, `undo-redo-buttons.js`.

Шрифт Inter подключается с Google Fonts (без интернета — системный шрифт).
Правила и поведение — в документе проекта `rules.md`.

## Запуск в среде разработки

Из каталога `/workspace/table-widget`:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Сборка и установка npm-пакетов не нужны. Исходные HTML, CSS и JavaScript восстановлены из предоставленного архива.
