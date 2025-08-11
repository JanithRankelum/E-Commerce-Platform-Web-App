const mongoose = require('mongoose');

const userAddressSchema = new mongoose.Schema({
    name: { required: true, type: String },
    address: { required: true, type: String },
})

module.exports = mongoose.model('useraddress', userAddressSchema);