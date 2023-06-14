import axios from 'axios';

export async function getNews() {
  const options = {
    method: 'GET',
    url: 'https://lgbtq-world-news-live.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Key': '0e6cd512b4msh7adad42bb3ac2e4p1744ccjsn90f2d2093d8d',
      'X-RapidAPI-Host': 'lgbtq-world-news-live.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
