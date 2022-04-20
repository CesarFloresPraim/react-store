# for Stripe
import stripe
from decouple import config
# for REST Framework
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from ..models import *


class CheckoutSession(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response('WELCOME TO STRIPE CHECKOUT DEMO! SAYING HELLO FROM BACKEND')

    def post(self, request):
        # retrieve order items from order
        data = JSONParser().parse(request)
        orderItems = data["order_items"]
        # create a stripe instance
        stripe.api_key = config('STRIPE_SECRET_KEY')

        products = {
            0: 'stripeId',
            1: 320,
            2: 160
        }
        line_items = []
        for item in orderItems:
            line_items.append({
                "price": products[item.id],
                "quantity": item.quantity,
                "tax_rates": [
                    config('TAX_RATE_ID'),
                ],
            })
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=orderItems,
            mode='payment',
            success_url=config("VUE_APP_URL") +
            '?#/thanks/' + str(data["order_id"]),
            cancel_url=config("VUE_APP_URL") + '?#/cart',
            locale="en", #change to spanish
            # discounts=[{"coupon": data["coupon"]["stripe_coupon"]}],
            # customer=userExt.stripe_id,
        )

        # returns session id
        return Response({'id': session.id})
