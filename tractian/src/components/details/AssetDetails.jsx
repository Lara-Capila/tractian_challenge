import React, { useContext } from 'react';

import { Card, Image } from 'antd';

import AssetsContext from '../../context/AssetsContext';
import AssetReability from './AssetRealiability';
import TableDetails from './Table';

export default function AssetDetails() {
  const { idAsset } = useContext(AssetsContext);

  return (
    <div style={ { display: 'flex', justifyContent: 'center' } }>
      <Card
        title={ idAsset.name }
        style={ { width: '50%' } }
      >
        <div
          style={ { textAlign: 'center' } }
        >
          <Image
            src={ idAsset.image }
            alt={ idAsset.name }
            style={ { width: 200 } }
          />
          <p>Clique na imagem para ampliar</p>
        </div>
        <TableDetails />
      </Card>
      <AssetReability />
    </div>
  );
}
