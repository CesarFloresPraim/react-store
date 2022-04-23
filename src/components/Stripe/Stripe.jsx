import axios from 'axios'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }

    return stripePromise;
};


export default function Stripe() {
    //* REDUX STATE
    const { cart } = useSelector((state) => state.cart);

    //* LOCAL STATE
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const redirectToCheckout = async () => {
        setLoading(true);
        const stripe = await getStripe();

        let line_items = []
        for (const item of cart) {
            line_items.push({
                price: item.sizeId,
                quantity: item.quantity
            })
        }
        console.log(process.env.REACT_APP_API_URL);
        let config = {
            url: process.env.REACT_APP_API_URL + "api/v1.0/checkout/",
            method: "post",
            data: {
                cart: line_items,
            },
            withCredentials: false,
        };

        axios(config)
            .then((response) => {
                return stripe.redirectToCheckout({ sessionId: response.data.id })
            })
            .catch((err) => {
                setStripeError('Please refresh')
                setLoading(false);
                console.log(err);
            });

    };

    return (
        <button
            type="button"
            onClick={redirectToCheckout}
            className={`w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 transition-all bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-900 ease-in-out duration-400 bg-right-bottom hover:bg-left-bottom`}
            style={{backgroundSize: '200% 100%'}}
        >
            {isLoading? 'Loading...' : 'Checkout'}
            <p className=' text-xs'> {stripeError? 'Please refresh': null}</p>
        </button>
    );
};