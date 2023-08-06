import HeaderLayout from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { TOffers, TOfferActiveCard } from '../../types/offers';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { CITY } from '../../const';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks/use-select';

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
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
