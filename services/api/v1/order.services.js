const Order = require("../../../model/api/v1/order.model")


module.exports.getAllOrdersService = async () => {
    const orders = await Order.find({});
    return orders;
}

module.exports.getOrdersByEmailService = async (email) => {
    const orders = await Order.find({ email });
    return orders;
}

module.exports.createOrderService = async (data) => {
    const result = await Order.create(data);
    return result;
}

module.exports.updateOrderService = async (id, data) => {
    const result = await Order.updateOne({ _id: id }, data, { runValidators: true });
    return result;
}

module.exports.deleteOrderService = async (id) => {
    const result = await Order.deleteOne({ _id: id });
    return result;
}