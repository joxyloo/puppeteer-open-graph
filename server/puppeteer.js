const template = require('./template');
const puppeteer = require('puppeteer');

exports.generateImage = async function (req, res) {

  const { title, description, img } = await req.query;

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 630 });

  await page.setContent(template.getHtml(title, description, img));

  const image = await page.screenshot({ type: 'jpeg' });

  res.statusCode = 200;
  res.setHeader('Content-Type', `image/jpeg`);
  res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
  res.end(image);
};
