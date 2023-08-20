import { TDetailedOffer, TOffers } from './../types/offers';
import { createReducer } from '@reduxjs/toolkit';
import {
  selectCity,
  setOffers,
  setPlacesSortType,
  loadOffers,
  requireAuthorization,
  loadDetailedOffer,
  loadReviews,
  loadNearbyOffers,
  loadFavorites,
  setActiveId,
  setCommentPostStatus,
} from './actions';

import { AuthorizationStatus, CITY_MAP, SortTypes } from '../const';
import { TReviews } from '../types/review';
import { TCity } from '../types/city';

export type InitialStateType = {
  currentCity: TCity;
  offers: TOffers;
  nearbyOffers: TOffers | null;
  activeId: string | null;
  favorites: TOffers | null;
  reviews: TReviews;
  detailedOffer: TDetailedOffer | null;
  currentSortType: string;
  authorizationStatus: AuthorizationStatus;
  isCommentPosting: boolean;
};

const initialState: InitialStateType = {
  currentCity: CITY_MAP.Paris,
  offers: [],
  reviews: [],
  favorites: [],
  nearbyOffers: [],
  activeId: null,
  detailedOffer: null,
  currentSortType: SortTypes.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isCommentPosting: false,
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
    })
    .addCase(loadFavorites, (state, action) => {
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
    .addCase(setActiveId, (state, action) => {
      state.activeId = action.payload;
    })
    .addCase(setCommentPostStatus, (state, action) => {
      state.isCommentPosting = action.payload;
    });
});
