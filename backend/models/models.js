// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    accountNumber: String,
    mobileNumber: String,
    email: { type: String, unique: true },
    depositAmount: { type: Number, default: 0 },
    accountantName: String,
    persnolLoan:{type:Number,default:0},
    agriculturalLoan:{type:Number,default:0},
    seasonalLoan:{type:Number,default:0}
});

module.exports = mongoose.model('bankUser', userSchema);
