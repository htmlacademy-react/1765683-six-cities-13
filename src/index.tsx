import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchOffers } from './store/api-actions';
import SpinnerLoader from './components/loading-spinner/loading-spinner';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuthAction());
store.dispatch(fetchOffers()).then(() => {
  const offers = store.getState().offers;
  if (offers) {
    localStorage.setItem('offers', JSON.stringify(offers));
  }
});

root.render(
  <Provider store={store}>
    <SpinnerLoader/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
