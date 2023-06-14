import { useEffect, useState } from 'react';
import { getNews } from '../api/news';

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNews();
        console.log(data)
        setNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // return (
  //   // <div>
  //   //   <h1>News Page</h1>
  //   // </div>
  // );
}
