import React, { useEffect, useState } from 'react';
import { getNews } from '../api/news';
import CardGrid from '../components/CardGrid';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function Home() {
  const [news, setNews] = useState([]);
  const sampleNews = [
    { id: 1, title: 'News 1', content: 'This is news 1' },
    { id: 2, title: 'News 2', content: 'This is news 2' },
    { id: 3, title: 'News 3', content: 'This is news 3' }
  ];

  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   try {
  //   //     const data = await getNews();
  //   //     console.log(data);
  //   //     setNews(data);
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //   }
  //   // };

  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>Card Grid</h1>
      <CardGrid news={sampleNews} />
    </div>
  );
}
