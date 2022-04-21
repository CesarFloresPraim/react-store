import {
  QuestionMarkCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../../middleware/reducers/cart/cart.thunks";
export default function Cart() {
  const dispatch = useDispatch();
  //* REDUX STATE
  const { cart } = useSelector((state) => state.cart);

  //* METHODS
  const numberFormat = (number) => {
    let formatter = new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "MXN",
    });
    return formatter.format(parseFloat(number));
  };
  const handleUpdateUnits = (productIdx, e) => {
    if (e.target.value <= 0) return;
    dispatch(updateProduct(productIdx, e.target.value));
  };
  const checkIfMinQuantity = (quantity, minQuantity) => {
    if (quantity < minQuantity) return true;
    return false;
  };
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
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
                <dd className="text-sm font-medium text-gray-900">$99.00</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how shipping is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$5.00</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how tax is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$8.32</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="text-base font-medium text-gray-900">
                  Order total
                </dt>
                <dd className="text-base font-medium text-gray-900">$112.32</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Checkout
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
