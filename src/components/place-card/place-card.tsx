import { TOffer } from '../../types/offers';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import classNames from 'classnames';
import { memo, useState } from 'react';
import { useAppDispatch } from '../../hooks/use-dispatch';
import { changeFavoriteStatus } from '../../store/api-actions';
import { redirectToRoute } from '../../store/actions';
import { getAuthStatus } from '../../store/user-process/selectors';
import { useAppSelector } from '../../hooks/use-select';

type TPlaceCardProps = {
  offer: TOffer;
  onMouseHoverHandle: (id: string) => void;
};

function PlaceCardComponent({
  offer,
  onMouseHoverHandle,
}: TPlaceCardProps): JSX.Element {
  const { id, title, price, type, rating, isPremium, isFavorite } = offer;
  const [isFav, setIsFav] = useState(isFavorite);

  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  const setFavoriteStatus = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Login));
    }
    try {
      dispatch(
        changeFavoriteStatus({
          id,
          status: isFav ? 0 : 1,
        })
      );
    } finally {
      setIsFav(!isFav);
    }
  };

  const handleClick = () => {
    setFavoriteStatus();
  };

  return (
    <article
      className="cities__card place-card"
      key={offer.id}
      id={id}
      onMouseMove={() => onMouseHoverHandle(id)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classNames(
              {
                'place-card__bookmark-button--active': isFav,
                'place-card__bookmark-button': !isFav,
              },
              'button'
            )}
            type="button"
            onClick={handleClick}
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(rating * 20).toString()}%` }}></span>
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

export const PlaceCard = memo(PlaceCardComponent);
