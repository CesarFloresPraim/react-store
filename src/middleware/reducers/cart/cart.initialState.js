let cartLocal = []
try {
  cartLocal = JSON.parse(localStorage.getItem('cart')) || [];
} catch(e) {
  console.log('error parsing');
  cartLocal = []
}
export default {
  cart: cartLocal,
  productDetail: {}
};
