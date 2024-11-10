import { endpoints } from '@/utils/config';
import axios from 'axios';

export const starsMarketPrice = async () => {
  try {

    const response = await axios.get('https://min-api.cryptocompare.com/data/price?fsym=STARS&tsyms=USD');
    const data = response.data.USD.toFixed(4);
    return data;

  } catch (error) {
    console.log('Error: ' + error);
  }
};