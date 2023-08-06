import { TReviews } from '../types/review';

export const reviews: TReviews = [

  {
    id: crypto.randomUUID(),
    comment: 'I stayed here for two weeks with my family and quite satisfied.',
    date: '2023-07-22T23:00:00.146Z',
    rating: 4,
    user: {
      name: 'Nick',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/5.jpg',
      isPro: true
    }
  },
  {
    id: crypto.randomUUID(),
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-07-21T21:00:00.236Z',
    rating: 5,
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/10.jpg',
      isPro: false
    }
  }

];
