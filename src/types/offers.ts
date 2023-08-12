import { OfferTypes } from '../const';

export type TOfferType = (typeof OfferTypes)[keyof typeof OfferTypes];

export type TCity = {
  name: string;
  location: TLocation;
};

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

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
  previewImage: string;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
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

export type FullOfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
};
