import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITY_MAP, NameSpace, SortTypes } from '../../const';
import { TDetailedOffer, TOffers } from './../../types/offers';
import { TCity } from '../../types/city';

type OffersProcessType = {
  currentCity: TCity;
  activeId: string | null;
  currentSortType: string;
  offers: TOffers;
  favoriteOffers: TOffers;
  detailedOffer: TDetailedOffer | null;
  isOffersLoading: boolean;
};

const initialState: OffersProcessType = {
  currentCity: CITY_MAP.Paris,
  activeId: null,
  currentSortType: SortTypes.Popular,
  offers: [],
  favoriteOffers: [],
  detailedOffer: null,
  isOffersLoading: false,
};

export const offersProcessSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCitySelect: (state, action: PayloadAction<TCity>) => {
      state.currentCity = action.payload;
    },
    setActiveId: (state, action: PayloadAction<string | null>) => {
      state.activeId = action.payload;
    },
    setPlacesSortType: (state, action: PayloadAction<string>) => {
      state.currentSortType = action.payload;
    },
    setOffers: (state, action: PayloadAction<TOffers>) => {
      state.offers = action.payload;
    },
    setDetailedOffer: (state, action: PayloadAction<TDetailedOffer | null>) => {
      state.detailedOffer = action.payload;
    },
    setOffersLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isOffersLoading = action.payload;
    },
    setFavoriteOffers: (state, action: PayloadAction<TOffers>) => {
      state.favoriteOffers = action.payload;
    },
  },
});

export const {
  setCitySelect,
  setActiveId,
  setPlacesSortType,
  setOffers,
  setDetailedOffer,
  setOffersLoadingStatus,
  setFavoriteOffers,
} = offersProcessSlice.actions;