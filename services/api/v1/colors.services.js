const Color = require("../../../model/api/v1/colors.model");


module.exports.getAllColorsServices = async () => {
    const colors = await Color.find({});
    return colors;
}

module.exports.addColorsServices = async (data) => {
    const result = await Color.create(data);
    return result;
}

module.exports.updateColorByIdServices = async (id, data) => {
    const result = await Color.updateOne({ _id: id }, data);
    return result;
}

module.exports.deleteColorByIdServices = async (id) => {
    const result = await Color.deleteOne({ _id: id });
    return result;
}