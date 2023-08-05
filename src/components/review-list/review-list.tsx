import Review from '../review/review';
import { TReviews } from '../../types/review';

type ReviewListProps = {
  reviews: TReviews;
};

const ReviewList = ({ reviews }: ReviewListProps): JSX.Element => (
  <ul className="reviews__list">
    {reviews.map((review) => (<Review key={review.id} review={review} />))}
  </ul>
);

export default ReviewList;
