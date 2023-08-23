import { userProcessSlice } from './user-process/user-process';
import { offersProcessSlice } from './offer-process/offer-process';
import { nearbyOffersProcessSlice } from './nearby-offers-process/nearby-offers-process';
import { commentsProcessSlice } from './comments-process/comment-process';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [userProcessSlice.name]: userProcessSlice.reducer,
  [offersProcessSlice.name]: offersProcessSlice.reducer,
  [nearbyOffersProcessSlice.name]: nearbyOffersProcessSlice.reducer,
  [commentsProcessSlice.name]: commentsProcessSlice.reducer,
});
