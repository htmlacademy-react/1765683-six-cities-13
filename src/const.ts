export const Settings = {
  Offers: 5,
  Auth: true,
  NoAuth: false,
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer'
}

export enum OfferTypes {
  PrivateRoom = 'private room',
  Apartment = 'apartment',
}

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 140;
