import { TOffer } from '../../types/offers';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { changeFavoriteStatus} from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-dispatch';
import classNames from 'classnames';

type FavoritePlaceCardType = {
  cardByCity: TOffer;
};

export function FavoritePlaceCard({ cardByCity }: FavoritePlaceCardType) {
  const {
    id,
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type,
    isFavorite,
  } = cardByCity;

  const dispatch = useAppDispatch();

  const setUnfavorite = () => {
    dispatch(
      changeFavoriteStatus({
        id,
        status: 0,
      })
    );
  };

  return (
    <article className="favorites__card place-card">
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classNames(
              {
                'place-card__bookmark-button--active': isFavorite,
              },
              'place-card__bookmark-button',
              'button'
            )}
            type="button"
            onClick={setUnfavorite}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </p>
      </div>
    </article>
  );
}
