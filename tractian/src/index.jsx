import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AssetsProvider from './context/AssetsProvider';
import './index.css';

ReactDOM.render(
  <AssetsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AssetsProvider>,
  document.getElementById('root'),
);
