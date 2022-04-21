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
        orderItems = data["cart"]
        print(orderItems)
        # create a stripe instance
        stripe.api_key = config('REACT_STRIPE_SECRET')

        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=orderItems,
            mode='payment',
            success_url=config("REACT_APP_URL") +
            'thanks',
            cancel_url=config("REACT_APP_URL") + 'cart',
            locale="en",  # change to spanish

        )

        # returns session id
        return Response({'id': session.id})
