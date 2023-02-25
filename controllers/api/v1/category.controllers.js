const { getAllCategoriesServices, addCategoryServices, updateCategoryByIdServices, deleteCategoryByIdServices } = require("../../../services/api/v1/category.services");


module.exports.getAllCategories = async (req, res) => {
    try {

        const categories = await getAllCategoriesServices();

        res.status(200).json(categories)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the Categories.",
            error: error.message
        })
    }
}

module.exports.addCategory = async (req, res) => {
    try {
        const result = await addCategoryServices(req.body);

        res.status(200).json({
            status: "Success",
            message: "Successfuly added the Category.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to add the Category.",
            error: error.message
        })
    }
}

module.exports.updateCategoryById = async (req, res) => {
    try {
        const result = await updateCategoryByIdServices(req.params.id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Successfuly updated the Category.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to update the Category.",
            error: error.message
        })
    }
}

module.exports.deleteCategoryById = async (req, res) => {
    try {
        const result = await deleteCategoryByIdServices(req.params.id);

        res.status(200).json({
            status: "Success",
            message: "Successfuly deleted the Category.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to delete the Category.",
            error: error.message
        })
    }
}