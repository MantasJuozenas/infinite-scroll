import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import FavouritesProvider from './store/FavouritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavouritesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesProvider>
);
