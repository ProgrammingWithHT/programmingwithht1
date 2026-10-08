const Transaction = require('../models/transactionModel');
const ErrorHander = require('../utils/errorhander'); // Assuming you have error handling in place
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

// Add Expense
// Add Expense
exports.addExpensive = catchAsyncErrors(async (req, res, next) => {
    console.log('running', req.body);
    console.log(req.user);
    
    const { name, amount } = req.body;
    const userId = req.user.id;

    // Check if required fields are provided
    if (!name || !amount) {
        return next(new ErrorHander('Please provide name and amount', 400));
    }

    // Check if a transaction already exists for the given userId and type 'expense'
    let transaction = await Transaction.findOne({ userId, type: 'expense' });

    if (transaction) {
        // Update existing transaction if found
        transaction.name = name;
        transaction.amount = amount;
        await transaction.save();
        res.status(200).json({
            success: true,
            message: 'Expense updated successfully',
        });
    } else {
        // Create a new transaction if not found
        await Transaction.create({
            name,
            amount,
            userId,
            type: 'expense',
        });
        res.status(200).json({
            success: true,
            message: 'Expense added successfully',
        });
    }
});


// Add Income
exports.addIncome = catchAsyncErrors(async (req, res, next) => {
    const { name, amount } = req.body;
    const userId = req.user.id;

    // Check if required fields are provided
    if (!name || !amount) {
        return next(new ErrorHander('Please provide name and amount', 400));
    }

    // Check if an income transaction already exists for the given userId
    let transaction = await Transaction.findOne({ userId, type: 'income' });

    if (transaction) {
        // Update existing income transaction if found
        transaction.name = name;
        transaction.amount = amount;
        await transaction.save();
        res.status(200).json({
            success: true,
            message: 'Income updated successfully',
        });
    } else {
        // Create a new income transaction if not found
        await Transaction.create({
            name,
            amount,
            userId,
            type: 'income',
        });
        res.status(200).json({
            success: true,
            message: 'Income added successfully',
        });
    } 
});
