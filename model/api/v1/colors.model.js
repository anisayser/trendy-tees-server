const mongoose = require("mongoose");

//Product Schema
const colorSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Color title is required"],
        trim: true,
        unique: true,
        minLength: [3, "Product title must be at least 3 charecters."],
        maxLength: [10, "Product title must be between 10 charecters."],
    },
    colorCode: {
        type: String,
        trim: true,
        required: [true, "Color code is required."]
    }
}, { timestamps: true });


const Color = mongoose.model("Color", colorSchema);

module.exports = Color;

/* const tags = [
    {
        title: "Red",
        colorCode: "#FF0000"
    },
    {
        title: "Green",
        colorCode: "#008000"
    },
    {
        title: "Blue",
        colorCode: "#0000FF"
    },
    {
        title: "Black",
        colorCode: "#000"
    },
    {
        title: "White",
        colorCode: "#fff"
    },
    {
        title: "DeepPink",
        colorCode: "#FF1493"
    },
    {
        title: "Orange",
        colorCode: "#FFA500"
    },
    {
        title: "Gold",
        colorCode: "#FFD700"
    },
    {
        title: "Gray",
        colorCode: "#808080"
    },
    {
        title: "SkyBlue",
        colorCode: "#87CEEB"
    },

] */