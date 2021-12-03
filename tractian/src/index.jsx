import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AssetsProvider from './context/AssetsProvider';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <AssetsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AssetsProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
