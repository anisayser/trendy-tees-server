const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("colors")


//middlewares
app.use(cors());
app.use(express.json());


//Routes Import
const productsRoutes = require("./routes/api/v1/products.routes");
const categoryRoutes = require("./routes/api/v1/category.routes");
const tagsRoutes = require("./routes/api/v1/tags.routes");
const colorsRoutes = require("./routes/api/v1/colors.routes");
const cartRoutes = require("./routes/api/v1/cart.routes");
const orderRoutes = require("./routes/api/v1/order.routes");
const reviewRoutes = require("./routes/api/v1/review.routes");

//Routes
app.use("/api/v1/products", productsRoutes)
app.use("/api/v1/categories", categoryRoutes)
app.use("/api/v1/tags", tagsRoutes)
app.use("/api/v1/colors", colorsRoutes)
app.use("/api/v1/cart", cartRoutes)
app.use("/api/v1/orders", orderRoutes)
app.use("/api/v1/reviews", reviewRoutes)



app.get("/", (req, res) => {
    res.send("Trendy Tees Server is Running.")
})




module.exports = app;