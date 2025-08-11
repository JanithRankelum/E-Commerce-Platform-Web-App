const mongoose = require('mongoose');

const snackandchipsSchema = new mongoose.Schema({
    id: { required: true, type: String },
    category: { required: true, type: String },
    name: { required: true, type: String },
    price: { required: true, type: String },
    model: { required: true, type: String },
    quantity: { required: true, type: String },
    description: { required: true, type: String },
    specification: { required: true, type: String },
})

module.exports = mongoose.model('snackandchips', snackandchipsSchema);