import { createAction } from '@reduxjs/toolkit';
import { TDetailedOffer, TOffers } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { TReviews } from '../types/review';

export const selectCity = createAction<string | undefined>('selectCity');

export const setOffers = createAction<TOffers>('main/setOffers');

export const setPlacesSortType = createAction<string>('main/setPlacesSortType');

export const loadOffers = createAction<TOffers>('data/loadOffers');

export const loadDetailedOffer = createAction<TDetailedOffer>(
  'data/loadDetailedOffer'
);

export const loadReviews = createAction<TReviews>('data/loadReviews');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const sortOffersLowToHigh = createAction('sortOffersLowToHigh');

export const sortOffersHightToLow = createAction('sortOffersHighToLow');

export const sortOffersByTopRated = createAction('sortOffersByTopRated');

export const loadNearbyOffers = createAction<TOffers>('data/loadNearbyOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');
