import MainPage from '../../pages/main/main';
import { Routes, Route } from 'react-router-dom';
import OfferPage from '../../pages/offer/offer';
import FavoritesPage from '../../pages/favorites/favorites';
import LoginPage from '../../pages/login/login';
import ProtectedRoute from '../private-route/private-route';
import { AppRoute } from '../../const';
import NotFoundPage from '../../pages/not-found/not-found';
import { HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/use-select';
import { browserHistory } from '../../borowser-history';
import HistoryRouter from '../history-router/history-router';
import { store } from '../../store';
import { checkAuthAction } from '../../store/api-actions';

store.dispatch(checkAuthAction());

function App() {
  const [offerActiveCard, setOfferActiveCard] = useState('');
  const handleOfferItemHover = (activeOfferCard: string) => {
    setOfferActiveCard(activeOfferCard);
  };

  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage
                offerActiveCard={offerActiveCard}
                onMouseHoverHandle={handleOfferItemHover}
              />
            }
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <ProtectedRoute
                authorizationStatus={authStatus}
                redirectTo={AppRoute.Login}
              >
                <FavoritesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={
              <OfferPage
                offerActiveCard={offerActiveCard}
                onMouseHoverHandle={handleOfferItemHover}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
