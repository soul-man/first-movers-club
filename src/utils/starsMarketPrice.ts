import axios from 'axios';
import { endpoints } from '@/utils/config';

export const starsMarketPrice = async () => {
  try {
    let config = {
      headers: {
        api_key: process.env.FM_API_KEY,
      }
    }
    const url = endpoints.price_stars;
    const price = await axios.get(url, config);
    return price.data;
  } catch (error) {
    console.log('Error: ' + error);
  }
};
