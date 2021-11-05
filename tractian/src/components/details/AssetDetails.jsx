import React, { useContext } from 'react';

import { Card } from 'antd';
import {
  EditTwoTone,
  SettingOutlined,
  BoxPlotOutlined,
  ShopOutlined,
  UserOutlined,
  PushpinOutlined,
} from '@ant-design/icons';

import AssetsContext from '../../context/AssetsContext';
import AssetReability from './AssetRealiability';

export default function AssetDetails() {
  const { idAsset } = useContext(AssetsContext);

  const capitalize = (str) => {
    if (typeof str !== 'string') {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  };

  return (
    <div style={ { display: 'flex', justifyContent: 'center' } }>
      <Card
        title={ idAsset.name }
        extra={ <EditTwoTone style={ { fontSize: 20 } } /> }
        style={ { width: '40%' } }
      >
        <div style={ { display: 'flex' } }>
          <div>
            <img
              src={ idAsset.image }
              alt={ idAsset.name }
              style={ { width: 200 } }
            />
          </div>
          <section style={ { paddingLeft: 30 } }>
            <p>
              <SettingOutlined
                style={ { fontSize: 18, paddingRight: 5, color: 'grey' } }
              />
              <strong>Modelo:</strong>
              {' '}
              {capitalize(idAsset.model)}
            </p>
            <p>
              <BoxPlotOutlined
                style={ { fontSize: 18, paddingRight: 5, color: 'grey' } }
              />
              <strong>Sensor:</strong>
              {' '}
              {idAsset.sensors}
            </p>
            <p>
              <ShopOutlined
                style={ { fontSize: 18, paddingRight: 5, color: 'grey' } }
              />
              <strong>Empresa:</strong>
            </p>
            <p>
              <PushpinOutlined
                style={ { fontSize: 18, paddingRight: 5, color: 'grey' } }
              />
              <strong>Unidade:</strong>
            </p>
            <p>
              <UserOutlined
                style={ { fontSize: 18, paddingRight: 5, color: 'grey' } }
              />
              <strong>Responsável:</strong>
            </p>
          </section>
        </div>
      </Card>
      <AssetReability />
    </div>
  );
}
