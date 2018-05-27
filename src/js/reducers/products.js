const initialState = [];

const products = (state = initialState, { type, payload }) => {

  switch (type) {
    case "FETCH_PRODUCTS_FULFILLED":
      return payload;
    case "CREATE_PRODUCT_FULFILLED":
      return [...state, payload];
    default:
      break;
  }

  return state
}

export default products;
