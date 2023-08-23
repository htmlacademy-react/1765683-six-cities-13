import { TReviews } from './../../types/review';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

type CommentsProcessType = {
  reviews: TReviews | null;
  isCommentPosting: boolean;
};

const initialState: CommentsProcessType = {
  reviews: null,
  isCommentPosting: false,
};

export const commentsProcessSlice = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {
    setReviews: (state, action: PayloadAction<TReviews>) => {
      state.reviews = action.payload;
    },
    setCommentPostStatus: (state, action: PayloadAction<boolean>) => {
      state.isCommentPosting = action.payload;
    },
  },
});

export const { setReviews, setCommentPostStatus } =
  commentsProcessSlice.actions;
