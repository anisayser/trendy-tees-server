const Review = require("../../../model/api/v1/review.model")

module.exports.getAllReviewsService = async () => {
    const reviews = await Review.find({});
    return reviews;
}

module.exports.addReviewService = async (data) => {
    const result = await Review.create(data);
    return result;
}

module.exports.getReviewsByProductIdService = async (productId) => {
    const reviews = await Review.find({ productId: productId }).sort({ _id: -1 });
    return reviews;
}

module.exports.updateReviewByIdService = async (id, data) => {
    const result = await Review.updateOne({ _id: id }, data, { runValidators: true });
    return result;
}

module.exports.deleteReviewByIdService = async (id) => {
    const result = await Review.deleteOne({ _id: id });
    return result;
}