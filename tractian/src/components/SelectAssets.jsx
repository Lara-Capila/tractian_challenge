import React, { useContext } from 'react';

import { Select } from 'antd';

import AssetsContext from '../context/AssetsContext';
import { getAssetById } from '../services/requestAPI';

export default function SelectAssets() {
  const { allAssets, idAsset, setIdAsset } = useContext(AssetsContext);

  const { Option } = Select;

  const assetById = (id) => {
    getAssetById(id).then((res) => setAssetResult(res));
  };

  function handleChange(e) {
    setIdAsset(e);
    assetById(e);
  }
  console.log(idAsset);

  return (
    <Select
      placeholder="Pesquise seu ativo"
      style={ { width: 200, marginBottom: 20 } }
      disabled={ !allAssets }
      onChange={ (e) => handleChange(e) }
    >
      {allAssets ? allAssets.map((asset) => (
        <Option
          key={ asset.id }
          name={ asset.name }
          value={ asset.id }
        >
          {asset.name}

        </Option>
      )) : null}
    </Select>
  );
}
