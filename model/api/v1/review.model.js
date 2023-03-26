const mongoose = require("mongoose");



//Create Rview Schema
const reviewSchema = mongoose.Schema({
    reviewerName: {
        type: String,
        trim: true,
        required: [true, "Reviewer Name is required."]
    },
    email: {
        type: String,
        required: [true, "Reviewer Email is required."]
    },
    productId: {
        type: String,
        required: [true, "Product id is required."]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required."]
    },
    review: {
        type: String,
        trim: true,
        required: [true, "Review Description is required."]
    }
}, { timestamps: true });


const Review = mongoose.model("Review", reviewSchema);


module.exports = Review;