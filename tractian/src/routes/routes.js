import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Default from '../pages/Default';
import FooterPage from '../components/Footer';

const Routes = () => (
  <Router>
    <Default />
    <FooterPage />
  </Router>
);

export default Routes;
