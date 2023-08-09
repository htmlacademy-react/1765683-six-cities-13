import { createAction } from '@reduxjs/toolkit';
import { TDetailedOffer, TOffers } from '../types/offers';
import { AuthorizationStatus } from '../const';

export const selectCity = createAction(
  'main/selectCity',
  (city: string | undefined) => ({ payload: city })
);

export const setOffers = createAction<TOffers>('main/setOffers');

export const setPlacesSortType = createAction<string>('main/setPlacesSortType');

export const loadOffers = createAction<TOffers>('data/loadOffers');

export const loadDetailedOffer = createAction<TDetailedOffer>(
  'data/loadDetailedOffer'
);

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const sortOffersLowToHigh = createAction('sortOffersLowToHigh');

export const sortOffersHightToLow = createAction('sortOffersHighToLow');

export const sortOffersByTopRated = createAction('sortOffersByTopRated');
