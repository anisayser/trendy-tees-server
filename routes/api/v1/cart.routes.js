const express = require("express");
const routes = express.Router();


//Controllers
const cartControllers = require("../../../controllers/api/v1/cart.controllers");

//routes
routes.route("/").get(cartControllers.getCartProductsByEmail).post(cartControllers.addToCart);

routes.route("/:id").delete(cartControllers.deleteCartProductById).put(cartControllers.updateCart);

module.exports = routes