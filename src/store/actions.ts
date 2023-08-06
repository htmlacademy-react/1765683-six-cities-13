import { createAction } from '@reduxjs/toolkit';

export const selectCity = createAction(
  'main/selectCity',
  (city: string | undefined) => ({ payload: city })
);

export const loadOffers = createAction('main/loadOffers');
