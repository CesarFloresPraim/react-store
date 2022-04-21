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

const increaseQuantity = (payload) => {
  return {
    type: actionTypes.INCREASE_QUANTITY,
    payload,
  };
};
const decreaseQuantity = (payload) => {
  return {
    type: actionTypes.DECREASE_QUANTITY,
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
  increaseQuantity,
  decreaseQuantity,
  getProduct,
  updateProduct
};
