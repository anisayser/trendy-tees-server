const mongoose = require("mongoose");

//Product Schema
const tagSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Tag title is required"],
        trim: true,
        unique: true,
        minLength: [1, "Tag title must be at least 1 charecters."],
        maxLength: [15, "Tag title must be between 15 charecters."],
    }
}, { timestamps: true });


const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;


/* const tags = [
    {
        title: "L",
    },
    {
        title: "M",
    },
    {
        title: "XL",
    },
    {
        title: "XXL",
    },
    {
        title: "Red",
    },
    {
        title: "Green",
    },
    {
        title: "Blue",
    },
    {
        title: "White",
    },
    {
        title: "Black",
    },
    {
        title: "Men",
    },
    {
        title: "Women",
    },
    {
        title: "Street Style",
    },
    {
        title: "Creative",
    },

] */