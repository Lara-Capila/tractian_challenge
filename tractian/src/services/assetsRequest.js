export async function getAllAssets() {
  const allAssets = 'https://my-json-server.typicode.com/tractian/fake-api/assets';
  const config = {
    method: 'GET',
  };

  const response = await fetch(allAssets, config);
  const assets = await response.json();
  return assets;
}

export async function getUnitById(id) {
  const unitById = `https://my-json-server.typicode.com/tractian/fake-api/units/${id}`;
  const config = {
    method: 'GET',
  };

  const response = await fetch(unitById, config);
  const unit = await response.json();
  return unit;
}

export async function getCompanyById(id) {
  const companyById = `https://my-json-server.typicode.com/tractian/fake-api/companies/${id}`;
  const config = {
    method: 'GET',
  };

  const response = await fetch(companyById, config);
  const company = await response.json();
  return company;
}

export async function getUserByUnitAndCompany(unit, company) {
  const endppoint = 'https://my-json-server.typicode.com/tractian/fake-api/users';
  const config = {
    method: 'GET',
  };

  const response = await fetch(endppoint, config);
  const users = await response.json();
  const filterUser = users
    .filter((user) => user.unitId === unit && user.companyId === company)
    .map((user) => `${user.name}, `);
  return filterUser;
}

export async function getAllUsers() {
  const allUsers = 'https://my-json-server.typicode.com/tractian/fake-api/users';
  const config = {
    method: 'GET',
  };

  const response = await fetch(allUsers, config);
  const users = await response.json();
  return users;
}

export async function getAssetById(id) {
  const assetById = `https://my-json-server.typicode.com/tractian/fake-api/assets/${id}`;
  const config = {
    method: 'GET',
  };

  const response = await fetch(assetById, config);
  const asset = await response.json();

  const updateAsset = await getUnitById(asset.unitId);
  asset.unit = updateAsset;

  const updateAssetCompany = await getCompanyById(asset.companyId);
  asset.company = updateAssetCompany;

  const updateAssetUsers = await getUserByUnitAndCompany(asset.unitId, asset.companyId);
  asset.users = updateAssetUsers;

  const updateAssetAllUsers = await getAllUsers();
  asset.Allusers = updateAssetAllUsers;

  return asset;
}
