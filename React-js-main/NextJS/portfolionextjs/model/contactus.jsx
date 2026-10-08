
import mongoose from "mongoose";
import validator from "validator";

const contactSchema = mongoose.Schema({
    fname: {
        type: String,
        required:true,
        maxlenght:[30,"Name cannot exceed 30 characters"],
        minlength:[2, "Name should have more than 2 characters"]
    },
    lname: {
        type: String,
        required:true,
        maxlenght:[30,"Name cannot exceed 30 characters"],
        minlength:[2, "Name should have more than 2 characters"]
    },
    email: {
        type: String,
        required:true,
        unique:true,
        validate: [validator.isEmail,"Please Enter a valid Email"]
    },
    comment: {
        type: String,
        required:true,
        maxlenght:[500,"Name cannot exceed 500 characters"],
    },
})

var contactus = mongoose.models.contactus || mongoose.model('contactus', contactSchema);
export default contactus;