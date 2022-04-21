from decouple import config
products = [
    {
        'id': 0,
        'name': "Removals Box",
        'href': "#",
        'description': "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
        'imageAlt': "Carton box",
        'breadcrumbs': [
            {
                'id': 1,
                'name': "Boxes",
            },
            {
                'id': 2,
                'name': "Removal",
            },
        ],
        'sizes': [
            {
                'id': 'price_1Kr6WwFIG5UVV1Tg6hgDc5Wm',
                'name': "15cm x 35cm x 20cm",
                'description': "Perfect for a reasonable amount of snacks.",
                'price': 220,
                'imageSrc': 'https://binarasolutions.s3.us-east-2.amazonaws.com/inpack/carton_box.png',
                'href': config('REACT_APP_URL') + 'product/' + str(0) + '/?selectedSizeId=' + str(0),
                'minQuantity': 20
            },
            {
                'id': 'price_1Kr6WwFIG5UVV1Tg6hgDc5Wm2',
                'name': "15cm x 45cm x 20cm",
                'description': "Ideal for clothes and big stuff",
                'price': 320,
                'imageSrc': '',
                'href': config('REACT_APP_URL') + 'product/' + str(0) + '/?selectedSizeId=' + str(0),
                'minQuantity': 20
            },
            {
                'id': 'price_1Kr6WwFIG5UVV1Tg6hgDc5Wm1',
                'name': "25cm x 35cm x 10cm",
                'description': "Enough room for a serious amount of snacks.",
                'price': 160,
                'imageSrc': '',
                'href': config('REACT_APP_URL') + 'product/' + str(0) + '/?selectedSizeId=' + str(0),
                'minQuantity': 20
            },
        ],
    },
]
