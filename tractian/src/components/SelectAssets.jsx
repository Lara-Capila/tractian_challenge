import React, { useContext } from 'react';

import { Select } from 'antd';

import { useHistory } from 'react-router';
import AssetsContext from '../context/AssetsContext';
import { getAssetById } from '../services/assetsRequest';

export default function SelectAssets() {
  const { allAssets, setIdAsset } = useContext(AssetsContext);

  const history = useHistory();

  const { Option } = Select;

  function handleChange(e) {
    getAssetById(e).then((res) => setIdAsset(res));
    history.push('/details');
  }

  return (
    <Select
      placeholder="Pesquise seu ativo"
      style={ { width: 200, margin: '20px 0 20px 0' } }
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
