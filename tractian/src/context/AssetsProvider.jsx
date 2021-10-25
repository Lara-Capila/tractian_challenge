import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AssetsContext from './AssetsContext';
import { getAllAssets, getAssetById } from '../services/requestAPI';

export default function AssetsProvider({ children }) {
  const THREE_SECUNDS = 3000;

  const [allAssets, setAllAssets] = useState(null);
  const [idAsset, setIdAsset] = useState(null);
  const [assetResult, setAssetResult] = useState(null);

  useEffect(() => {
    const getAll = () => { getAllAssets().then((res) => setAllAssets(res)); };
    const interval = () => setTimeout(() => { getAll(); }, THREE_SECUNDS);

    interval();
  }, []);

  const assetById = (id) => {
    getAssetById(id).then((res) => setAssetResult(res));
  };

  const context = {
    allAssets,
    setAllAssets,
    idAsset,
    setIdAsset,
    assetResult,
    assetById,
  };

  return (
    <AssetsContext.Provider value={ context }>
      { children }
    </AssetsContext.Provider>
  );
}

AssetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
