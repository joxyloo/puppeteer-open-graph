A demo for [How to Make a Custom Open Graph Image Using Puppeteer](https://www.bannerbear.com/blog/how-to-make-a-custom-open-graph-image-using-puppeteer).<br/><br/>

![Twiiter OG image](twitter-og-preview.png)

<br/>

**Run the backend server locally** 👇🏻<br/><br/>
Run `node server/index.js` or `nodemon server/index.js` for hot reloading in the terminal/command line. <br/>

Send a sample `GET` request to generate an image.
```
http://localhost:8000/og-image?title=Test%20Title&description=Test%20Description&img=https://images.unsplash.com/photo-1492619193369-af2352531443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80
```
