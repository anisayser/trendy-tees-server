const express = require("express");
const routes = express.Router();

//Controllers
const reviewController = require("../../../controllers/api/v1/review.controllers");

routes.route("/product").get(reviewController.getReviewsByProductId);

routes.route("/").get(reviewController.getAllReviews).post(reviewController.addReview);

routes.route("/id").patch(reviewController.updateReviewById).delete(reviewController.deleteReviewById);


module.exports = routes;