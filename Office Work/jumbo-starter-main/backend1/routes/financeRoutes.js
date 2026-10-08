const express = require('express');
const { addExpensive, addIncome} = require('../controllers/financeController.js');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.route('/add-expensive').post(isAuthenticatedUser,addExpensive);
router.route('/add-income').post(isAuthenticatedUser,addIncome);

module.exports = router 