const Product = require("../../../model/api/v1/products.model")


module.exports.getAllProductsServices = async (filters, queries) => {
    const products = await Product.find(filters).sort(queries.sortBy).limit(queries.limit);
    return products;
}

module.exports.addProductServices = async (data) => {
    const result = await Product.create(data);
    return result;
}

module.exports.getProductByIdServices = async (id) => {
    const product = await Product.findOne({ _id: id });
    return product;
}

module.exports.updateProductByIdServices = async (id, data) => {
    const result = await Product.updateOne({ _id: id }, data);
    return result;
}

module.exports.deleteProductByIdServices = async (id) => {
    const result = await Product.deleteOne({ _id: id });
    return result;
}