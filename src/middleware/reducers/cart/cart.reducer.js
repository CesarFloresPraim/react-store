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
          quantity: payload.selectedSize.minQuantity,
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
    case actionTypes.DELETE_CART:
      if(state.cart[payload.id]) {
        state.cart.splice(payload.id, 1);
      }
      console.log(state.cart);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return {
        ...state,
        cart: [...state.cart],
      };
    case actionTypes.GET_PRODUCT:
      return {
        ...state,
        productDetail: payload,
      };
    case actionTypes.UPDATE_PRODUCT:
      if(state.cart[payload.id]){
        state.cart[payload.id].quantity = payload.quantity
      }
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
