import {
  QuestionMarkCircleIcon,
  ExclamationCircleIcon,
  XIcon
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavHeader from "../../components/NavHeader/NavHeader";
import { updateProduct, deleteCart } from "../../middleware/reducers/cart/cart.thunks";
import Checkout from "../../components/Checkout/Checkout";

export default function Cart() {
  const dispatch = useDispatch();
  //* REDUX STATE
  const { cart } = useSelector((state) => state.cart);

  //* LOCAL STATE
  const [orderTotal, setOrderTotal] = useState(0)

  //* METHODS
  const numberFormat = (number) => {
    let formatter = new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "MXN",
    });
    return formatter.format(parseFloat(number));
  };
  const handleUpdateUnits = (productIdx, e) => {
    if (e.target.value <= 0) {
      e.preventDefault();
      return
    }
    dispatch(updateProduct(productIdx, e.target.value));
  };
  const checkIfMinQuantity = (quantity, minQuantity) => {
    if (quantity < minQuantity) return true;
    return false;
  };
  const handleRemoveItem = (productIdx) => {
    if (cart[productIdx]) {
      dispatch(deleteCart(productIdx))
    }
  };
  const onlyInteger = (e) => {
    if (e.key === '.') {
      e.preventDefault();
      return
    }
    if (e.key === '-') {
      e.preventDefault();
      return
    }
  };
  const isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
  }
  const sumCartTotal = () => {
    let total = 0
    for (const item of cart) {
      total += item.sizePrice * item.quantity
    }
    return total;
  };
  const stripeCheckout = () => {

  }


  //WATCHERS
  useEffect(() => {
    setOrderTotal(sumCartTotal())
  }, [])

  useEffect(() => {
    setOrderTotal(sumCartTotal())
  }, [cart,])

  //* TEMPLATE
  return (
    <>
      <NavHeader isAuth={true}></NavHeader>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 mt-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form onSubmit={stripeCheckout} className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="border-t border-b border-gray-200 divide-y divide-gray-200"
              >
                {cart.map((product, productIdx) => (
                  <li
                    key={`${product.id}-${product.sizeId}`}
                    className="flex py-6 sm:py-10"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-24 h-24 rounded-md object-center object-contain sm:w-48 sm:h-48"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a
                                href={product.href}
                                className="font-medium text-gray-700 hover:text-gray-800"
                              >
                                {product.name} (Order minimum:{" "}
                                {product.minQuantity})
                              </a>
                            </h3>
                            <XIcon className="h-5 w-5 font-bold" onClick={() => { handleRemoveItem(productIdx) }} />
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-gray-500">{product.sizeName}</p>
                            {product.sizePrice ? (
                              <>
                                <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">
                                  {numberFormat(product.sizePrice)}
                                </p>
                                <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500 font-bold">
                                  {product.quantity} Units
                                </p>
                              </>
                            ) : null}
                          </div>
                          <p className="mt-1 text-sm font-medium text-gray-900">
                            {numberFormat(product.sizePrice * product.quantity)}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`relative mt-auto border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 `}
                      >
                        <label
                          htmlFor="name"
                          className={`absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900`}
                        >
                          Quantity
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          className={`block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm`}
                          placeholder="Need to update the quantity? Just type!"
                          onChange={(e) => handleUpdateUnits(productIdx, e)}
                          onKeyDown={(e) => onlyInteger(e)}
                          min='1'
                        />
                        {checkIfMinQuantity(
                          product.quantity,
                          product.minQuantity
                        ) ? (
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <ExclamationCircleIcon
                              className="h-5 w-5 text-red-500"
                              aria-hidden="true"
                            />
                          </div>
                        ) : null}
                      </div>
                      {checkIfMinQuantity(
                        product.quantity,
                        product.minQuantity
                      ) ? (
                        <p className="mt-2 text-sm text-red-600">
                          ** {product.minQuantity} is required to proceed with the
                          order **
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order summary
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">{numberFormat(orderTotal)}</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900"><span className="line-through">MX$150.00</span> Free</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">{numberFormat(orderTotal)}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <Checkout></Checkout>
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}
