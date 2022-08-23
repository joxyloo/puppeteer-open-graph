const express = require('express');
const cors = require('cors');
const puppeteer = require('./puppeteer');
const blog = require('./blog');

const corsOptions = {
  origin: 'http://localhost:3000', //replace this with your frontend domain

  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/blog-pages', blog.getPages);

app.get('/blog-pages/:articleId', blog.getArticle);

app.get('/og-image', puppeteer.generateImage);
