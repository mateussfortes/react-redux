import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'routes';
import store from './store';
import { Provider } from 'react-redux';

import './index.css';

import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
    
  </React.StrictMode>
);
