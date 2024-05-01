const mongoose = require("mongoose")

const food = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    discount: {
        type: Boolean,
        default: false
    },
    discountPrice: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
}, { timestamps: true }
)

module.exports = mongoose.model("foods", food)