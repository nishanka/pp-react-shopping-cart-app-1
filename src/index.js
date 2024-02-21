import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-eth6aa646e74rpfq.us.auth0.com'
    clientId='wgdXCSKRCkB1xtfLnqnfbgXF4d3JIuSh'
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
