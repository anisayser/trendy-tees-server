const express = require("express");
const routes = express.Router();


//Controllers
const productsControllers = require("../../../controllers/api/v1/products.controllers");

//HTTP METHODS
routes.route("/")
    .get(productsControllers.getAllProducts)
    .post(productsControllers.addProduct)

routes.route("/:id").get(productsControllers.getProductById)
    .patch(productsControllers.updateProductById)
    .delete(productsControllers.deleteProductById)

module.exports = routes;