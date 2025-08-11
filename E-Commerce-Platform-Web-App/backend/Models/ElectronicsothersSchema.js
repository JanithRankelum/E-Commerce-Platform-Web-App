const mongoose = require('mongoose');

const electronicothersSchema = new mongoose.Schema({
    id: { required: true, type: String },
    name: { required: true, type: String },
    price: { required: true, type: String },
    model: { required: true, type: String },
    rating: { required: true, type: String },
    sold: { required: true, type: String },
    description: { required: true, type: String },
    specification: { required: true, type: String },
})

module.exports = mongoose.model('phones', electronicothersSchema);