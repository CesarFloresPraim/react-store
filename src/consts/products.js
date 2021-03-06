import carton_box from "../assets/images/carton_box.png"
const products = [
    {
        'id': 0,
        'name': "Removals Box",
        'href': "#",
        'price': "From $160",
        'description': "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
        'imageSrc': carton_box,
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
                'imageSrc': carton_box,

            },
            {
                'id': 1,
                'name': "15cm x 45cm x 20cm",
                'description': "Ideal for clothes and big stuff",
                'price': 320,
                'imageSrc': carton_box,

            },
            {
                'id': 2,
                'name': "25cm x 35cm x 10cm",
                'description': "Enough room for a serious amount of snacks.",
                'price': 160,
                'imageSrc': carton_box,

            },
        ],
    },
]

export default products;