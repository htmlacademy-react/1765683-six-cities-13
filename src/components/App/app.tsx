import MainPage from '../../pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OfferPage from '../../pages/offer/offer';
import FavoritesPage from '../../pages/favorites/favorites';
import LoginPage from '../../pages/login/login';
import ProtectedRoute from '../private-route/private-route';
import { AppRoute, Settings } from '../../const';
import NotFoundPage from '../../pages/not-found/not-found';
import { HelmetProvider } from 'react-helmet-async';
import { TOffers } from '../../types/offers';
import { TReviews } from '../../types/review';

type TAppProps = {
  offersCount: number;
  offers: TOffers;
  reviews: TReviews;
};

function App({ offersCount, offers, reviews }: TAppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offersCount={offersCount} offers={offers}/>}
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <ProtectedRoute
                isAuth={Settings.Auth}
                redirectTo={AppRoute.Login}
              >
                <FavoritesPage offers={offers}/>
              </ProtectedRoute>
            }
          />
          <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers} reviews={reviews} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
