import API from '../lib/Api.js';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
  payload: API.fetchProducts()
})
