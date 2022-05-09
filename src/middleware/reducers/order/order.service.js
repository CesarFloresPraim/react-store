import orderApi from "../../../api/orderApi";

class OrderService {
    createOrder = (order) => orderApi().post(`api/v1.0/order/`, order);
}

export default new OrderService();
