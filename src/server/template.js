export const indexTemplate = (template, token) => `
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="/static/client.bundle.js" type="application/javascript"></script>
    <script>
      window.__token__ = '${token}'
    </script>
    <title>Document</title>
</head>
<body>

<div id="root">${template}</div>
<div id="modal_root"></div>
<div id="dropdown_root"></div>
</body>
</html>
`
