import { endpoints } from '@/utils/config';

export const starsMarketPrice = async () => {
  try {
    const data = await fetch(endpoints.price_stars);
    const json = await data.json();
    return json[0].price.toFixed(4);;
  } catch (error) {
    console.log('Error: ' + error);
  }
};