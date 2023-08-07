import { createAction } from '@reduxjs/toolkit';
import { TOffers } from '../types/offers';

export const selectCity = createAction(
  'main/selectCity',
  (city: string | undefined) => ({ payload: city })
);

export const loadOffers = createAction('main/loadOffers', (offers: TOffers) => ({payload: offers}));

export const setPlacesSortType = createAction('main/setPlacesSortType', (sortType: string) => ({payload: sortType}));
