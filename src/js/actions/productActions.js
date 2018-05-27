import API from '../lib/Api.js';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
  payload: API.fetchProducts()
})

export const createProduct = (data) => ({
  type: CREATE_PRODUCT,
  payload: API.createProduct(data)
})
