const { getAllTagsServices, addTagServices, updateTagByIdServices, deleteTagByIdServices } = require("../../../services/api/v1/tags.services");



module.exports.getAllTags = async (req, res) => {
    try {

        const tags = await getAllTagsServices();

        res.status(200).json(tags)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the Tags.",
            error: error.message
        })
    }
}

module.exports.addTag = async (req, res) => {
    try {
        const result = await addTagServices(req.body);

        res.status(200).json({
            status: "Success",
            message: "Successfuly added the Tag.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to add the Tag.",
            error: error.message
        })
    }
}

module.exports.updateTagById = async (req, res) => {
    try {
        const result = await updateTagByIdServices(req.params.id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Successfuly updated the Tag.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to update the Tag.",
            error: error.message
        })
    }
}

module.exports.deleteTagById = async (req, res) => {
    try {
        const result = await deleteTagByIdServices(req.params.id);

        res.status(200).json({
            status: "Success",
            message: "Successfuly deleted the Tag.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to delete the Tag.",
            error: error.message
        })
    }
}