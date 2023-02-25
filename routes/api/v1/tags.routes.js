const express = require("express");
const routes = express.Router();


//Controllers
const tagsControllers = require("../../../controllers/api/v1/tags.controllers");

//HTTP METHODS
routes.route("/")
    .get(tagsControllers.getAllTags)
    .post(tagsControllers.addTag)

routes.route("/:id")
    .patch(tagsControllers.updateTagById)
    .delete(tagsControllers.deleteTagById)




module.exports = routes;