import initialState from "./cart.initialState";
import actionTypes from "./cart.actionTypes";

function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.ADD_CART:
      var foundProductIdx = state.cart.findIndex((el) => {
        return el.sizeId == payload.selectedSize.id;
      });
      if (foundProductIdx === -1) {
        console.log(payload.selectedSize);
        let item = {
          id: payload.product.id,
          quantity: 1,
          name: payload.product.name,
          sizeId: payload.selectedSize.id,
          sizeName: payload.selectedSize.name,
          sizePrice: payload.selectedSize.price,
          imageSrc: payload.selectedSize.imageSrc,
          imageAlt: payload.product.imageAlt,
          href: payload.selectedSize.href,
          minQuantity: payload.selectedSize.minQuantity,
        };
        state.cart.push(item);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return {
        ...state,
        cart: [...state.cart],
      };
    case actionTypes.INCREASE_QUANTITY:
      var foundIdx = state.cart.findIndex((el) => {
        return el.id == payload.id;
      });
      if (foundIdx >= 0) {
        let _cart = {
          ...state.cart[foundIdx],
          quantity: state.cart[foundIdx].quantity++,
        };
        state.cart[foundIdx] = _cart;
      }
      localStorage.setItem("cart", state.cart);
      return {
        ...state,
      };
    case actionTypes.DECREASE_QUANTITY:
      var foundIdx = state.cart.findIndex((el) => {
        return el.id == payload.id;
      });
      if (foundIdx >= 0 && state.cart[foundIdx].quantity > 1) {
        let _cart = {
          ...state.cart[foundIdx],
          quantity: state.cart[foundIdx].quantity--,
        };
        state.cart[foundIdx] = _cart;
      }
      localStorage.setItem("cart", state.cart);
      return {
        ...state,
      };
    case actionTypes.DELETE_CART:
      var foundIdx = state.cart.findIndex((el) => {
        return el.id == payload.id;
      });
      if (foundIdx >= 0) {
        state.cart.splice(foundIdx, 1);
      }
      localStorage.setItem("cart", state.cart);
      return {
        ...state,
      };
    case actionTypes.GET_PRODUCT:
      return {
        ...state,
        productDetail: payload,
      };
    case actionTypes.UPDATE_PRODUCT:
      
      state.cart[payload.id].quantity = payload.quantity
      localStorage.setItem("cart", JSON.stringify(state.cart));

      return {
        ...state,
        cart: [...state.cart],
      };
    default:
      return state;
  }
}

export default cartReducer;
