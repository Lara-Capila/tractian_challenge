import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;

export default function FooterPage() {
  return (
    <Footer
      style={ { textAlign: 'center', marginTop: 25 } }
    >
      Created by Lara Capila
    </Footer>
  );
}
