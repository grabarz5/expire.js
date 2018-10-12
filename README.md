# expire.js
Prosty skrypt, który oznacza przeterminowane treści.

## Czego potrzebuję?

Skrypt korzysta z biblioteki JQuery, którą należy dołączyć w nagłówku HTML.

## Jak użyć?

1. Umieść skrypt w nagłówku html:

```html
<head>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://raw.githubusercontent.com/grabarz5/expire.js/master/src/v1/expire.js"></script>
</head>
```

2. Dodaj atrybut **expire** do elementu:

```html
<p expire="2018-10-12 18:00:00">Witaj, świecie!</p>
```

3. Poczekaj aż minie czas! :)

## Przykład

[Zobacz tutaj](../master/src/v1/index.html)
