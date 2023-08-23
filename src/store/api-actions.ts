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
import { setDetailedOffer, setFavoriteOffers, setOffers, setOffersLoadingStatus } from './offer-process/offer-process.js';
import { setUserData } from './user-process/user-process.js';
import { setCommentPostStatus, setReviews } from './comments-process/comment-process.js';
import { setNearbyOffers } from './nearby-offers-process/nearby-offers-process.js';

type thunkObjType = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchOffers = createAsyncThunk<void, undefined, thunkObjType>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersLoadingStatus(true));
    const { data } = await api.get<TOffers>(APIRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(setOffers(data));
  }
);

export const fetchOffer = createAsyncThunk<
  void,
  { id: string | undefined },
  thunkObjType
>('fetchOffer', async ({ id }, { dispatch, extra: api }) => {
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
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, thunkObjType>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();

  }
);

export const fetchReviews = createAsyncThunk<
  void,
  { id: string | undefined },
  thunkObjType
>('fetchReviews', async ({ id }, { dispatch, extra: api }) => {
  const url = id !== undefined ? `${APIRoute.Comments}/${id}` : '';
  const { data } = await api.get<TReviews>(url);
  dispatch(setReviews(data));
});

export const fetchNearbyOffers = createAsyncThunk<
  void,
  { id: string | undefined },
  thunkObjType
>('fetchNearbyOffers', async ({ id }, { dispatch, extra: api }) => {
  dispatch(setOffersLoadingStatus(true));
  const url = id !== undefined ? `${APIRoute.Offers}/${id}/nearby` : '';
  const { data } = await api.get<TOffers>(url);
  dispatch(setOffersLoadingStatus(true));
  dispatch(setNearbyOffers(data));
});

export const fetchFavorites = createAsyncThunk<void, undefined, thunkObjType>(
  'fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TOffers>(APIRoute.Favorites);
    dispatch(setFavoriteOffers(data));
  }
);

export const postComment = createAsyncThunk<void, TAddReview, thunkObjType>(
  'comment',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    dispatch(setCommentPostStatus(true));
    const url = `${APIRoute.Comments}/${id}`;
    await api.post<TAddReview>(url, { comment, rating });
    dispatch(setCommentPostStatus(false));
  }
);
