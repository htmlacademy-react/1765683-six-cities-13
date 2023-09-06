import { FormEvent, useState } from 'react';
import { ChangeEvent } from 'react';
import { CommentLength } from '../../const';
import Rating from '../rating/rating';
import { useAppSelector } from '../../hooks/use-select';
import { useAppDispatch } from '../../hooks/use-dispatch';
import { postComment } from '../../store/api-actions';
import { getActiveId } from '../../store/offer-process/selectors';
import { getCommentPostStatus } from '../../store/comments-process/selectors';

export function ReviewForm() {
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState(localStorage.getItem('review') || '');
  const [rating, setRating] = useState(localStorage.getItem('rating') || '');

  const offerId = useAppSelector(getActiveId);
  const isCommentPosting = useAppSelector(getCommentPostStatus);

  const isValid =
    comment.length >= CommentLength.Min &&
    comment.length <= CommentLength.Max &&
    rating !== '' &&
    !isCommentPosting;

  const resetForm = () => {
    setComment('');
    setRating('0');
    localStorage.removeItem('review');
    localStorage.removeItem('rating');
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (offerId !== null && isValid) {
      dispatch(
        postComment({
          id: offerId,
          comment: comment,
          rating: Number(rating),
          resetForm: resetForm,
        })
      );
    }
  };


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
      <Rating
        rating={rating}
        commentPostingStatus={isCommentPosting}
        handleInputTypeChange={handleInputChange}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleTextareaChange}
        disabled={isCommentPosting}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">{CommentLength.Min} characters</b>
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
