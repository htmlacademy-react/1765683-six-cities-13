export type TReview = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: TUser;
};

export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TReviews = TReview[];
