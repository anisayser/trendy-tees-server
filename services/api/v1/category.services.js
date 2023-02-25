const Category = require("../../../model/api/v1/category.model");

module.exports.getAllCategoriesServices = async () => {
    const categories = await Category.find({});
    return categories;
}

module.exports.addCategoryServices = async (data) => {
    const result = await Category.create(data);
    return result;
}

module.exports.updateCategoryByIdServices = async (id, data) => {
    const result = await Category.updateOne({ _id: id }, data);
    return result;
}

module.exports.deleteCategoryByIdServices = async (id) => {
    const result = await Category.deleteOne({ _id: id });
    return result;
}