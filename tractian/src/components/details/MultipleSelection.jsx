import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Select } from 'antd';
import AssetsContext from '../../context/AssetsContext';

export default function MultipleSelection({ value }) {
  const { idAsset } = useContext(AssetsContext);
  console.log('multiple selection', idAsset);

  const { Option } = Select;
  const mapNames = value.map((el) => el);

  return (
    <Select
      ddonBefore="Última Atualização"
      style={ { width: 500 } }
      mode="multiple"
      labelInValue
      tokenSeparators={ [' ', ','] }
      defaultValue={ mapNames }
    >
      {idAsset.Allusers.map((user) => (
        <Option key={ user.id }>{user.name}</Option>
      ))}
    </Select>
  );
}

MultipleSelection.propTypes = {
  value: PropTypes.string.isRequired,
};
