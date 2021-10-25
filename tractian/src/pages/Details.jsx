import React, { useContext } from 'react';
import { useEffect } from 'react/cjs/react.development';
import AssetsContext from '../context/AssetsContext';

export default function Details() {
  const { assetResult } = useContext(AssetsContext);

  useEffect(() => {
    const result = () => assetResult;

    result();
  }, [assetResult]);
  console.log(assetResult);
  return (
    <div>ol</div>
  );
}
