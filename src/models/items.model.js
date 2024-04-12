const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        ratings: {
            type: Number,
            default: 0,
            required: true
        },
        price: {
            type: Number,
            default: 0,
            required: true
        },
        discount: {
            type: Number,
            default: 0,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        review: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review"
            }
        ]
    },
    {
        timestamps: true
    }
);
const Item = mongoose.model('Item', itemSchema)
module.exports = Item