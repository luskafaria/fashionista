const api = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog';

const getProducts = fetch(api, { method: 'GET' })
  .then((response) => response.json())
  .then((data) => data.filter((item) => item.name))
  .catch((err) => err);

export default getProducts;
