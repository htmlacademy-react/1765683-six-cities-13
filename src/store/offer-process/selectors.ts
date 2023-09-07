import { TOffers, TDetailedOffer } from './../../types/offers';
import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { TCity } from '../../types/city';

export const getCurrentCity = (state: State): TCity =>
  state[NameSpace.Offers].currentCity;
export const getActiveId = (state: State): string | null =>
  state[NameSpace.Offers].activeId;
export const getCurrentSortType = (state: State): string =>
  state[NameSpace.Offers].currentSortType;
export const getOffers = (state: State): TOffers =>
  state[NameSpace.Offers].offers;
export const getDetailedOffer = (state: State): TDetailedOffer | null =>
  state[NameSpace.Offers].detailedOffer;
export const getFavOffers = (state: State): TOffers =>
  state[NameSpace.Offers].favoriteOffers;
export const getOffersLoadingStatus = (state: State): boolean =>
  state[NameSpace.Offers].isOffersLoading;
export const getFavoriteOffersCount = (state: State): number =>
  state[NameSpace.Offers].favoriteOffers.length;
export const getFavoriteOffersLoadingStatus = (state: State): boolean =>
  state[NameSpace.Offers].isFavOffersLoading;
