"""Build a standalone preview; srcdoc avoids a separate framed URL."""
from pathlib import Path
import base64
import html
import re

ROOT = Path(__file__).resolve().parent.parent

def read(path):
    return (ROOT / path).read_text()

def style(css):
    return '<style>' + css + '</style>'

def script(js):
    return '<script>' + re.sub(r'</script', r'<\\/script', js, flags=re.I) + '</script>'

def inline_css(path):
    css = read(path)
    def embed(match):
        asset = (ROOT / path).parent / match[1]
        encoded = base64.b64encode(asset.read_bytes()).decode()
        return 'url("data:font/woff2;base64,' + encoded + '")'
    return re.sub(r'url\("([^"\)]+\.woff2)"\)', embed, css)

font_css = inline_css('css/fonts.css')
demo = read('demo.html')
demo = re.sub(r'<link\b[^>]*href="https://fonts\.[^"]*"[^>]*>', '', demo)
demo = re.sub(r'<link\b[^>]*href="(css/[^"]+)"[^>]*>', lambda m: style(inline_css(m[1])), demo)
demo = re.sub(r'<script src="(js/[^"]+)"></script>', lambda m: script(read(m[1])), demo)
outer_css = read('css/demo-frame.css')
outer_css = re.sub(r'@font-face\s*\{[^}]*\}', '', outer_css)
page = '''<!doctype html>
<html lang="ru"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Виджет «Таблица» — демо</title>
'''
page += style(read('vendor/ui-kit/tokens.css'))
page += style(read('vendor/ui-kit/components/demo-frame/demo-frame.css'))
page += style(font_css + outer_css)
page += '</head><body>\n<iframe id="demo-stage" class="demo-stage" title="Интерактивная демка виджета «Таблица»" srcdoc="' + html.escape(demo, quote=True) + '"></iframe>\n'
page += script(read('vendor/ui-kit/components/demo-frame/demo-frame.js'))
page += script(read('js/demo-frame.js'))
page += '</body></html>\n'
page = '\n'.join(line.rstrip() for line in page.split('\n'))
(ROOT / 'index.html').write_text(page)
print('Built standalone index.html')
