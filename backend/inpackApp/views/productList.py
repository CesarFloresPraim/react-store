import rest_framework_jwt
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from rest_framework import authentication, permissions
from rest_framework.views import APIView
from datetime import date

#from ..models import *
#from ..serializers import *

products = [
    {
        'id': 0,
        'name': "Removals Box",
        'href': "#",
        'price': "From $160",
        'description': "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
        'imageSrc': '',
        'imageAlt': "Carton box",
        'breadcrumbs': [
            {
                'id': 1,
                'name': "Boxes",
                'href': "#",
            },
            {
                'id': 2,
                'name': "Removal",
                'href': "#"
            },
        ],
        'sizes': [
            {
                'id': 0,
                'name': "15cm x 35cm x 20cm",
                'description': "Perfect for a reasonable amount of snacks.",
                'price': 220,
                'imageSrc': '',

            },
            {
                'id': 1,
                'name': "15cm x 45cm x 20cm",
                'description': "Ideal for clothes and big stuff",
                'price': 320,
                'imageSrc': '',

            },
            {
                'id': 2,
                'name': "25cm x 35cm x 10cm",
                'description': "Enough room for a serious amount of snacks.",
                'price': 160,
                'imageSrc': '',

            },
        ],
    },
]


class ProductListView(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request):
        return JsonResponse(products, safe=False)
