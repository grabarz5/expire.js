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

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Expire.js</title>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="./expire.js"></script>
</head>
<body>
    <h1>Strona przykładowa</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac dui pharetra, elementum velit consequat, vehicula libero. Etiam id luctus neque. Cras commodo sagittis tellus, ut dignissim mi lobortis vel. Sed nec turpis ac eros rhoncus pretium. Pellentesque luctus, velit quis efficitur hendrerit, metus massa tincidunt purus, eu tincidunt libero ligula vitae massa. Sed lacus metus, pellentesque ut pharetra sed, sollicitudin id orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut gravida imperdiet volutpat. Aenean tincidunt orci eu laoreet bibendum.</p>
    <b><i>Poniższy akapit wygaśnie 12.10.18 o godz. 01:05</i></b>
    <p expire="2018-10-12 17:30:00" class="expire-strike">Curabitur finibus dolor quam, eget commodo elit sodales non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec lacus sapien, consequat sit amet tempor nec, semper non massa. Mauris sagittis euismod quam, id iaculis massa vulputate in. Nunc convallis mi a malesuada dictum. Mauris scelerisque felis id ante iaculis vehicula. Nulla porttitor nulla vitae ex tempor, sit amet commodo mauris volutpat. Nam lacinia ut arcu in imperdiet. Cras accumsan purus placerat est tincidunt rutrum.</p>
    <p expire="2018-10-12 17:30:15" class="expire-strike">Quisque ac leo ac nibh viverra lobortis. Curabitur accumsan risus vel neque sollicitudin, et ullamcorper sapien cursus. Proin non euismod ex, vitae euismod ipsum. Nullam fringilla vehicula magna et varius. Nullam mauris ex, imperdiet ac neque a, porta malesuada odio. In eget neque varius dui fermentum cursus nec eget lacus. Aliquam vel sapien risus. Etiam et auctor augue, ac feugiat turpis. Praesent tincidunt pulvinar erat, nec faucibus arcu dapibus ac. Vivamus commodo augue sit amet nisi consequat imperdiet. Fusce orci dui, finibus vitae mi quis, luctus vestibulum mi.</p>
    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pulvinar ullamcorper mauris quis feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eu felis eu mi iaculis vulputate eu eget massa. Curabitur ipsum leo, hendrerit id risus id, suscipit tincidunt sem. Donec bibendum tortor id nunc commodo, ut fringilla libero pulvinar. Morbi quis nunc vel velit egestas feugiat. Phasellus hendrerit laoreet nibh. Donec a dui porta, consectetur tellus quis, pellentesque diam. Cras id nisl nec massa vehicula porttitor eu sagittis mauris. Nullam pulvinar arcu a felis aliquet dictum. Aenean sed mattis eros. Ut blandit justo et erat ullamcorper fermentum.</p>
    <p>Morbi mattis elit sed quam molestie dapibus. Praesent molestie lorem ut magna faucibus rutrum. Nam eget purus efficitur, ullamcorper massa a, gravida odio. Vestibulum et rhoncus ligula. Suspendisse non nisl ac ipsum mattis lacinia. Phasellus eleifend nulla in lacus pulvinar, sit amet lacinia massa venenatis. Phasellus eu odio consequat odio tempor congue. Ut gravida metus a nibh feugiat dictum. Suspendisse pharetra, lectus vitae tincidunt pretium, arcu mi molestie nulla, ut pretium dui ligula et dui. Cras nec interdum risus. Quisque euismod et felis dignissim pretium. Aenean rutrum, augue quis sollicitudin faucibus, nunc turpis interdum ipsum, at condimentum nisl nisl et nisl. Curabitur in bibendum dolor, non pellentesque mauris. Vestibulum porta ante ac orci lacinia tincidunt.</p>
</body>
</html>
```
