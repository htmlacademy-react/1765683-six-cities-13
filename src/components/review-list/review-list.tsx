import Review from '../review/review';
import Error from '../error/error';
import { TReviews } from '../../types/review';

type ReviewProps = {
  reviews: TReviews;
};

function ReviewList({ reviews }: ReviewProps): JSX.Element {
  if (reviews === null) {
    return <Error />;
  }
  return (
    <ul className="reviews__list">
      {reviews.map((review, id) => {
        const keyValue = `${id}-review`;
        return <Review key={keyValue} review={review} />;
      })}
    </ul>
  );
}

export default ReviewList;
