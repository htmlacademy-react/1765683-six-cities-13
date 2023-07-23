import { OfferTypes } from '../const';
import { TLocation } from './full-offer';
import { TCity } from './full-offer';

export type TOfferType = typeof OfferTypes[keyof typeof OfferTypes];


export type TOffer = {
  id: string;
  title: string;
  type: TOfferType;
  price: number;
  previewImage: string;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type TOffers = TOffer[];
