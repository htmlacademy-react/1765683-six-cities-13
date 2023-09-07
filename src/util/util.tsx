import dayjs from 'dayjs';
import { CITY_NAMES } from '../const';

export function humanizeDateFromDate(date: string) {
  return date ? dayjs(date).format('MMMM YYYY') : '';
}

export function getRandomCity() {
  const cities = Object.values(CITY_NAMES);

  const randomIndex = Math.floor(Math.random() * cities.length);

  return cities[randomIndex];
}
