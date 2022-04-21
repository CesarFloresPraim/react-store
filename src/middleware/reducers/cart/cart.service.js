import cartApi from "../../../api/cartApi";

class CartService {
    getProduct = (id) => cartApi().get(`api/v1.0/products/${id}`);
}

export default new CartService();
