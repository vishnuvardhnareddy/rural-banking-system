const express = require('express');
const router = express.Router();
const User = require('../models/models.js');

router.get('/enquiry', async (req, res) => {
    const { email } = req.query; // Use req.query for GET requests

    try {
        // Find user by email
        const user = await User.findOne({ email });

        // Check if user exists
        if (user) {
            res.json({ message: 'Your available balance is: ' + user.depositAmount });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Unable to fetch the data' });
    }
});

module.exports = router;
