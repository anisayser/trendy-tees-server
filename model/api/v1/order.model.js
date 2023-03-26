const mongoose = require("mongoose");


//ORDER SCHEMA
const orderSchema = mongoose.Schema({
    status: {
        type: String,
        required: [true, "Order status is required."],
        enum: {
            values: ["pending", "shipped"],
            message: "Status can't be {VALUE} must be pending/shipped"
        },
        default: "pending"
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        trim: true,
    },
    phone: {
        type: Number,
        required: [true, "Phone Number is required."]
    },
    products: {
        type: Array,
        required: [true, "Products is required."]
    },
    paymentMethod: {
        type: String,
        trim: true,
        required: [true, "Payment method is required."]
    },
    country: {
        type: String,
        required: [true, "Country is required."]
    },
    userName: {
        type: String,
        // required: [true, "User Name is required."],
        trim: true
    },
    shipping: {
        address: {
            type: String,
            required: [true, "Address is required."],
            trim: true
        },
        city: {
            type: String,
            required: [true, "City is required."]
        },
        postCode: {
            type: String,
            required: [true, "Post Code is required."]
        }
    },
    billing: {
        address: {
            type: String,
            // required: [true, "Address is required."],
            trim: true
        },
        city: {
            type: String,
            // required: [true, "City is required."]
        },
        postCode: {
            type: String,
            // required: [true, "Post Code is required."]
        }
    }

}, { timestamps: true });


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;