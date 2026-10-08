
const ErrorHander = require('../utils/errorhander');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const crypto = require('crypto')


// Register a User 
exports.registerUser = catchAsyncErrors( async(req,res,next)=> {

    console.log(req.body)
    const {firstName,lastName, email, password,confirmPassword,profileImage} = req.body;

    const user = await User.create({
        firstName,lastName,email,password,profileImage
    });

    sendToken(user,201,res);

})

// Login User
exports.loginUser = catchAsyncErrors(async (req,res,next)=> {
    console.log(req.body)
    const data = req.body
    
    const {email,password} = data.email;
    console.log(email,password)

    // Checking if user has given password and email both

    if(!email || !password) {
        return next(new ErrorHander("Please Enter Email & Password",400))
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){return next(new ErrorHander("Invalid email and password",401))}

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched) {
        return next(new ErrorHander("Invalid email or password",401))
    }

    sendToken(user,200,res);

})


// Logout User
exports.logout = catchAsyncErrors(async(req,res,next)=>  {
    res.cookie("token",null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    res.status(200).json({
        success: true,
        message: "Logged OUT",
    })

})


// Get User Details
exports.getUserDetails = catchAsyncErrors(async(req,res,next)=> {

    const user = await User.findById(req.user.id);
   
    res.status(200).json({ 
        success:true,
        user,
    })
 
})

// Get all users who are not admins
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
    // Find users where role is not 'admin'
    const users = await User.find({ role: { $ne: 'admin' } });

    res.status(200).json({
        success: true,
        users, // Return the list of users excluding admins
    });
});

// update User Profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      profileImage: req.body.profileImage
    };

    // if(req.body.avatar !== ''){
    //     const user = await User.findById(req.user.id);
    //     const imageId = user.avatar.public_id;

    //     await cloudinary.v2.uploader.destroy(imageId);

    //     const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //         folder: "avatars",
    //         width: 150,
    //         crop: "scale"
    //     })

    
    //     newUserData.avatar = {
    //         public_id: myCloud.public_id,
    //         url: myCloud.secure_url
    //     }

    // }
    
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  
    res.status(200).json({
      success: true,
    });

});


// update User 
exports.updatePassword = catchAsyncErrors(async(req,res,next)=> {
    console.log(req.body)
    console.log(req.user._id)

    const user = await User.findById(req.user.id).select("+password");

    
    const isPasswordMatched = await user.comparePassword(req.body.currentPassword);
    
    if(!isPasswordMatched) {
        return next(new ErrorHander("Old Password is incorrect",400))
    }
    
    if(req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHander("Password dows not match with confirm password",400))
    }

    user.password = req.body.newPassword
    await user.save();

    sendToken(user,200,res)
 
})