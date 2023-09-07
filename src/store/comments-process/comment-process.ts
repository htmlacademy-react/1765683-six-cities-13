import { TReview, TReviews } from './../../types/review';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

type CommentsProcessType = {
  reviews: TReviews;
  isCommentPosting: boolean;
};

export const initialState: CommentsProcessType = {
  reviews: [],
  isCommentPosting: false,
};

export const commentsProcessSlice = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {
    setReviews: (state, action: PayloadAction<TReviews>) => {
      state.reviews = action.payload;
    },
    updateReviews: (state, action: PayloadAction<TReview>) => {
      state.reviews = [...state.reviews, action.payload] as TReviews;
    },
    setCommentPostStatus: (state, action: PayloadAction<boolean>) => {
      state.isCommentPosting = action.payload;
    },
  },
});

export const { setReviews, updateReviews, setCommentPostStatus } =
  commentsProcessSlice.actions;
