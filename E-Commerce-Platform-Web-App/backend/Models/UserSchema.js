const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: { required: true, type: String },
    phone: { required: true, type: String },
    name: { required: true, type: String },
    password: { required: true, type: String },
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
})

module.exports = mongoose.model('user', userSchema);