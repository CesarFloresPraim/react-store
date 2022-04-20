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
export default {
  addCart,
  deleteCart,
  increaseQuantity,
  decreaseQuantity,
};
