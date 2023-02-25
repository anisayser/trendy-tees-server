const Tag = require("../../../model/api/v1/tags.model");


module.exports.getAllTagsServices = async () => {
    const tags = await Tag.find({});
    return tags;
}

module.exports.addTagServices = async (data) => {
    const result = await Tag.create(data);
    return result;
}

module.exports.updateTagByIdServices = async (id, data) => {
    const result = await Tag.updateOne({ _id: id }, data);
    return result;
}

module.exports.deleteTagByIdServices = async (id) => {
    const result = await Tag.deleteOne({ _id: id });
    return result;
}