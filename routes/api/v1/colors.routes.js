const express = require("express");
const routes = express.Router();


//Controllers
const colorsControllers = require("../../../controllers/api/v1/colors.controllers");

//HTTP METHODS
routes.route("/")
    .get(colorsControllers.getAllColors)
    .post(colorsControllers.addColor)

routes.route("/:id")
    .patch(colorsControllers.updateColorById)
    .delete(colorsControllers.deleteColorById)




module.exports = routes;