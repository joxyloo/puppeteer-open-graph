import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../App.css';

export default function Article() {
  const location = useLocation();
  const articleId = location.pathname.split('/')[1];
  const domain = process.env.REACT_APP_SERVER_DOMAIN;

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [img, setImg] = useState(null);

  useEffect(() => {
    async function getArticle() {
      const res = await fetch(`${domain}/blog-pages/${articleId}`);
      const data = await res.json();
      const article = data.article;
      setArticle(article);
      setIsLoading(false);

      var img = `${domain}/og-image?title=${article.title}&description=${article.description}&img=${article.img}`;
      img = encodeURI(img);
      setImg(img);
    }

    getArticle();
  }, []);

  if (!isLoading) {
    return (
      <div className='article'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{article.title}</title>
          <meta name='description' content={article.description}></meta>
          <meta property='og:type' content='website'></meta>
          <meta name='og:title' content={article.title}></meta>
          <meta name='og:description' content={article.description}></meta>
          <meta property='og:image' content={img} />
          <meta property='og:image:width' content="1200" />
          <meta property='og:image:height' content="630" />
          <meta name='twitter:card' content='summary_large_image'></meta>
          <meta name='twitter:title' content={article.title}></meta>
          <meta name='twitter:description' content={article.description}></meta>
          <meta name='twitter:image' content={img}></meta>
        </Helmet>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <img className='article-img' src={article.img} alt='' />
        <div className='article-body'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel sed eius ea rem. Nihil dolorem amet ipsum ad doloremque, quaerat
            ex porro maxime et. Magnam temporibus quos nam nostrum quisquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Suscipit, autem! Accusantium magni et dignissimos! Ullam dignissimos vitae pariatur dicta, doloremque maxime fuga provident
            labore autem vero illo ex officia reiciendis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita commodi eius quia quidem ea, nulla minima id esse aspernatur,
            voluptatum ipsam iure corrupti nihil fuga reiciendis dicta. Pariatur, unde illum! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Reiciendis quis modi dolor numquam tenetur, nihil fuga architecto placeat incidunt soluta cum praesentium
            nulla consectetur ab aspernatur ullam totam iure consequuntur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quod modi voluptatibus beatae, inventore vero, cupiditate cumque
            nostrum facilis ratione commodi magnam? Doloribus, eius facere quidem eos magnam nesciunt <earum className='lorem'></earum>
          </p>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
