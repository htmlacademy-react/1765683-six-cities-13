import { TOffers } from './../../types/offers';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getNearbyOffers = (state: State): TOffers | null =>
  state[NameSpace.NearbyOffers].nearbyOffers;
