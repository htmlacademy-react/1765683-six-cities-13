import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
export const getUserEmail = (state: State): string | undefined =>
  state[NameSpace.User].userData?.email;
export const getUserAvatar = (state: State): string | undefined =>
  state[NameSpace.User].userData?.avatarUrl;
