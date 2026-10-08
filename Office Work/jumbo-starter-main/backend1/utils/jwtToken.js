// Create Token and saving in cookie
const sendToken = function(user, statusCode, res) {
    console.log("Cookeis: ",process.env.COOKIE_EXPIRE)
    const token = user.getJWTTOKEN();
    console.log("token: ",token)

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // Ensure COOKIE_EXPIRE is set correctly
        ),
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production', // Use Secure in production
        // sameSite: 'None' // Necessary for cross-site cookie setting
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token
    });
};


module.exports = sendToken;
