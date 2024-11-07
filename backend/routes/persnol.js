// routes/personalLoan.js
const express = require('express');
const router = express.Router();
const User = require('../models/models.js'); // Assuming your model is named "User"

// Route to handle personal loan applications
router.post('/personalLoan', async (req, res) => {
    const { accountName, accountNumber, email, loanAmount } = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });

        if (user) {
            // User exists, add or update the personalLoan field
            user.persnolLoan += loanAmount;
            //console.log(loanAmount)
            await user.save();
            res.json({ message: 'amount is sended to given account number:  '+user.persnolLoan });
        } else {
            // User does not exist, create a new record
            user = new User({
                accountName,
                accountNumber,
                mobileNumber,
                email,
                depositAmount,
                personalLoan: loanAmount
            });
            await user.save();
            res.json({ message: 'New user created with personal loan information.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to process the loan application.' });
    }
});

module.exports = router;
