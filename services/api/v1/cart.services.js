const Cart = require("../../../model/api/v1/cart.model")


module.exports.getCartProductsByEmailServices = async (email) => {
    const products = await Cart.find({ email: email });
    return products;
}

module.exports.addToCartServices = async (data) => {
    const result = await Cart.create(data);
    return result;
}

module.exports.updateCartServices = async (id, data) => {
    const result = await Cart.updateOne({ email: data.email, 'product.productId': id }, data, { runValidators: true });
    // const result = await Cart.updateOne({ $or: [{ email: data.email, 'product.productId': id }, { email: data.email, productId: id }] }, data, { runValidators: true });
    return result;
}

module.exports.deleteCartProductByIdServices = async (id) => {
    const result = await Cart.deleteOne({ _id: id });
    return result;
}