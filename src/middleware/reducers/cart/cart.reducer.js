import initialState from "./cart.initialState";
import actionTypes from "./cart.actionTypes";

function cartReducer(state = initialState, {type, payload}) {
  switch (type) {
    case actionTypes.ADD_CART:
      var foundIdx = state.cart.findIndex((el) => {
        return el.id == payload.id;
      });
      if (foundIdx === -1) {
        let _cart = {
          id: payload.id,
          quantity: 1,
          name: payload.name,
          sizeId: payload.size.id,
          sizeName: payload.size.name,
          sizePrice: payload.size.price,
          imageSrc: payload.size.imageSrc,
        };
        state.cart.push(_cart);
      } else {
        let _cart = {
          id: payload.id,
          quantity: payload.quantity++,
          name: payload.name,
          sizeId: payload.size.id,
          sizeName: payload.size.name,
          sizePrice: payload.size.price,
          imageSrc: payload.size.imageSrc,
        };
        state.cart[foundIdx] = _cart;
      }
      localStorage.setItem("cart", state.cart);
      return {
        ...state,
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
    default:
      return state;
  }
}

export default cartReducer;
