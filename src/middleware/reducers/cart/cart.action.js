import actionTypes from "./cart.actionTypes";

const addCart = (payload) => {
  return {
    type: actionTypes.ADD_CART,
    payload,
  };
};

const deleteCart = (payload) => {
  return {
    type: actionTypes.DELETE_CART,
    payload,
  };
};

const getProduct = (payload) => {
  return {
    type: actionTypes.GET_PRODUCT,
    payload,
  };
};

const updateProduct = (payload) => {
  return {
    type: actionTypes.UPDATE_PRODUCT,
    payload,
  };
};

export default {
  addCart,
  deleteCart,
  getProduct,
  updateProduct
};
