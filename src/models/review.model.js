const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    },
    {
        timestamps: true
    }

);
const Review = mongoose.model('Review', reviewSchema)
module.exports = Review