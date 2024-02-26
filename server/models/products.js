const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    stock: Number
})

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel