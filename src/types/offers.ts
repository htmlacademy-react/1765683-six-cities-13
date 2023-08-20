import { OfferTypes } from '../const';
import { TCity, TLocation } from './city';

export type TOfferType = (typeof OfferTypes)[keyof typeof OfferTypes];

export type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TOffer = {
  id: string;
  title: string;
  type: TOfferType;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type TDetails = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
};

export type TDetailedOffer = TOffer & TDetails;

export type TOffers = TOffer[];

export type TOfferActiveCard = string;
