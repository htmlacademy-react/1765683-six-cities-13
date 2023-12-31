import { TCity } from './types/city';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*',
}

export enum OfferTypes {
  PrivateRoom = 'private room',
  Apartment = 'apartment',
}

export enum CommentLength {
  Min = 50,
  Max = 300,
}

export const ratingMap = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
};

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const TITLE_LAYER_URL =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const OPEN_STREET_MAP =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export enum CITY_NAMES {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const CITY_MAP: Record<CITY_NAMES, TCity> = {
  [CITY_NAMES.Paris]: {
    name: CITY_NAMES.Paris,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  [CITY_NAMES.Cologne]: {
    name: CITY_NAMES.Cologne,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  [CITY_NAMES.Brussels]: {
    name: CITY_NAMES.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  [CITY_NAMES.Amsterdam]: {
    name: CITY_NAMES.Amsterdam,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  [CITY_NAMES.Hamburg]: {
    name: CITY_NAMES.Hamburg,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  [CITY_NAMES.Dusseldorf]: {
    name: CITY_NAMES.Dusseldorf,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
} as const;

export const SORT_TYPES = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum APIRoute {
  Offers = '/offers',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite',
}

export enum SortTypes {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const NameSpace = {
  Comments: 'COMMENTS',
  NearbyOffers: 'NEARBY_OFFERS',
  Offers: 'OFFERS',
  User: 'USER',
} as const;

export const MAX_REVIEWS_LENGTH = 10;

export const NEARBY_MAX_AMOUNT = 3;

export const OFFERS_DECLINATION_COUNT = 1;

export const RATING_MULTIPLIER = 0.05;

export const OFFER_IMG_COUNT = 6;
