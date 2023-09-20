import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';
import { restoreSession } from './store/session';
import { restoreCSRF } from './store/csrf';

const store = configureStore()
const root = ReactDOM.createRoot(document.getElementById('root'));

if (process.env.NODE_ENV !== "production") {
  window.store = store;
};

const renderApplication = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

if (sessionStorage.getItem("X-CSRF-Token") === null && sessionStorage.getItem("currentUser") !== null) {
  store.dispatch(restoreSession()).then(renderApplication);
} else {
  renderApplication();
};

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
