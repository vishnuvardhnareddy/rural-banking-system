// routes/withdraw.js
const express = require('express');
const router = express.Router();
const User = require('../models/models.js'); // Ensure your User model is properly set up

// Route to handle withdrawals
router.post('/withdraw', async (req, res) => {
    const { email,withdrawAmount,mobileNumber } = req.body;

    try {
        // Find the user by mobile number
        let user = await User.findOne({ mobileNumber });

        if (!user) {
            // User does not exist
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if deposit amount is sufficient
        if (user.depositAmount < withdrawAmount) {
            return res.status(400).json({ message: 'Insufficient balance' });
        }

        // Proceed with withdrawal
        user.depositAmount -= withdrawAmount; // Deduct the amount
        await user.save();

        res.json({
            message: `Withdrawal successful. Your updated balance is: ${user.depositAmount}`
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to process withdrawal' });
    }
});

module.exports = router;
