const { deleteProductByIdServices, addProductServices, getAllProductsServices, updateProductByIdServices, getProductByIdServices, getProductsBySearchServices } = require("../../../services/api/v1/products.services");


module.exports.getAllProducts = async (req, res) => {
    try {

        const filters = { ...req.query };

        // console.log(filters);

        const excludeQueries = ["sort", "limit"];
        excludeQueries.forEach(queries => delete filters[queries]);

        // console.log(filters);

        const queries = {};
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            queries.sortBy = sortBy;
        }
        if (req.query.limit) {
            queries.limit = req.query.limit;
        }

        const products = await getAllProductsServices(filters, queries);

        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the products.",
            error: error.message
        })
    }
}

module.exports.addProduct = async (req, res) => {
    try {

        console.log(req.file)

        const result = await addProductServices(req.body);

        res.status(200).json({
            status: "Success",
            message: "Successfuly added the product.",
            data: "result"
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to add the product.",
            error: error.message
        })
    }
}

module.exports.getProductById = async (req, res) => {
    try {
        const product = await getProductByIdServices(req.params.id);

        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the product.",
            error: error.message
        })
    }
}

module.exports.getProductsBySearch = async (req, res) => {
    try {
        const products = await getProductsBySearchServices(req.query.search);

        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the search products.",
            error: error.message
        })
    }
}

module.exports.updateProductById = async (req, res) => {
    try {
        const result = await updateProductByIdServices(req.params.id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Successfuly updated the product.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to update the product.",
            error: error.message
        })
    }
}

module.exports.deleteProductById = async (req, res) => {
    try {
        const result = await deleteProductByIdServices(req.params.id);

        res.status(200).json({
            status: "Success",
            message: "Successfuly deleted the product.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to delete the product.",
            error: error.message
        })
    }
}