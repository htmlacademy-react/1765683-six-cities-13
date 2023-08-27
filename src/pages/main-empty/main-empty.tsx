import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/use-select';
import { getCurrentCity } from '../../store/offer-process/selectors';
import { HeaderLayout } from '../../components/header/header';
import { CitiesList } from '../../components/cities-list/cities-list';

export const MainEmpty = () => {
  const currentCity = useAppSelector(getCurrentCity);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <HeaderLayout />

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList currentCity={currentCity.name}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
                  We could not find any property available at the moment in{' '}
                  {currentCity.name}
                </p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
};
