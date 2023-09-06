import { HeaderLayout } from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import OfferImages from '../../components/offer-images/offer-images';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import OfferGoods from '../../components/offer-goods/offer-goods';
import OfferHost from '../../components/offer-host/offer-host';
import ReviewList from '../../components/review-list/review-list';
import ReviewForm from '../../components/review-form/review-form';
import { useAppSelector } from '../../hooks/use-select';
import { useEffect } from 'react';
import {
  changeFavoriteStatus,
  fetchNearbyOffers,
  fetchOffer,
} from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-dispatch';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import classNames from 'classnames';
import {
  getDetailedOffer,
  getOffers,
} from '../../store/offer-process/selectors';
import {
  getCommentPostStatus,
  getReviews,
} from '../../store/comments-process/selectors';
import { getNearbyOffers } from '../../store/nearby-offers-process/selectors';
import {
  AppRoute,
  AuthorizationStatus,
  NEARBY_MAX_AMOUNT,
  OFFERS_DECLINATION_COUNT,
  RATING_MULTIPLIER,
} from '../../const';
import { getAuthStatus } from '../../store/user-process/selectors';

function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const offerId = useParams().id;
  const authStatus = useAppSelector(getAuthStatus);
  const offers = useAppSelector(getOffers);
  const reviews = useAppSelector(getReviews);
  const detailedOffer = useAppSelector(getDetailedOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const nearbyUniqueOffers = nearbyOffers.filter(
    (offer) => offer.title !== detailedOffer?.title
  );
  const isIdExist = offers?.some((offer) => offer.id === offerId);
  const isCommentPosting = useAppSelector(getCommentPostStatus);

  const nearbyMapOffers = nearbyUniqueOffers.slice(0, NEARBY_MAX_AMOUNT);

  useEffect(() => {
    if (offerId === undefined) {
      return;
    }
    dispatch(fetchOffer({ id: offerId }));
  }, [offerId, isIdExist, dispatch, isCommentPosting]);

  if (
    offers === null ||
    reviews === null ||
    detailedOffer === null ||
    nearbyOffers === null
  ) {
    return <LoadingSpinner />;
  }

  const {
    bedrooms,
    id,
    city,
    description,
    goods,
    host,
    images,
    isFavorite,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type,
  } = detailedOffer;

  const handleFavoriteClick = () => {
    if (authStatus === AuthorizationStatus.NoAuth) {
      return navigate(AppRoute.Login);
    }
    dispatch(
      changeFavoriteStatus({
        id,
        status: isFavorite ? 0 : 1,
      })
    ).then(() => {
      dispatch(fetchNearbyOffers({ id: offerId }));
    });
  };

  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Offers'}</title>
      </Helmet>
      <HeaderLayout />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferImages images={images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>isPremium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button
                  className={classNames(
                    {
                      'offer__bookmark-button--active offer__bookmark-button':
                        isFavorite,
                    },
                    'offer__bookmark-button',
                    'button'
                  )}
                  type="button"
                  onClick={handleFavoriteClick}
                >
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span
                    style={{
                      width: `${Math.round(rating) / RATING_MULTIPLIER}%`,
                    }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${bedrooms} ${
                    bedrooms > OFFERS_DECLINATION_COUNT ? 'Bedrooms' : 'Bedroom'
                  }`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${maxAdults} ${
                    maxAdults > OFFERS_DECLINATION_COUNT ? 'adults' : 'adult'
                  }`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferGoods goods={goods} />
              <OfferHost host={host} description={description} />
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              className={'offer__map'}
              city={city}
              points={[...nearbyMapOffers, detailedOffer]}
              selectedPoint={detailedOffer.id}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <PlaceCardList offers={nearbyMapOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
