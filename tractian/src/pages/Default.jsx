import React from 'react';
import { Layout } from 'antd';

import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import LogoTractian from '../images/LogoTractian.svg';

import SelectAssets from '../components/SelectAssets';
import Home from './Home';
import Details from './Details';

const { Header, Content } = Layout;

export default function Default() {
  const location = useLocation();

  return (
    <section>
      <Layout>
        <Header style={ { position: 'fixed', zIndex: 1, width: '100%' } }>
          <div>
            <Link to="/">
              <img className="logo" src={ LogoTractian } alt="Logo Tractian" />
            </Link>
          </div>
        </Header>
        <Content className="site-layout" style={ { padding: '0 50px', marginTop: 64 } }>
          <SelectAssets />
          {location.pathname === '/' ? <Home /> : <Details />}
        </Content>
      </Layout>
    </section>
  );
}
