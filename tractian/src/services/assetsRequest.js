export async function getAllAssets() {
  const allAssets = 'https://my-json-server.typicode.com/tractian/fake-api/assets';
  const config = {
    method: 'GET',
  };

  const response = await fetch(allAssets, config);
  const assets = await response.json();
  return assets;
}

export async function getAssetById(id) {
  const assetById = `https://my-json-server.typicode.com/tractian/fake-api/assets/${id}`;
  const config = {
    method: 'GET',
  };

  const response = await fetch(assetById, config);
  const asset = await response.json();
  return asset;
}
