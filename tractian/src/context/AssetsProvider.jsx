import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AssetsContext from './AssetsContext';
import { getAllAssets } from '../services/assetsRequest';

export default function AssetsProvider({ children }) {
  const THREE_SECUNDS = 3000;

  const [allAssets, setAllAssets] = useState(null);
  const [idAsset, setIdAsset] = useState(null);

  useEffect(() => {
    const getAll = () => { getAllAssets().then((res) => setAllAssets(res)); };
    const interval = () => setTimeout(() => { getAll(); }, THREE_SECUNDS);

    interval();
  }, []);

  console.log(allAssets);
  const context = {
    allAssets,
    setAllAssets,
    idAsset,
    setIdAsset,
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
