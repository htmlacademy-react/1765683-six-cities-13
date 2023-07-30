import dayjs from 'dayjs';

export function humanizeDateFromDate(date: string) {
  return date ? dayjs(date).format('MMMM-YYYY') : '';
}
