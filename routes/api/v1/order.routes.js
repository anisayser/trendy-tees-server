const express = require("express");
const routes = express.Router();


//Controllers
const orderControlleres = require("../../../controllers/api/v1/order.controllers");

routes.route("/").get(orderControlleres.getAllOrders).post(orderControlleres.createOrder);

routes.route("/:id").delete(orderControlleres.deleteOrder).patch(orderControlleres.updateOrder);

module.exports = routes;