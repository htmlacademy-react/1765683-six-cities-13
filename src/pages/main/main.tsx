import Map from '../../components/map/map';
import { CitiesList } from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks/use-select';
import { PlacesSorting } from '../../components/sort-types/sort-types';
import { TOfferActiveCard } from '../../types/offers';
import { Helmet } from 'react-helmet-async';
import { HeaderLayout } from '../../components/header/header';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { AuthorizationStatus, OFFERS_DECLINATION_COUNT } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import {
  getCurrentCity,
  getOffers,
  getOffersLoadingStatus,
} from '../../store/offer-process/selectors';
import { getAuthStatus } from '../../store/user-process/selectors';
import { MainEmpty } from '../main-empty/main-empty';

type MainProps = {
  offerActiveCard: TOfferActiveCard;
  onMouseHoverHandle: (id: string | null) => void;
};

function MainPage({
  offerActiveCard,
  onMouseHoverHandle,
}: MainProps): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const authStatus = useAppSelector(getAuthStatus);
  const stateOffers = useAppSelector(getOffers);
  const isOfferLoading = useAppSelector(getOffersLoadingStatus);
  const offersByCity = stateOffers
    .slice()
    .filter((item) => item.city.name === currentCity.name);

  if (offersByCity.length === 0) {
    return <MainEmpty />;
  }

  if (authStatus === AuthorizationStatus.Unknown || isOfferLoading) {
    return <LoadingScreen />;
  }

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
            <CitiesList currentCity={currentCity.name} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersByCity.length}{' '}
                {`${
                  offersByCity.length > OFFERS_DECLINATION_COUNT
                    ? 'places'
                    : 'place'
                }`}{' '}
                to stay in {currentCity.name}
              </b>
              <PlacesSorting />
              <PlaceCardList
                offers={offersByCity}
                onMouseHoverHandle={onMouseHoverHandle}
              />
            </section>
            <div className="cities__right-section">
              <Map
                className={'cities__map'}
                city={currentCity}
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
