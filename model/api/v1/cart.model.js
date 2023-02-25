const mongoose = require("mongoose");


//Create Cart Schema
const cartSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: [true, "Email is required."]
    },
    product: {
        type: Object,
        required: [true, "Cart product is required."]
    }
}, { timestamps: true })

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;