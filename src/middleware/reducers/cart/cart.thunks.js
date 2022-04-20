import CartService from "./cart.service";
import actions from "./cart.action";

export const addCart = (product, selectedSize) => {
  dispatch(actions.addCart({product, selectedSize}))
};

export const deleteCart = (product, selectedSize) => {
  dispatch(actions.deleteCart({product, selectedSize}))
};

export const increaseQuantity = (product, selectedSize) => {
  dispatch(actions.increaseQuantity({product, selectedSize}))
};

export const decreaseQuantity = (product, selectedSize) => {
  dispatch(actions.decreaseQuantity({product, selectedSize}))
};

