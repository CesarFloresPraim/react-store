# for Stripe
from django.http import JsonResponse
import stripe
from decouple import config
# for REST Framework
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from ..models import *

class OrderView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response('GET ORDER')

    def post(self, request):
        parser_classes = (MultiPartParser, FormParser)
        # retrieve order items from order
        print(request.data)

        # returns session id
        return JsonResponse({'id': '33'}, safe=False)
