const {Schema, model} = require('mongoose');
const mongoose = require("mongoose");

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    points:{type:Number,default:0},
    videoPath: { type: String },
    status:{type:String}
})

module.exports = model('User', UserSchema);