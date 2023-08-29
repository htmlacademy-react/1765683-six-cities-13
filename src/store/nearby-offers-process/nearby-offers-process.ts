import { TOffers } from './../../types/offers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

type NearbyOffersProcessType = {
  nearbyOffers: TOffers;
};

const initialState: NearbyOffersProcessType = {
  nearbyOffers: [],
};

export const nearbyOffersProcessSlice = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {
    setNearbyOffers: (state, action: PayloadAction<TOffers>) => {
      state.nearbyOffers = action.payload;
    },
  },
});

export const { setNearbyOffers } = nearbyOffersProcessSlice.actions;
