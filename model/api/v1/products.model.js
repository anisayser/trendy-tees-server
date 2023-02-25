const mongoose = require("mongoose");


//Product Schema
const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required"],
        trim: true,
        unique: true,
        minLength: [5, "Product title must be at least 5 charecters."],
        maxLength: [100, "Product title must be between 100 charecters."],
    },
    price: {
        type: Number,
        required: [true, "Product Price is required."]
    },
    categories: {
        type: Array,
        required: [true, "Product category is required."],
    },
    tags: {
        type: Array,
        required: [true, "Product tags is required."],
    },
    shortDescription: String,
    description: {
        type: String,
        trim: true,
        required: [true, "Product description is required."]
    },
    stock: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: {
            values: ["in-stock", "out-of-stock"],
            message: "Product stock can't be {VALUE}, it must be in-stock/out-of-stock."
        }
    },
    size: {
        type: Array,
        required: [true, "Product Size is required."]
    },
    colors: {
        type: Array,
        required: [true, "Product Colors is required."]
    },
    ratings: {
        type: Array,
    },
    reviews: {
        type: Array
    },
    image: {
        type: String,
        trim: true,
        required: [true, "Product Image is required"]
    }
}, { timestamps: true });

productSchema.pre("save", function (next) {
    if (this.stock === 0) {
        this.status = "out-of-stock"
    }
    next();
})

//PRODUCT MODEL
const Product = mongoose.model("Product", productSchema);

module.exports = Product;


