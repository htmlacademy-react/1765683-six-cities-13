import { TOffers } from './../types/offers';
import { createReducer } from '@reduxjs/toolkit';
import { selectCity, setOffers, setPlacesSortType } from './actions';

import { offers } from '../mocks/offers';

export type InitialStateType = {
  currentCity: string | undefined;
  offers: TOffers;
  currentSortType: string;
};

const initialState: InitialStateType = {
  currentCity: 'Paris',
  offers: offers,
  currentSortType: 'Popular',
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
    });
});
