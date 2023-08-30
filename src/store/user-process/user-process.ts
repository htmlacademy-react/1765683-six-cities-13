import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  loginAction,
  logoutAction,
  checkAuthAction,
} from '../api-actions';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserData } from '../../types/user-data';

type UserProcessType = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export const initialState: UserProcessType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const userProcessSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const { setUserData } = userProcessSlice.actions;
