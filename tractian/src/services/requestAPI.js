const allAssets = 'https://my-json-server.typicode.com/tractian/fake-api/assets';

export default async function getAllAssets() {
  const config = {
    method: 'GET',
  };

  const response = await fetch(allAssets, config);
  const assets = await response.json();
  return assets;
}
