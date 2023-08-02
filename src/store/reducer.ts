import { TOffers } from './../types/offers';
import { createReducer } from '@reduxjs/toolkit';
import { selectCity } from './actions';
import { loadOffers } from './actions';
import { offers } from '../mocks/offers';

export type InitialStateType = {
  currentCity: string | undefined;
  offers: TOffers;
};

const initialState: InitialStateType = {
  currentCity: 'Paris',
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers, (state) => {
      state.offers = offers;
    });
});
