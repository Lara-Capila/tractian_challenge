import React from 'react';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';

import './App.css';
import LogoTractian from './images/LogoTractian.svg';
import Cards from './components/Cards';

const { Title } = Typography;

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <section>
      <Layout>
        <Header style={ { position: 'fixed', zIndex: 1, width: '100%' } }>
          <div>
            <img className="logo" src={ LogoTractian } alt="Logo Tractian" />
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={ ['2'] }>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={ { padding: '0 50px', marginTop: 64 } }>
          <Breadcrumb style={ { margin: '16px 0' } }>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <section
            className="site-layout-background"
            style={ { padding: 24, minHeight: 380 } }
          >
            <Title>Dashboard</Title>
            <Cards />
          </section>
        </Content>
        <Footer
          style={ { textAlign: 'center' } }
        >
          Created by Lara Capila

        </Footer>
      </Layout>
      ,
    </section>
  );
}

// Deploy no heroku
