import axios from 'axios';
import seedData from './seeds.json';

export async function getNews() {
  // const options = {
  //   method: 'GET',
  //   url: 'https://api.worldnewsapi.com/search-news?api-key=d386d30dbd874b188b225b8c1cd4e8c1&text=birds wildlife nature -flu&min-sentimen=0,35&number=80',
  // };

  // try {
  //   const response = await axios.request(options);
  //   console.log(response.data);
  //   return response.data.news;
  // } catch (error) {
  //   console.error(error);
  //   throw error;
  // }
  try {
    // Simulate API response with seed data
    const response = {
      data: seedData
    };

    console.log(response.data);
    return response.data.news;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
