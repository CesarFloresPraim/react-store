import CartService from "./cart.service";
import actions from "./cart.action";

export const addCart = (product, selectedSize) => (dispatch) => {
  dispatch(actions.addCart({ product, selectedSize }));
};

export const deleteCart = (id) => (dispatch) => {
  dispatch(actions.deleteCart({id}));
};

export const getProduct = (id) => (dispatch) => {
  CartService.getProduct(id).then((response) => {
    dispatch(actions.getProduct(response.data));
  }).catch((err)=> {
    console.log(err);
    window.location.href = '/404'
  });
};

export const updateProduct = (id, quantity) => (dispatch) => {
    dispatch(actions.updateProduct({id, quantity}));
};