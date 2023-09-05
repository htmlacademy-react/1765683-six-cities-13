import { Fragment, ChangeEventHandler } from 'react';
import { ratingMap } from '../../const';

type RatingProgs = {
  rating: string;
  handleInputTypeChange: ChangeEventHandler<HTMLInputElement>;
  commentPostingStatus: boolean;

};

function Rating({
  rating,
  commentPostingStatus,
  handleInputTypeChange,
}: RatingProgs): JSX.Element {


  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(ratingMap)
        .reverse()
        .map(([score, title]) => (
          <Fragment key={score}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={score}
              id={`${score}-stars`}
              type="radio"
              checked={rating === score}
              onChange={handleInputTypeChange}
              disabled={commentPostingStatus}
            />
            <label
              htmlFor={`${score}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
    </div>
  );
}

export default Rating;
