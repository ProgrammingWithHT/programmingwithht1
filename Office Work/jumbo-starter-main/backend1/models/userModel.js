const mongoose = require('mongoose');
const validator = require('validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({

    firstName :{
        type:String,
        required: true,
        maxlength: [10,"Name cannot exceed 10 characters"],
        minlength: [2 , "Name should have more than 2 characters"]
    },
    lastName :{
        type:String,
        required: true,
        maxlength: [10,"Name cannot exceed 10 characters"],
        minlength: [2 , "Name should have more than 2 characters"]
    },
    email: {
        type: String,
        required: true,
        unique:true,
        validate: [validator.isEmail, "Please Enter a valid Email"]
    },
    password: {
        type: String,
        required:true,
        minlength: [8, "Please should be greater than 8 characters"],
        select: false
    },
    role: {
        type:String,
        default:"user"
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
    profileImage: {
        type: String,
        required: false
    },
});

userSchema.pre('save', async function(next){

    if(!this.isModified('password')) {
        next();
    }

    this.password = await bcrypt.hash(this.password,10);

})

// jWT TOKEN
userSchema.methods.getJWTTOKEN = function () {
    return jwt.sign({id:this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
}

// Compare Password
userSchema.methods.comparePassword = async function (enterPassword){ 
    return await bcrypt.compare(enterPassword,this.password);
}

module.exports = mongoose.model("User",userSchema)