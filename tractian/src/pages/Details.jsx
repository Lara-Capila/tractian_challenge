import React, { useContext } from 'react';

import { Button, Skeleton } from 'antd';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import AssetDetails from '../components/details/AssetDetails';
import AssetsContext from '../context/AssetsContext';

export default function Details() {
  const { idAsset } = useContext(AssetsContext);
  const textButtonBack = 'voltar';

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <section>
      <Button
        style={ {
          border: '1px solid #1890ff',
          marginBottom: 20,
          borderRadius: 8,
          letterSpacing: '1px',
        } }
      >
        <Link to="/" onClick={ () => goBack }>{textButtonBack.toUpperCase()}</Link>
      </Button>
      {idAsset
        ? (
          <AssetDetails />) : <Skeleton active />}
    </section>
  );
}
