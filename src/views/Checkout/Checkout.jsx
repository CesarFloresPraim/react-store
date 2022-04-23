import { Disclosure } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/solid'
import logo from '../../assets/images/inpack-logo.webp'
const subtotal = '$210.00'
const discount = { code: 'CHEAPSKATE', amount: '$24.00' }
const taxes = '$23.68'
const shipping = '$22.00'
const total = '$341.68'
const products = [
    {
        id: 1,
        name: 'Micro Backpack',
        href: '#',
        price: '$70.00',
        color: 'Moss',
        size: '5L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
        imageAlt:
            'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
    },
    // More products...
]

export default function Checkout() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <main className="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse">
                <div className="px-4 py-6 sm:px-6 lg:hidden">
                    <div className="max-w-lg mx-auto flex">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                src={logo}
                                alt=""
                                className="h-14 w-auto"
                            />
                        </a>
                    </div>
                </div>

                <h1 className="sr-only">Checkout</h1>

                {/* Mobile order summary */}
                <section aria-labelledby="order-heading" className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden">
                    <Disclosure as="div" className="max-w-lg mx-auto">
                        {({ open }) => (
                            <>
                                <div className="flex items-center justify-between">
                                    <h2 id="order-heading" className="text-lg font-medium text-gray-900">
                                        Your Order
                                    </h2>
                                    <Disclosure.Button className="font-medium text-indigo-600 hover:text-indigo-500">
                                        {open ? <span>Hide full summary</span> : <span>Show full summary</span>}
                                    </Disclosure.Button>
                                </div>

                                <Disclosure.Panel>
                                    <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
                                        {products.map((product) => (
                                            <li key={product.id} className="flex py-6 space-x-6">
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                    className="flex-none w-40 h-40 object-center object-cover bg-gray-200 rounded-md"
                                                />
                                                <div className="flex flex-col justify-between space-y-4">
                                                    <div className="text-sm font-medium space-y-1">
                                                        <h3 className="text-gray-900">{product.name}</h3>
                                                        <p className="text-gray-900">{product.price}</p>
                                                        <p className="text-gray-500">{product.color}</p>
                                                        <p className="text-gray-500">{product.size}</p>
                                                    </div>
                                                    <div className="flex space-x-4">
                                                        <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                            Edit
                                                        </button>
                                                        <div className="flex border-l border-gray-300 pl-4">
                                                            <button
                                                                type="button"
                                                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <form className="mt-10">
                                        <label htmlFor="discount-code-mobile" className="block text-sm font-medium text-gray-700">
                                            Discount code
                                        </label>
                                        <div className="flex space-x-4 mt-1">
                                            <input
                                                type="text"
                                                id="discount-code-mobile"
                                                name="discount-code-mobile"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            <button
                                                type="submit"
                                                className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </form>

                                    <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
                                        <div className="flex justify-between">
                                            <dt>Subtotal</dt>
                                            <dd className="text-gray-900">{subtotal}</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="flex">
                                                Discount
                                                <span className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                                                    {discount.code}
                                                </span>
                                            </dt>
                                            <dd className="text-gray-900">-{discount.amount}</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt>Taxes</dt>
                                            <dd className="text-gray-900">{taxes}</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt>Shipping</dt>
                                            <dd className="text-gray-900">{shipping}</dd>
                                        </div>
                                    </dl>
                                </Disclosure.Panel>

                                <p className="flex items-center justify-between text-sm font-medium text-gray-900 border-t border-gray-200 pt-6 mt-6">
                                    <span className="text-base">Total</span>
                                    <span className="text-base">{total}</span>
                                </p>
                            </>
                        )}
                    </Disclosure>
                </section>

                {/* Order summary */}
                <section aria-labelledby="summary-heading" className="hidden bg-gray-50 w-full max-w-md flex-col lg:flex">
                    <h2 id="summary-heading" className="sr-only">
                        Order summary
                    </h2>

                    <ul role="list" className="flex-auto overflow-y-auto divide-y divide-gray-200 px-6">
                        {products.map((product) => (
                            <li key={product.id} className="flex py-6 space-x-6">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="flex-none w-40 h-40 object-center object-cover bg-gray-200 rounded-md"
                                />
                                <div className="flex flex-col justify-between space-y-4">
                                    <div className="text-sm font-medium space-y-1">
                                        <h3 className="text-gray-900">{product.name}</h3>
                                        <p className="text-gray-900">{product.price}</p>
                                        <p className="text-gray-500">{product.color}</p>
                                        <p className="text-gray-500">{product.size}</p>
                                    </div>
                                    <div className="flex space-x-4">
                                        <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            Edit
                                        </button>
                                        <div className="flex border-l border-gray-300 pl-4">
                                            <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="sticky bottom-0 flex-none bg-gray-50 border-t border-gray-200 p-6">
                        <form>
                            <label htmlFor="discount-code" className="block text-sm font-medium text-gray-700">
                                Discount code
                            </label>
                            <div className="flex space-x-4 mt-1">
                                <input
                                    type="text"
                                    id="discount-code"
                                    name="discount-code"
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <button
                                    type="submit"
                                    className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                >
                                    Apply
                                </button>
                            </div>
                        </form>

                        <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
                            <div className="flex justify-between">
                                <dt>Subtotal</dt>
                                <dd className="text-gray-900">{subtotal}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="flex">
                                    Discount
                                    <span className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                                        {discount.code}
                                    </span>
                                </dt>
                                <dd className="text-gray-900">-{discount.amount}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt>Taxes</dt>
                                <dd className="text-gray-900">{taxes}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt>Shipping</dt>
                                <dd className="text-gray-900">{shipping}</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                                <dt className="text-base">Total</dt>
                                <dd className="text-base">{total}</dd>
                            </div>
                        </dl>
                    </div>
                </section>

                {/* Checkout form */}
                <section
                    aria-labelledby="payment-heading"
                    className="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24"
                >
                    <div className="max-w-lg mx-auto">
                        <div className="hidden pt-10 pb-16 lg:flex">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img
                                    src={logo}
                                    alt=""
                                    className="h-14 w-auto"
                                />
                            </a>
                        </div>
                        <form className="mt-6">
                            <div className="grid grid-cols-12 gap-y-6 gap-x-4">
                                <div className="col-span-full">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            id="email-address"
                                            name="email-address"
                                            autoComplete="email"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 flex items-center">
                                            <label htmlFor="country" className="sr-only">
                                                Country
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country"
                                                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                                            >
                                                <option>MX</option>
                                            </select>
                                        </div>
                                        <input
                                            type="text"
                                            name="phone-number"
                                            id="phone-number"
                                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
                                            placeholder="+52 (555) 555-5555"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                        Address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            autoComplete="street-address"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full sm:col-span-4">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            autoComplete="address-level2"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full sm:col-span-4">
                                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                        State / Province
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="region"
                                            name="region"
                                            autoComplete="address-level1"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full sm:col-span-4">
                                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                        Postal code
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="postal-code"
                                            name="postal-code"
                                            autoComplete="postal-code"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>


                            <button
                                type="submit"
                                className="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Pay {total}
                            </button>

                            <div className="mt-6 text-center">
                                <a
                                    href="#"
                                    className="group inline-flex text-base font-medium"
                                >
                                    <ShieldCheckIcon
                                        className="flex-shrink-0 mr-2 h-6 w-6 text-green-400 group-hover:text-green-500"
                                        aria-hidden="true"
                                    />
                                    <span className="text-gray-500 hover:text-gray-700">
                                        SSL Secure payment powered by Stripe
                                    </span>
                                </a>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}