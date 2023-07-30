import Review from '../review/review';
import { TReviews } from '../../types/review';

type ReviewListProps = {
  reviews: TReviews;
};

const ReviewList = ({ reviews }: ReviewListProps): JSX.Element => (
  <ul className="reviews__list">
    {reviews.map((review, id) => {
      const keyValue = `${id}-review`;
      return <Review key={keyValue} review={review} />;
    })}
  </ul>
);

export default ReviewList;
