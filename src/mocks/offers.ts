import { OfferTypes } from '../const';
export const offers = [
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious studio at great location',
    type: OfferTypes.Apartment,
    price: 120,
    previewImage: 'https://13.design.pages.academy/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
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
    previewImage: 'https://13.design.pages.academy/static/hotel/6.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
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
    previewImage: 'https://13.design.pages.academy/static/hotel/9.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
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
    previewImage: 'https://13.design.pages.academy/static/hotel/4.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.1,
  },
];