/* const products = [
    {
        title: "Diamond Halo Stud Eget",
        price: 10,
        categories: ["Men", "Home & Living", "Youth & Baby"],
        tags: ["L", "M", "XL", "XXL", "Red", "Green", "Blue", "Men"],
        stock: 30,
        status: "in-stock",
        size: ["M", "L", "XL", "XXL"],
        colors: [{ title: "Red", colorCode: "#FF0000" }, { title: "Green", colorCode: "#008000" }, { title: "Blue", colorCode: "#0000FF" }],
        ratings: [5, 3, 2, 1, 4, 2, 3, 1, 4, 2, 3, 5],
        reviews: [{ name: "John", email: "john@gmail.com", review: "This product is Amazing. everyone should try this." }],
        image: "https://i.postimg.cc/zfRs4f6n/8-68f787cb-5ac0-4024-9ad0-c9c53a957e5b-260x322.jpg",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque..",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa",
    },
    {
        title: "Diamond Halo Stud Cum",
        price: 5,
        categories: ["Phone Case", "Youth & Baby"],
        tags: ["Creative"],
        stock: 150,
        status: "in-stock",
        size: ["L"],
        colors: [{ title: "Black", colorCode: "#000" }, { title: "White", colorCode: "#fff" }, { title: "DeepPink", colorCode: "#FF1493" }],
        ratings: [5, 3, 2, 1, 4, 2, 3, 1, 4],
        reviews: [{ name: "Shane", email: "Shane@gmail.com", review: "This product is Amazing. everyone should try this." }],
        image: "https://i.postimg.cc/QNfhn7GR/4-260x322.jpg",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque..",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa",
    },
    {
        title: "Diamond Halo Stud Dolor",
        price: 9,
        categories: ["Men", "Home & Living"],
        tags: ["XL", "XXL", "White", "Green", "Black", "Men"],
        stock: 90,
        status: "in-stock",
        size: ["XL", "XXL"],
        colors: [{ title: "White", colorCode: "#fff" }, { title: "Green", colorCode: "#008000" }, { title: "Black", colorCode: "#000" }],
        ratings: [5, 3, 2, 1, 1, 4, 2, 3, 5],
        reviews: [{ name: "Brock", email: "Brock@gmail.com", review: "This product is Amazing. everyone should try this." }],
        image: "https://i.postimg.cc/qM8RDRwn/5-260x322.jpg",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque..",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa",
    },
    {
        title: "Diamond Halo Stud Donec",
        price: 150,
        categories: ["Women", "Youth & Baby"],
        tags: ["M", "L", "XL", "White", "Blue", "Black", "Women"],
        stock: 400,
        status: "in-stock",
        size: ["M", "L", "XL"],
        colors: [{ title: "White", colorCode: "#fff" }, { title: "Black", colorCode: "#000" }, { title: "Blue", colorCode: "#0000FF" }, { title: "DeepPink", colorCode: "#FF1493" }],
        ratings: [5, 1, 4, 2, 3, 1, 4, 2, 3, 5],
        reviews: [{ name: "Tina", email: "Tina@gmail.com", review: "This product is Amazing. everyone should try this." }],
        image: "https://i.postimg.cc/XqKT6Tpj/6-260x322.jpg",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque..",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa",
    },
    {
        title: "Liamond Halo Stud Aenean",
        price: 7,
        categories: ["Phone Case", "Men", "Women"],
        tags: ["Black", "L"],
        stock: 300,
        status: "in-stock",
        size: ["L"],
        colors: [{ title: "Black", colorCode: "#000" }],
        ratings: [5, 3, 2, 1, 4, 2, 3, 1, 4, 2, 3, 5, 4],
        reviews: [{ name: "Dwayne", email: "dwayne@gmail.com", review: "This product is Amazing. everyone should try this." }],
        image: "https://i.postimg.cc/26vZrfhB/3-33610b61-9e4e-4a86-978a-5729b9e851a9-900x900.webp",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque..",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa",
    },
    {
        title: "Kiamond Halo Stud Cum",
        price: 13,
        categories: ["Women"],
        tags: ["Women", "M", "L", "XL", "XXL", "Black", "White"],
        stock: 300,
        status: "in-stock",
        size: ["M", "L", "XL", "XXL"],
        colors: [{ title: "Black", colorCode: "#000" }, { title: "White", colorCode: "#fff" }],
        ratings: [5, 3, 2, 1, 4, 2, 3, 1, 4, 2, 3, 5, 4, 2],
        reviews: [{ name: "Lorrie", email: "Lorrie@gmail.com", review: "This product is Amazing. everyone should try this." }],
        image: "https://i.postimg.cc/xqDdTkGv/2-194e3a9f-38d1-4300-b6e2-b1b57b04be47-900x900.webp",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque..",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa",
    },
    {
        title: "Hiamond Halo Stud Cum",
        price: 15,
        categories: ["Women", "Youth & Baby"],
        tags: ["Women", "M", "L", "XL", "XXL", "Black", "Red"],
        stock: 0,
        status: "in-stock",
        size: ["M", "L", "XL", "XXL"],
        colors: [{ title: "Red", colorCode: "#FF0000" }, { title: "Black", colorCode: "#000" }, { title: "Blue", colorCode: "#0000FF" }],
        ratings: [5, 3, 2, 1, 4, 2, 3, 1, 4, 2, 3, 5, 4, 3, 2],
        reviews: [{ name: "Julie", email: "Julie@gmail.com", review: "This product is Amazing. everyone should try this." }],
        image: "https://i.postimg.cc/NLqPJYYG/4-f6709f79-271e-4a2e-9856-fa6625a0aec6-900x900.webp",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque..",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa",
    },
    {
        title: "Diamond Halo Stud Ridicu",
        price: 3,
        categories: ["Women", "Youth & Baby", "Home & Living"],
        tags: ["Women", "M", "L", "Black", "White", "Creative"],
        stock: 1000,
        status: "in-stock",
        size: ["M", "L"],
        colors: [{ title: "Black", colorCode: "#000" }, { title: "White", colorCode: "#fff" }],
        ratings: [5, 3, 2, 1, 4, 2, 3, 1, 4, 2, 3, 5, 3, 2, 5],
        reviews: [{ name: "Iliana", email: "Iliana@gmail.com", review: "This product is Amazing. everyone should try this." }],
        image: "https://i.postimg.cc/3wtGnB7d/3-a53abffc-5b67-42d2-b1c3-ec41753d921f-900x900.webp",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque..",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa",
    },
    {
        title: "Qiamond Halo Stud Aenean",
        price: 20,
        categories: ["Men", "Home & Living"],
        tags: ["L", "M", "XL", "XXL", "Green", "Blue", "Men"],
        stock: 0,
        status: "in-stock",
        size: ["M", "L", "XL", "XXL"],
        colors: [{ title: "Green", colorCode: "#008000" }, { title: "Blue", colorCode: "#0000FF" }],
        ratings: [5, 3, 2, 1, 4, 2, 4, 2, 3, 5],
        reviews: [{ name: "John", email: "john@gmail.com", review: "This product is Amazing. everyone should try this." }],
        image: "https://i.postimg.cc/qqGYDqBJ/5-7dc2a4d7-6434-45f9-83ea-98872ab4347c-900x900.webp",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque..",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa",
    },
    {
        title: "Diamond Halo Stud Ligula",
        price: 25,
        categories: ["Women", "Youth & Baby", "Home & Living"],
        tags: ["Women", "M", "L", "Red", "Creative"],
        stock: 140,
        status: "in-stock",
        size: ["M", "L", "XL", "XXL"],
        colors: [{ title: "Red", colorCode: "#FF0000" }],
        ratings: [5, 3, 2, 1, 4, 2, 3, 1, 4, 2, 3, 5, 1, 3, 4, 5, 4],
        reviews: [{ name: "Lana", email: "Lana@gmail.com", review: "This product is Amazing. everyone should try this." }],
        image: "https://i.postimg.cc/mgqH1S34/1-4c5ad550-0588-4735-ad67-146f18eed29e-900x900.webp",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque..",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa",
    },
] */