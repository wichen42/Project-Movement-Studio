import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore()
const root = ReactDOM.createRoot(document.getElementById('root'));

if (process.env.NODE_ENV !== "production") {
  window.store = store;
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
