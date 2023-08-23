import { HeaderLayout } from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-select';
import { FavoritesList } from '../../components/favorite-list/favorite-lits';
import FavoriteEmpty from '../../components/favorite-empty/favorite-empty';
import { getFavOffers } from '../../store/offer-process/selectors';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavOffers);

  if (favoriteOffers === null) {
    return <FavoriteEmpty />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>Favorites</title>
      </Helmet>

      <HeaderLayout />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesList favorites={favoriteOffers} />
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
