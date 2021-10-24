import React, { useContext } from 'react';

import { Select } from 'antd';

import AssetsContext from '../context/AssetsContext';

export default function SelectAssets() {
  const { allAssets } = useContext(AssetsContext);

  const { Option } = Select;

  function handleChange(e) {
    console.log(`selected ${e}`);
  }

  return (
    <Select
      defaultValue="lucy"
      style={ { width: 200, marginBottom: 20 } }
      onChange={ (e) => handleChange(e) }
    >
      {allAssets ? allAssets.map((asset) => (
        <Option key={ asset.id } value={ asset.name }>{asset.name}</Option>
      )) : null}
    </Select>
  );
}
