const express = require('express');
const router = express.Router();
const User = require('../models/models.js'); // Assuming your model is named "User"

// Route to handle agricultural loan applications
router.post('/agriculturalLoan', async (req, res) => {
    const { accountName, accountNumber, email, loanAmount } = req.body; // Included accountName

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });

        if (user) {
            // User exists, add or update the agriculturalLoan field
            user.agriculturalLoan = (user.agriculturalLoan || 0) + loanAmount; // Safely add loanAmount to existing amount
            await user.save();
            res.json({ message: 'Amount is sent to the given account number. Your updated agricultural loan balance is: ' + user.agriculturalLoan });
        } else {
            // User does not exist, create a new record
            user = new User({
                accountName,       // Added accountName here
                accountNumber,
                monileNumber,
                depositAmount,
                persnolLoan,     // Added accountNumber here
                email,             // Added email here
                agriculturalLoan: loanAmount // Set initial agriculturalLoan
            });

            await user.save();
            res.json({ message: 'New user created with agricultural loan information.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to process the loan application.' });
    }
});

module.exports = router;
