const { getAllReviewsService, updateReviewByIdService, deleteReviewByIdService, addReviewService, getReviewsByProductIdService } = require("../../../services/api/v1/review.services");


module.exports.getReviewsByProductId = async (req, res) => {
    try {
        
        const reviews = await getReviewsByProductIdService(req.query.productId);

        res.status(200).json(reviews)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the Reviews.",
            error: error.message
        })
    }
}

module.exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await getAllReviewsService();

        res.status(200).json(reviews)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the Reviews.",
            error: error.message
        })
    }
}
module.exports.addReview = async (req, res) => {
    try {
        const result = await addReviewService(req.body);

        res.status(200).json({
            status: "Success",
            message: "Review Added Successfully.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to Add the Review.",
            error: error.message
        })
    }
}



module.exports.updateReviewById = async (req, res) => {
    try {
        const result = await updateReviewByIdService(req.params.id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Review Updated Successfully.",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to update the Review.",
            error: error.message
        })
    }
}

module.exports.deleteReviewById = async (req, res) => {
    try {
        const result = await deleteReviewByIdService(req.params.id);

        res.status(200).json({
            status: "Success",
            message: "Review deleted Successfully.",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to delete the Review.",
            error: error.message
        })
    }
}