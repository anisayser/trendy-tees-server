const { getCartProductsByEmailServices, addToCartServices, deleteCartProductByIdServices, updateCartServices, deleteAllCartProductsServices } = require("../../../services/api/v1/cart.services");


module.exports.getCartProductsByEmail = async (req, res) => {
    try {
        // console.log(req.query);
        const products = await getCartProductsByEmailServices(req.query.email);
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the Cart Products.",
            error: error.message
        })
    }
}

module.exports.addToCart = async (req, res) => {
    try {
        // console.log(req.body);
        const result = await addToCartServices(req.body);
        res.status(200).json({
            status: "Success",
            message: "Successfuly added the Product to the cart.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to add the Cart Product.",
            error: error.message
        })
    }
}

module.exports.updateCart = async (req, res) => {
    try {
        // console.log(req.params.id, req.body);
        const result = await updateCartServices(req.params.id, req.body);
        res.status(200).json({
            status: "Success",
            message: "Successfuly updated the Product to the cart.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to updated the Cart Product.",
            error: error.message
        })
    }
}

module.exports.deleteCartProductById = async (req, res) => {
    try {
        // console.log(req.params.id);
        const result = await deleteCartProductByIdServices(req.params.id);
        res.status(200).json({
            status: "Success",
            message: "Successfuly Deleted the Product from the cart.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to delete the Cart Product.",
            error: error.message
        })
    }
}

module.exports.deleteAllCartProducts = async (req, res) => {
    try {
        // console.log(req.params.id);
        const result = await deleteAllCartProductsServices(req.query.email);
        res.status(200).json({
            status: "Success",
            message: "Successfuly Deleted the Products from the cart.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to delete the Cart Products.",
            error: error.message
        })
    }
}