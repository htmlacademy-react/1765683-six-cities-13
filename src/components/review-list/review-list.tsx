import Review from '../review/review';

import { TReviews } from '../../types/review';
import { MAX_REVIEWS_LENGTH } from '../../const';

type ReviewProps = {
  reviews: TReviews;
};


function ReviewList({ reviews }: ReviewProps): JSX.Element {

  if (reviews === null) {
    return <p> Comment list is empty </p>;
  }

  return (
    <ul className="reviews__list">
      {reviews.slice(0, MAX_REVIEWS_LENGTH).reverse().map((review, id) => {
        const keyValue = `${id}-review`;
        return <Review key={keyValue} review={review} />;
      })}
    </ul>
  );
}

export default ReviewList;
