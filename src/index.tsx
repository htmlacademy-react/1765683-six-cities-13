import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Settings } from './const';
import { offers } from './mocks/offers';
import { reviews } from './mocks/rewiev';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={Settings.Offers} offers={offers} reviews={reviews} />
  </React.StrictMode>
);
