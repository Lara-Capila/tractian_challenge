import React, { useContext } from 'react';

import { Card } from 'antd';

import AssetsContext from '../../context/AssetsContext';
import AssetReability from './AssetRealiability';
import TableDetails from './Table';

export default function AssetDetails() {
  const { idAsset } = useContext(AssetsContext);

  return (
    <div style={ { display: 'flex', justifyContent: 'center' } }>
      <Card
        title={ idAsset.name }
        style={ { width: '100%' } }
      >
        <div
          style={ { display: 'flex', justifyContent: 'center', marginBottom: 20 } }
        >
          <img
            src={ idAsset.image }
            alt={ idAsset.name }
            style={ { width: 200 } }
          />
        </div>
        <TableDetails />
      </Card>
      <AssetReability />
    </div>
  );
}
