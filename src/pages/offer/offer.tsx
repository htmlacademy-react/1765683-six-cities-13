import HeaderLayout from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import OfferImages from '../../components/offer-images/offer-images';
import { TOffers, TOfferActiveCard } from '../../types/offers';
import { TReviews } from '../../types/review';
import Map from '../../components/map/map';
import { CITY } from '../../const';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import OfferSelected from '../../components/offer-selected/offer-selected';

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
          <OfferSelected reviews={reviews}/>
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
