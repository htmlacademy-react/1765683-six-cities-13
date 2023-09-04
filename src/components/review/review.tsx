import { TReview } from '../../types/review';
import { humanizeDateFromDate } from '../../util/util';

type ReviewProps = {
  review: TReview;
};

function Review({ review }: ReviewProps): JSX.Element {
  const { user, id } = review;
  return (
    <li className="reviews__item" key={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span
              style={{ width: `${(review.rating * 20).toString()}%` }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={review.date}>
          {humanizeDateFromDate(review.date)}
        </time>
      </div>
    </li>
  );
}

export default Review;
