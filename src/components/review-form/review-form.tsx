import { FormEvent, useState } from 'react';
import { ChangeEvent } from 'react';
import { CommentLength} from '../../const';
import Rating from '../rating/rating';
import { useAppSelector } from '../../hooks/use-select';
import { useAppDispatch } from '../../hooks/use-dispatch';
import { postComment } from '../../store/api-actions';
import { getActiveId } from '../../store/offer-process/selectors';
import { getCommentPostStatus } from '../../store/comments-process/selectors';

export function ReviewForm() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const offerId = useAppSelector(getActiveId);
  const dispatch = useAppDispatch();
  const isCommentPosting = useAppSelector(getCommentPostStatus);

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (offerId !== null) {
      dispatch(
        postComment({
          id: offerId,
          comment: comment,
          rating: Number(rating),
        })
      );
    }
  };

  const isValid =
    comment.length >= CommentLength.Min &&
    comment.length <= CommentLength.Max &&
    rating !== '';

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <Rating rating={rating} handleInputTypeChange={handleInputChange} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleTextareaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {CommentLength.Min} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          {isCommentPosting ? 'Submit...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
