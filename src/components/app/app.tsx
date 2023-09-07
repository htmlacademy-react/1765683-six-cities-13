import MainPage from '../../pages/main/main';
import { Routes, Route } from 'react-router-dom';
import OfferPage from '../../pages/offer/offer';
import FavoritesPage from '../../pages/favorites/favorites';
import LoginPage from '../../pages/login/login';
import ProtectedRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFoundPage from '../../pages/not-found/not-found';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/use-select';
import {
  checkAuthAction,
  fetchFavorites,
  fetchOffers,
} from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-dispatch';
import { getAuthStatus } from '../../store/user-process/selectors';

function App() {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchOffers());
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, authStatus]);

  const [offerActiveCard, setOfferActiveCard] = useState<string | null>(null);

  const handleOfferItemHover = (activeOfferCard: string | null) => {
    setOfferActiveCard(activeOfferCard);
  };

  return (
    <HelmetProvider>
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
        <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
