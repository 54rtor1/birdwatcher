import React, { useEffect, useState } from 'react';
import { getNews } from '../api/news';
import CardGrid from '../components/CardGrid';

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNews();
        setNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <CardGrid news={news} />
    </div>
  );
}
