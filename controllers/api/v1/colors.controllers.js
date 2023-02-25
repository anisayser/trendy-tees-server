const { getAllColorsServices, addColorsServices, updateColorByIdServices, deleteColorByIdServices } = require("../../../services/api/v1/colors.services");




module.exports.getAllColors = async (req, res) => {
    try {

        const colors = await getAllColorsServices();

        res.status(200).json(colors)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the Colors.",
            error: error.message
        })
    }
}

module.exports.addColor = async (req, res) => {
    try {
        const result = await addColorsServices(req.body);

        res.status(200).json({
            status: "Success",
            message: "Successfuly added the Color.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to add the Color.",
            error: error.message
        })
    }
}

module.exports.updateColorById = async (req, res) => {
    try {
        const result = await updateColorByIdServices(req.params.id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Successfuly updated the Color.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to update the Color.",
            error: error.message
        })
    }
}

module.exports.deleteColorById = async (req, res) => {
    try {
        const result = await deleteColorByIdServices(req.params.id);

        res.status(200).json({
            status: "Success",
            message: "Successfuly deleted the Color.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to delete the Color.",
            error: error.message
        })
    }
}