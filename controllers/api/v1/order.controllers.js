const { getAllOrdersService, createOrderService, updateOrderService, deleteOrderService } = require("../../../services/api/v1/order.services")


module.exports.getAllOrders = async (req, res) => {
    try {
        const orders = await getAllOrdersService();
        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the Orders.",
            error: error.message
        })
    }
}

module.exports.getOrdersByEmail = async (req, res) => {
    try {
        const orders = await getOrdersByEmailService(req.query.email);
        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the Orders.",
            error: error.message
        })
    }
}

module.exports.createOrder = async (req, res) => {
    try {
        const result = await createOrderService(req.body);
        res.status(200).json({
            status: "Success",
            message: "Order has created Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to Create the Order.",
            error: error.message
        })
    }
}

module.exports.updateOrder = async (req, res) => {
    try {
        const result = await updateOrderService(req.params.id, req.body);
        res.status(200).json({
            status: "Success",
            message: "Order has updated Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to update the Order.",
            error: error.message
        })
    }
}

module.exports.deleteOrder = async (req, res) => {
    try {
        const result = await deleteOrderService(req.params.createOrderService);
        res.status(200).json({
            status: "Success",
            message: "Order has deleted Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to delete the Order.",
            error: error.message
        })
    }
}