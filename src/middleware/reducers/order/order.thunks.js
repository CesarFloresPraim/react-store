import OrderService from "./order.service";
//import actions from "./cart.action";

export const createOrder = (order) => (dispatch) => {
  OrderService.createOrder(order).then((response)=>{
    console.log(response.data);
  }).catch((error)=>{
    console.log(error);
  })
};
