const mongoose = require('mongoose');
const validator = require('validator');
import bcryptjs from "bcryptjs";
import { Jwt } from "jsonwebtoken";

const userSchema = new mongoose.Schema({

    name: {
        type:String,
        required: true,
        maxlength: [30,"Name cannot exceed 30 characters"],
        minlength: [4 , "Name should have more than 4 characters"]
    },
    email: {
        type: String,
        required: true,
        // unique:true,
        validate: [validator.isEmail, "Please Enter a valid Email"]
    },
    password: {
        type: String,
        required:true,
        minlength: [8, "Please should be greater than 8 characters"],
        select: false
    },
    avatar: {
        type:String,
        // required: true
        default: 'photo'
    },
    role: {
        type:String,
        default:"user"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.post('save',{document:false,query:true},async function(next){
    console.log('hiHMa: ',this.password)
//     if(!this.isModified('password')) {
//         next();
//     }
    // this.password = await bcryptjs.hash(this.password,10)
    next();
})

userSchema.method.getJWTtoken = function(){
    console.log('jwt_token trigger')
    // return Jwt.sign(
    //     {id:this._id},
    //     process.env.JWT_SECRET,{
    //     expiresIn: process.env.JWT_EXPIRE, 
    // });
}

module.exports = mongoose.models.User || mongoose.model("User",userSchema)