import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [pages, setPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    async function getPages() {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/blog-pages`);
      const data = await res.json();
      setPages(data.pages);
      setIsLoading(false);
    }

    getPages();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {!isLoading &&
        pages.map((article) => {
          return (
            <div>
              <Link to={article.id}>{article.title}</Link>
            </div>
          );
        })}
    </div>
  );
}
