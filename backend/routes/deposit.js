// routes/deposit.js
const express = require('express');
const router = express.Router();
const User = require('../models/models.js');

router.post('/deposit', async (req, res) => {
    const { accountNumber, mobileNumber, email, depositAmount, accountantName } = req.body;

    try {
        // Check if user exists
        let user = await User.findOne({ email });

        if (user) {
            // Update deposit amount
            user.depositAmount += depositAmount;
            await user.save();
            res.json({ message: 'Deposit updated successfully!  '+user.depositAmount });
            //res.json({message1:'our admin will collect money for depositing'})
        } else {
            // Create new user
            user = new User({
                accountNumber,
                mobileNumber,
                email,
                depositAmount,
                accountantName,
                persnolLoan
            });
            await user.save();
            res.json({ message: 'Deposit added successfully!' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
