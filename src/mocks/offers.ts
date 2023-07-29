import { OfferTypes } from '../const';
import { TOffers } from '../types/offers';

export const offers: TOffers = [
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious studio at great location',
    type: OfferTypes.Apartment,
    price: 120,
    previewImage: 'img/apartment-01.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.2,
  },

  {
    id: crypto.randomUUID(),
    title: 'Wood and stone place',
    type: OfferTypes.PrivateRoom,
    price: 80,
    previewImage: 'img/apartment-02.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2,
  },

  {
    id: crypto.randomUUID(),
    title: 'Nice, cozy, warm big bed apartment',
    type: OfferTypes.Apartment,
    price: 180,
    previewImage: 'img/apartment-03.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.6,
  },

  {
    id: crypto.randomUUID(),
    title: 'Canal View Prinsengracht',
    type: OfferTypes.Apartment,
    price: 132,
    previewImage: 'img/apartment-03.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.1,
  },
];
