export async function getUnit() {
  const unitById = 'https://my-json-server.typicode.com/tractian/fake-api/units';
  const config = {
    method: 'GET',
  };

  const response = await fetch(unitById, config);
  const unit = await response.json();
  return unit;
}

export async function lala() {
  // const allAssets = 'https://my-json-server.typicode.com/tractian/fake-api/assets';
  // const config = {
  //   method: 'GET',
  // };

  // const response = await fetch(allAssets, config);
  // const assets = await response.json();
  // return assets;
}
