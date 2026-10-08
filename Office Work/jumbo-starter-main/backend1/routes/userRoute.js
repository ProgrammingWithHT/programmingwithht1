const express = require('express');
const { registerUser, loginUser, logout, getUserDetails, updateProfile, updatePassword,getAllUser} = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router.route('/logout').get(logout);

router.route('/me').get(isAuthenticatedUser,getUserDetails);
router.route('/me/update').put(isAuthenticatedUser,updateProfile);
router.route('/password/update').put(isAuthenticatedUser,updatePassword);

//GEt all user that are not admin
router.route('/get-all-user').get(isAuthenticatedUser,getAllUser);

module.exports = router 