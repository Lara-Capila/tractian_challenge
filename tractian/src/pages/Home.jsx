import React from 'react';
import { Typography } from 'antd';

import Cards from '../components/Cards';

const { Title } = Typography;

export default function Home() {
  return (
    <section
      className="site-layout-background"
      style={ { padding: 24, minHeight: 380 } }
    >
      <Title>Dashboard</Title>
      <Cards />
    </section>
  );
}
