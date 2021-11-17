import React, { useContext } from 'react';

import { Skeleton } from 'antd';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import AssetDetails from '../components/details/AssetDetails';
import AssetsContext from '../context/AssetsContext';

export default function Details() {
  const { idAsset } = useContext(AssetsContext);

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <section>
      <Link to="/" onClick={ () => goBack }>Voltar</Link>
      {idAsset
        ? (
          <AssetDetails />) : <Skeleton active />}
    </section>
  );
}
