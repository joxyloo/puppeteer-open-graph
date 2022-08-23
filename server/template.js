exports.getHtml = function (title, description, img) {

  var css = `
    html, body {
      height: 100%;
      width: 100%;
    }
    
    .title {
      font-family: 'DM Serif Display', serif;
      font-size: 55px;
    }
    
    .description {
      font-size: 25px;
      color: #676565
    }
    
    .image-text{
      width: 80%
    }
    
    .bg {
      background-image: url(${img});
      background-size: 1200px 630px;
      background-repeat: no-repeat;
      display: block;
      width:60%;
      height:100%;
    }`

  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Bootstrap demo</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    
    <body class="d-flex align-items-center">
      <div class="m-5 image-text">
        <div class="title">${title}</div>
        <p class="description mt-3">${description}</p>
      </div>
      <div class="bg"></div>
    </body>
    <style>${css}</style>
  </html>`
};
