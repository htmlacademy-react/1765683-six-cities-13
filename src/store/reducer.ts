import { TDetailedOffer, TOffers } from './../types/offers';
import { createReducer } from '@reduxjs/toolkit';
import {
  selectCity,
  setOffers,
  setPlacesSortType,
  loadOffers,
  requireAuthorization,
  loadDetailedOffer,
  sortOffersLowToHigh,
  sortOffersHightToLow,
  sortOffersByTopRated,
  loadReviews,
  loadNearbyOffers,
  loadFavorites,
} from './actions';

import { AuthorizationStatus, CITY_MAP, CURRENT_SORT_TYPE, } from '../const';
import { TReviews } from '../types/review';
import { TCity } from '../types/city';

export type InitialStateType = {
  currentCity: TCity;
  offers: TOffers | null;
  nearbyOffers: TOffers | null;
  favorites: TOffers | null;
  reviews: TReviews | null;
  detailedOffer: TDetailedOffer | null;
  currentSortType: string;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialStateType = {
  currentCity: CITY_MAP.Paris ,
  offers: [],
  reviews: [],
  favorites: [],
  nearbyOffers: [],
  detailedOffer: null,
  currentSortType: CURRENT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setPlacesSortType, (state, action) => {
      state.currentSortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    }).addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadDetailedOffer, (state, action) => {
      state.detailedOffer = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(sortOffersLowToHigh, (state) => {
      if (state.offers === null) {
        return;
      }
      state.offers = state.offers.sort((a, b) => a.price - b.price);
    })
    .addCase(sortOffersHightToLow, (state) => {
      if (state.offers === null) {
        return;
      }
      state.offers = state.offers.sort((a, b) => b.price - a.price);
    })
    .addCase(sortOffersByTopRated, (state) => {
      if (state.offers === null) {
        return;
      }
      state.offers = state.offers.sort((a, b) => b.rating - a.rating);
    });
});
