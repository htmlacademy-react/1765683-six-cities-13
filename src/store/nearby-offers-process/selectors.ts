import { TOffers } from './../../types/offers';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getNearbyOffers = (state: State): TOffers =>
  state[NameSpace.NearbyOffers].nearbyOffers.slice(0, 4);
