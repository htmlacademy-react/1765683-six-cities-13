import HeaderLayout from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import OfferImages from '../../components/offer-images/offer-images';
import { TOffers, TOfferActiveCard } from '../../types/offers';
import { TReviews } from '../../types/review';
import Map from '../../components/map/map';
import { CITY } from '../../const';
import PlaceCardList from '../../components/place-card-list/place-card-list';

import OfferGoods from '../../components/offer-goods/offer-goods';
import OfferHost from '../../components/offer-host/offer-host';
import ReviewList from '../../components/review-list/review-list';
import ReviewForm from '../../components/review-form/review-form';

type OfferProps = {
  offers: TOffers;
  reviews: TReviews;
  offerActiveCard: TOfferActiveCard;
  onMouseHoverHandle: (id: string) => void;
};

function OfferPage({
  offers,
  reviews,
  offerActiveCard,
  onMouseHoverHandle,
}: OfferProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Offers'}</title>
      </Helmet>
      <HeaderLayout />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferImages offers={offers} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferGoods />
              <OfferHost />
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
              city={CITY}
              points={offers}
              selectedPoint={offerActiveCard}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <PlaceCardList
              offers={offers}
              onMouseHoverHandle={onMouseHoverHandle}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
