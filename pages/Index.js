import React, { useEffect, useContext } from 'react';
import { getNews } from '../api/news';
import CardGrid from '../components/CardGrid';
import { NewsContext } from '../contexts/NewsContext';

export default function Home() {
  const { setNewsData } = useContext(NewsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNews();
        setNewsData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setNewsData]);

  return (
    <div>
      <CardGrid />
    </div>
  );
}
