const mongoose = require("mongoose");

//Product Schema
const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Category title is required"],
        trim: true,
        unique: true,
        minLength: [3, "Category title must be at least 3 charecters."],
        maxLength: [20, "Category title must be between 20 charecters."],
    },

    description: {
        type: String,
        trim: true,
    },

    image: {
        type: String,
        trim: true,
        required: [true, "Category Image is required"]
    }
}, { timestamps: true });


const Category = mongoose.model("Category", categorySchema);

module.exports = Category;


/* const categories = [
    {
        title: "Men",
        image: "https://i.postimg.cc/63DnYtgb/bn-1-1-1920x1920.jpg"
    },
    {
        title: "Women",
        image: "https://i.postimg.cc/NMYwTHfd/bn-1-2-1920x1920.jpg"
    },
    {
        title: "Phone Case",
        image: "https://i.postimg.cc/VkD740R7/bn-1-3-1920x1920.jpg"
    },
    {
        title: "Home & Living",
        image: "https://i.postimg.cc/3RM2Z3PS/bn-1-4-1920x1920.jpg"
    },
    {
        title: "Youth & Baby",
        image: "https://i.postimg.cc/pddP18ty/bn-1-5-1920x1920.jpg"
    },
    {
        title: "Pillow Case",
        image: "https://i.postimg.cc/T3pk7Y4f/bn-1-6-1920x1920.jpg"
    }
] */