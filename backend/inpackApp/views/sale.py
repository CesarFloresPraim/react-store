import rest_framework_jwt
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from rest_framework import authentication, permissions
from rest_framework.views import APIView
from datetime import date
from decouple import config
#from ..models import *
#from ..serializers import *

class SaleView(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request, id):
        try:
            product=products[id]
        except IndexError:
            return JsonResponse({'message': 'No product found'}, safe=False, status=404)
        return JsonResponse(product, safe=False)
