import Review from '../review/review';
import { useAppSelector } from '../../hooks/use-select';
import Error from '../error/error';

export default ReviewList;

function ReviewList(): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);
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
