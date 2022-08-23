const pages = [
  {
    title: 'How to Merge Video Files Using FFmpeg',
    description:
      'The demand for video editing is increasing with the growing number of video viewers. This article shows you how to merge video files for free using the FFmpeg command line editor.',
    img: 'https://images.unsplash.com/photo-1492619193369-af2352531443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80',
    id: 'how-to-merge-video-files-using-ffmpeg',
  },
  {
    title: 'How to Add Subtitles to a Video File Using FFmpeg',
    description: 'In this tutorial, we are going to use FFmpeg to add Hard Subtitles and Soft Subtitles to a video file.',
    img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    id: 'how-to-add-subtitles-to-a-video-with-ffmpeg',
  },
  {
    title: 'How to Add a Dynamic Watermark to Puppeteer Screenshots Using Bannerbear',
    description:
      'Adding a dynamic watermark with extra information to similar screenshots can help you to manage them easier. This tutorial shows you how to do it with Bannerbear.',
    img: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1316&q=80',
    id: 'how-to-add-a-dynamic-watermark-to-puppeteer-screenshots-using-bannerbear',
  },
];

exports.getPages = function (req, res) {
  res.send(JSON.stringify({ pages }));
};

exports.getArticle = function (req, res) {
  const article = pages.find((x) => x.id === req.params.articleId);
  res.send(JSON.stringify({ article }));
};
