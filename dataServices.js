let catalog = [
    {
        "title":"Moonshine Snake Plant",
        "category": "Low-Light Plants",
        "price": 35.99,
        "image": "s334197732908924278_p7_i2_w2884.webp",
        "id":"Lazy"
    },
    {
        "title":"Peperomia Obtipan Green",
        "category": "Low-Light Plants",
        "price": 48.99,
        "image": "PeperomiaOtipan120mmPlantAddictsAnonymous.webp",
        "id":"Lowlight" 
    },
    {
        "title":"Stromanthe Triostar",
        "category": "Pet-Friendly",
        "price":99.99,
        "image": "P-431.webp",
        "id":"Pet Safe" 
    },
    {
        "title":"Monstera Deliciosa",
        "category": "Large-Plants",
        "price":78.99,
        "image": "Monstera-Deliciosa-40cm_1200x.webp",
        "id":"Biggie-Talls" 
    },
    {
        "title":"Ficus Altissima",
        "category": "Large-Plants",
        "price": 140.99,
        "image": "istockphoto-1295815492-170667a.jpg",
        "id":"Ficus" 
    },
    {
        "title":"White-Orchid",
        "category": "Flowers",
        "price": 83.99,
        "image": "1b35e0ca46d58768db046fb0eb3e0346_9_2.webp",
        "id":"Expensive-Orchid" 
    },
    {
        "title":"Pink Anthurium",
        "category": "Flowers",
        "price": 79.99,
        "image": "Calathea-Triostar.jpg",
        "id":"Expensive-Anthurium" 
    },
];

class DataService {
    getProducts()
    {
        return catalog;
    }


}

export default DataService;