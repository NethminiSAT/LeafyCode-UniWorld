const mongoose = require("mongoose")

const Schema = mongoose.Schema

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Product", productSchema)