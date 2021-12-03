import React, { useContext, useState } from 'react';
import { Card } from 'antd';
import { FireOutlined, ApiOutlined, RightCircleTwoTone } from '@ant-design/icons';
import AssetsContext from '../../context/AssetsContext';

const tabList = [
  {
    key: 'tab1',
    tab: 'Índice de confiabilidade',
  },
  {
    key: 'tab2',
    tab: 'Dados',
  },
];

export default function AssetReability() {
  const { idAsset } = useContext(AssetsContext);
  const [activeTabKey1, setActiveTabKey1] = useState('tab1');

  let statusName;
  switch (idAsset.status) {
  case ('inAlert'):
    statusName = 'Em alerta';
    break;
  case ('inOperation'):
    statusName = 'Em operação';
    break;
  case ('inDowntime'):
    statusName = 'Em parada';
    break;
  default:
    break;
  }

  const contentList = {
    tab1:
  <section>
    <p>Probalidade de operar em perfeito estado nos próximos 100 dias</p>
  </section>,
    tab2:
  <section>
    <p>
      <FireOutlined style={ { fontSize: 18, paddingRight: 5, color: 'red' } } />
      <strong>Temperatura:</strong>
      {' '}
      {idAsset.specifications.maxTemp}
      {' '}
      C°
    </p>
    <p>
      <ApiOutlined style={ { fontSize: 18, paddingRight: 5, color: 'green' } } />
      <strong>Potência:</strong>
      {' '}
      {idAsset.specifications.power}
      {' '}
      kWh
    </p>
    <p>
      <RightCircleTwoTone style={ { fontSize: 18, paddingRight: 5, color: 'green' } } />
      <strong>Operação:</strong>
      {' '}
      {statusName}
    </p>
  </section>,
  };

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
    <Card
      style={ { width: '40%', marginLeft: 50 } }
      tabList={ tabList }
      activeTabKey={ activeTabKey1 }
      onTabChange={ (key) => {
        onTab1Change(key);
      } }
    >
      {contentList[activeTabKey1]}
    </Card>
  );
}
