const express = require("express");
const routes = express.Router();


//Controllers
const categoryControllers = require("../../../controllers/api/v1/category.controllers");

//HTTP METHODS
routes.route("/")
    .get(categoryControllers.getAllCategories)
    .post(categoryControllers.addCategory)

routes.route("/:id")
    .patch(categoryControllers.updateCategoryById)
    .delete(categoryControllers.deleteCategoryById)




module.exports = routes;