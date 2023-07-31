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
import { useState } from 'react';

type TAppProps = {
  offers: TOffers;
  reviews: TReviews;
};

function App({ offers, reviews }: TAppProps) {
  const [offerActiveCard, setOfferActiveCard] = useState('');
  const handleOfferItemHover = (activeOfferCard: string) => {
    setOfferActiveCard(activeOfferCard);
  };
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offers={offers} offerActiveCard={offerActiveCard} onMouseHoverHandle={handleOfferItemHover}/>}
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
          <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers} reviews={reviews} offerActiveCard={offerActiveCard} onMouseHoverHandle={handleOfferItemHover}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
