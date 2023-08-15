import { TDetailedOffer, TOffers } from './../types/offers';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import {
  requireAuthorization,
  loadOffers,
  loadDetailedOffer,
  loadReviews,
  loadNearbyOffers,
  setOffersDataLoadingStatus,
  setOfferDataLoadingStatus,
  loadFavorites,
  redirectToRoute,
} from './actions.js';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { TReviews } from '../types/review.js';

type thunkObjType = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchOffers = createAsyncThunk<void, undefined, thunkObjType>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<TOffers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const fetchOffer = createAsyncThunk<
  void,
  { id: string | undefined },
  thunkObjType
>('fetchOffer', async ({ id }, { dispatch, extra: api }) => {
  dispatch(setOfferDataLoadingStatus(true));
  const url = id !== undefined ? `${APIRoute.Offers}/${id}` : '';
  const { data } = await api.get<TDetailedOffer>(url);
  dispatch(setOfferDataLoadingStatus(false));
  dispatch(loadDetailedOffer(data));
});

export const checkAuthAction = createAsyncThunk<void, undefined, thunkObjType>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, thunkObjType>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, thunkObjType>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);

export const fetchReviews = createAsyncThunk<
  void,
  { id: string | undefined },
  thunkObjType
>('fetchReviews', async ({ id }, { dispatch, extra: api }) => {
  const url = id !== undefined ? `${APIRoute.Comments}/${id}` : '';
  const { data } = await api.get<TReviews>(url);
  dispatch(loadReviews(data));
});

export const fetchNearbyOffers = createAsyncThunk<
  void,
  { id: string | undefined },
  thunkObjType
>('fetchNearbyOffers', async ({ id }, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const url = id !== undefined ? `${APIRoute.Offers}/${id}/nearby` : '';
  const { data } = await api.get<TOffers>(url);
  dispatch(setOffersDataLoadingStatus(true));
  dispatch(loadNearbyOffers(data));
});

export const fetchFavorites = createAsyncThunk<void, undefined, thunkObjType>(
  'fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TOffers>(APIRoute.Favorites);
    dispatch(loadFavorites(data));
  }
);
