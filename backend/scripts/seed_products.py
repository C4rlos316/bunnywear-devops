from products.models import Product

products = [
    # HOODIES (Sudaderas)
    {
        "name": "Oversized Hoodie Black",
        "description": "Sudadera oversize negra estilo urbano con bolsillos profundos",
        "price": 899.99,
        "stock": 15,
        "category": "Hoodies",
        "image_url": "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "Vintage Gray Hoodie",
        "description": "Sudadera gris lavado con logo bordado retro",
        "price": 849.99,
        "stock": 18,
        "category": "Hoodies",
        "image_url": "https://images.unsplash.com/photo-1542406775-ade58c52d2e4?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "Tech Hoodie Navy",
        "description": "Sudadera técnica azul marino con logo en la espalda",
        "price": 1199.99,
        "stock": 12,
        "category": "Hoodies",
        "image_url": "https://images.unsplash.com/photo-1729780922545-8e940500c172?w=600&h=800&fit=crop&auto=format&q=80"
    },

    # CAMISETAS (Tees)
    {
        "name": "Urban Black Tee",
        "description": "Playera negra minimalista con estampado frontal",
        "price": 399.99,
        "stock": 30,
        "category": "Playeras",
        "image_url": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "White Graphic Tee",
        "description": "Playera blanca con gráfico grande en el centro",
        "price": 429.99,
        "stock": 28,
        "category": "Playeras",
        "image_url": "https://images.unsplash.com/photo-1618251824294-1f69e3516d4c?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "Oversized Crop Tee",
        "description": "Playera oversized color negro con corte crop",
        "price": 449.99,
        "stock": 20,
        "category": "Playeras",
        "image_url": "https://images.unsplash.com/photo-1589340848402-c5ec1ca47d7f?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "Striped Classic Tee",
        "description": "Playera a rayas blancas y negras estilo clásico",
        "price": 379.99,
        "stock": 35,
        "category": "Playeras",
        "image_url": "https://images.unsplash.com/photo-1768696081821-426e320a387e?w=600&h=800&fit=crop&auto=format&q=80"
    },

    # PANTALONES
    {
        "name": "Cargo Joggers Black",
        "description": "Pantalón cargo negro estilo streetwear con bolsillos laterales",
        "price": 799.99,
        "stock": 20,
        "category": "Pantalones",
        "image_url": "https://images.unsplash.com/photo-1518292309104-b0ee1cfba4cc?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "Slim Fit Chinos Khaki",
        "description": "Pantalón chino beige ajustado para oficina o casual",
        "price": 649.99,
        "stock": 22,
        "category": "Pantalones",
        "image_url": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "Wide Leg Pants Navy",
        "description": "Pantalón de pierna ancha azul marino mezclilla",
        "price": 749.99,
        "stock": 16,
        "category": "Pantalones",
        "image_url": "https://images.unsplash.com/photo-1746591847545-33d872de8411?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "Distressed Jeans Blue",
        "description": "Jeans azul con roturas diseñadas estilo grunge",
        "price": 899.99,
        "stock": 14,
        "category": "Pantalones",
        "image_url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop&auto=format&q=80"
    },

    # CHAQUETAS
    {
        "name": "Denim Jacket Classic",
        "description": "Chaqueta denim oversized clásica azul oscuro",
        "price": 1099.99,
        "stock": 10,
        "category": "Chaquetas",
        "image_url": "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "Leather Jacket Black",
        "description": "Chaqueta de cuero sintético negro con cremallera diagonal",
        "price": 1399.99,
        "stock": 8,
        "category": "Chaquetas",
        "image_url": "https://images.unsplash.com/photo-1727515546577-f7d82a47b51d?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "Bomber Jacket Olive",
        "description": "Chaqueta bomber oliva con ribete elástico en puños",
        "price": 999.99,
        "stock": 13,
        "category": "Chaquetas",
        "image_url": "https://images.unsplash.com/photo-1594587639708-095eb3778067?w=600&h=800&fit=crop&auto=format&q=80"
    },

    # ACCESORIOS
    {
        "name": "Street Cap BunnyWear",
        "description": "Gorra urbana gris con logo bordado de palma",
        "price": 299.99,
        "stock": 25,
        "category": "Accesorios",
        "image_url": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "Beanie Winter Knit",
        "description": "Gorro tejido para invierno con forro polar",
        "price": 249.99,
        "stock": 32,
        "category": "Accesorios",
        "image_url": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "Canvas Backpack",
        "description": "Mochila de lona gris con compartimentos múltiples",
        "price": 679.99,
        "stock": 11,
        "category": "Accesorios",
        "image_url": "https://images.unsplash.com/photo-1550253594-356b2f788907?w=600&h=800&fit=crop&auto=format&q=80"
    },

    # CALZADO
    {
        "name": "Street Sneakers White",
        "description": "Tenis blancos casuales urbanos con suela gruesa",
        "price": 1499.99,
        "stock": 12,
        "category": "Calzado",
        "image_url": "https://images.unsplash.com/photo-1608379743498-ac08f6d022ba?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "High Top Sneakers Black",
        "description": "Tenis negros altos de tela",
        "price": 1599.99,
        "stock": 9,
        "category": "Calzado",
        "image_url": "https://images.unsplash.com/photo-1616466583731-6cfe6d117b1b?w=600&h=800&fit=crop&auto=format&q=80"
    },
    {
        "name": "Casual Loafers Brown",
        "description": "Zapatos tipo loafer café para look casual elegante",
        "price": 1299.99,
        "stock": 14,
        "category": "Calzado",
        "image_url": "https://images.unsplash.com/photo-1777987601447-266e128de448?w=600&h=800&fit=crop&auto=format&q=80"
    }
]

for item in products:
    Product.objects.get_or_create(
        name=item["name"],
        defaults=item
    )

print(" 20 productos insertados correctamente")
