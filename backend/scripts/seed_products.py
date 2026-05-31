from products.models import Product

products = [
    {
        "name": "Oversized Hoodie",
        "description": "Sudadera oversize negra estilo urbano",
        "price": 899.99,
        "stock": 15,
        "category": "Hoodies",
        "image_url": "https://picsum.photos/300?1"
    },
    {
        "name": "Urban Black Tee",
        "description": "Playera negra minimalista",
        "price": 399.99,
        "stock": 30,
        "category": "Playeras",
        "image_url": "https://picsum.photos/300?2"
    },
    {
        "name": "Cargo Joggers",
        "description": "Pantalón cargo estilo streetwear",
        "price": 799.99,
        "stock": 20,
        "category": "Pantalones",
        "image_url": "https://picsum.photos/300?3"
    },
    {
        "name": "Street Cap",
        "description": "Gorra urbana BunnyWear",
        "price": 299.99,
        "stock": 25,
        "category": "Accesorios",
        "image_url": "https://picsum.photos/300?4"
    },
    {
        "name": "Denim Jacket",
        "description": "Chaqueta denim oversized",
        "price": 1099.99,
        "stock": 10,
        "category": "Chaquetas",
        "image_url": "https://picsum.photos/300?5"
    },
    {
        "name": "Street Sneakers",
        "description": "Tenis casuales urbanos",
        "price": 1499.99,
        "stock": 12,
        "category": "Calzado",
        "image_url": "https://picsum.photos/300?6"
    }
]

for item in products:
    Product.objects.get_or_create(
        name=item["name"],
        defaults=item
    )

print("Productos insertados correctamente")
