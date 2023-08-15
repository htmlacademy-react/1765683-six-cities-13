import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchOffers } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <ToastContainer />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
