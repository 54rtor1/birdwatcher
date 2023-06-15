import axios from 'axios';

export async function getNews() {
  const options = {
    method: 'GET',
    url: 'https://api.worldnewsapi.com/search-news?api-key=d386d30dbd874b188b225b8c1cd4e8c1&text=lgbt&min-sentimen=1https://api.worldnewsapi.com/search-news?api-key=d386d30dbd874b188b225b8c1cd4e8c1&text=lgbt&min-sentimen=1&number=40',
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.news);
    return response.data.news;
  } catch (error) {
    console.error(error);
  }
}
