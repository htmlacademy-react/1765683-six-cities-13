import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks/use-select';
import PlacesSorting from '../../components/sort-types/sort-types';
import { TOfferActiveCard, TOffers } from '../../types/offers';
import { Helmet } from 'react-helmet-async';
import HeaderLayout from '../../components/header/header';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { CITY } from '../../const';

type MainProps = {
  offerActiveCard: TOfferActiveCard;
  onMouseHoverHandle: (id: string) => void;
};

function MainPage({
  offerActiveCard,
  onMouseHoverHandle,
}: MainProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const stateOffers: TOffers = useAppSelector((state) => state.offers);
  const offersByCity = stateOffers.filter(
    (item) => item.city.name === currentCity
  );

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities - Main Page'}</title>
      </Helmet>
      <HeaderLayout />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersByCity.length} places to stay in {currentCity}
              </b>
              <PlacesSorting/>
              <PlaceCardList
                offers={offersByCity}
                onMouseHoverHandle={onMouseHoverHandle}
              />
            </section>
            <div className="cities__right-section">
              <Map
                className={'cities__map'}
                city={CITY}
                points={offersByCity}
                selectedPoint={offerActiveCard}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
