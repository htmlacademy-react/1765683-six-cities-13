import { createAction } from '@reduxjs/toolkit';
import { TDetailedOffer, TOffers } from '../types/offers';
import { AppRoute, AuthorizationStatus } from '../const';
import { TReview, TReviews } from '../types/review';
import { TCity } from '../types/city';

export const selectCity = createAction<TCity>('selectCity');

export const setOffers = createAction<TOffers>('main/setOffers');

export const setPlacesSortType = createAction<string>('main/setPlacesSortType');

export const loadOffers = createAction<TOffers>('data/loadOffers');

export const loadFavorites = createAction<TOffers>('data/loadFavorites');

export const loadDetailedOffer = createAction<TDetailedOffer>(
  'data/loadDetailedOffer'
);

export const loadReviews = createAction<TReviews>('data/loadReviews');

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const sortOffersLowToHigh = createAction('sortOffersLowToHigh');

export const sortOffersHightToLow = createAction('sortOffersHighToLow');

export const sortOffersByTopRated = createAction('sortOffersByTopRated');

export const loadNearbyOffers = createAction<TOffers>('data/loadNearbyOffers');

export const setOffersDataLoadingStatus = createAction<boolean>(
  'data/setOffersDataLoadingStatus'
);

export const setOfferDataLoadingStatus = createAction<boolean>(
  'data/setOfferDataLoadingStatus'
);

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');

export const addReview = createAction<TReview>('user/submitReview');
