import MainPage from '../../pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Offer from '../../pages/offer/offer';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import ProtectedRoute from '../private-route/private-route';
import { AppRoute, Settings } from '../../const';
import NotFound from '../../pages/not-found/not-found';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  offersCount: number;
};

function App({ offersCount }: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offersCount={offersCount} />}
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <ProtectedRoute
                isAuth={Settings.isAuth}
                redirectTo={AppRoute.Login}
              >
                <Favorites />
              </ProtectedRoute>
            }
          />
          <Route path={`${AppRoute.Offer}/:id`} element={<Offer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
