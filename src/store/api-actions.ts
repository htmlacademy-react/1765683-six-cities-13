import { TDetailedOffer, TOffers } from './../types/offers';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { redirectToRoute } from './actions.js';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { TAddReview, TReviews } from '../types/review.js';
import {
  setDetailedOffer,
  setFavoriteOffers,
  setFavoriteOffersLoadingStatus,
  setOffers,
  setOffersLoadingStatus,
} from './offer-process/offer-process.js';
import { setUserData } from './user-process/user-process.js';
import {
  setCommentPostStatus,
  setReviews,
} from './comments-process/comment-process.js';
import { setNearbyOffers } from './nearby-offers-process/nearby-offers-process.js';
import { FavoriteData } from '../types/favorite-data.ts';

type thunkObjType = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchOffers = createAsyncThunk<void, undefined, thunkObjType>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(setOffersLoadingStatus(true));
      const { data } = await api.get<TOffers>(APIRoute.Offers);
      dispatch(setOffersLoadingStatus(false));
      dispatch(setOffers(data));
    } catch {
      dispatch(setOffersLoadingStatus(false));
    }
  }
);

export const fetchOffer = createAsyncThunk<
  void,
  { id: string | undefined },
  thunkObjType
>('data/fetchOffer', async ({ id }, { dispatch, extra: api }) => {
  dispatch(setOffersLoadingStatus(true));
  const url = id !== undefined ? `${APIRoute.Offers}/${id}` : '';
  const { data } = await api.get<TDetailedOffer>(url);
  dispatch(setOffersLoadingStatus(false));
  dispatch(setDetailedOffer(data));
});

export const checkAuthAction = createAsyncThunk<void, undefined, thunkObjType>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    dispatch(setUserData(data));
  }
);

export const loginAction = createAsyncThunk<void, AuthData, thunkObjType>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data,
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    dispatch(setUserData(data));
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(fetchOffers());
  }
);

export const logoutAction = createAsyncThunk<void, undefined, thunkObjType>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(fetchOffers());
  }
);

export const fetchReviews = createAsyncThunk<
  void,
  { id: string | undefined },
  thunkObjType
>('data/fetchReviews', async ({ id }, { dispatch, extra: api }) => {
  const url = id !== undefined ? `${APIRoute.Comments}/${id}` : '';
  const { data } = await api.get<TReviews>(url);
  dispatch(setReviews(data));
});

export const fetchNearbyOffers = createAsyncThunk<
  void,
  { id: string | undefined },
  thunkObjType
>('data/fetchNearbyOffers', async ({ id }, { dispatch, extra: api }) => {
  dispatch(setOffersLoadingStatus(true));
  const url = id !== undefined ? `${APIRoute.Offers}/${id}/nearby` : '';
  const { data } = await api.get<TOffers>(url);
  dispatch(setOffersLoadingStatus(false));
  dispatch(setNearbyOffers(data));
});

export const fetchFavorites = createAsyncThunk<void, undefined, thunkObjType>(
  'data/fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setFavoriteOffersLoadingStatus(true));
    const { data } = await api.get<TOffers>(APIRoute.Favorites);
    dispatch(setFavoriteOffers(data));
    dispatch(setFavoriteOffersLoadingStatus(false));
  }
);

export const postComment = createAsyncThunk<void, TAddReview, thunkObjType>(
  'user/comment',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    dispatch(setCommentPostStatus(true));
    const url = `${APIRoute.Comments}/${id}`;
    await api.post<TAddReview>(url, { comment, rating });
    dispatch(setCommentPostStatus(false));
  }
);

export const changeFavoriteStatus = createAsyncThunk<
  void,
  FavoriteData,
  thunkObjType
>(
  'offers/changeFavStatus',
  async ({ id, status }, { dispatch, extra: api }) => {
    const url = `${APIRoute.Favorites}/${id}/${status}`;
    await api.post(url);
    dispatch(fetchOffers());
    dispatch(fetchOffer({id}));
    dispatch(fetchFavorites());
  }
);
