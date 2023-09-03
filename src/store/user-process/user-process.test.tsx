import { userProcessSlice, initialState } from './user-process';
import { AuthorizationStatus } from '../../const';
import { internet } from 'faker';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

describe('Users Process Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const result = userProcessSlice.reducer(initialState, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };

    const result = userProcessSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should set active city', () => {
    const userData = {
      id: 123,
      avatarUrl: internet.avatar(),
      email: internet.email(),
      token: internet.password(),
    };

    const action = userProcessSlice.actions.setUserData(userData);

    const result = userProcessSlice.reducer(initialState, action);

    const expectedState = {
      ...initialState,
      userData,
    };

    expect(result).toEqual(expectedState);
  });

  it('should set AuthStatus to "Auth" when checkAuth.fulfilled', () => {
    const expectedState = {
      ...initialState,
      authorizationStatus: AuthorizationStatus.Auth,
    };

    const result = userProcessSlice.reducer(
      undefined,
      checkAuthAction.fulfilled
    );

    expect(result).toEqual(expectedState);
  });

  it('should set AuthStatus to "NoAuth" when checkAuth.rejected', () => {
    const expectedState = {
      ...initialState,
      authorizationStatus: AuthorizationStatus.NoAuth,
    };

    const result = userProcessSlice.reducer(
      undefined,
      checkAuthAction.rejected
    );

    expect(result).toEqual(expectedState);
  });

  it('should set AuthStatus to "Auth" when login.fulfilled', () => {
    const expectedState = {
      ...initialState,
      authorizationStatus: AuthorizationStatus.Auth,
    };

    const result = userProcessSlice.reducer(undefined, loginAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set AuthStatus to "NoAuth" when login.rejected', () => {
    const expectedState = {
      ...initialState,
      authorizationStatus: AuthorizationStatus.NoAuth,
    };

    const result = userProcessSlice.reducer(undefined, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set AuthStatus to "NoAuth" when logout.fulfilled', () => {
    const expectedState = {
      ...initialState,
      authorizationStatus: AuthorizationStatus.NoAuth,
    };

    const result = userProcessSlice.reducer(undefined, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
