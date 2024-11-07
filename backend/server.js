// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://vspatlolla2:12venkat@venkat.mau3g.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));
  app.get('/',(req,res)=>{
    res.send("welcome to rural banking system");
  })
// app.js
const depositRoute = require('./routes/deposit.js');
app.use('/api', depositRoute);
const balanceRoute=require('./routes/balance.js');
app.use('/api',balanceRoute);
// app.js or server.js
const personalLoanRoute = require('./routes/persnol.js');
app.use('/api', personalLoanRoute);
// app.js or server.js
const agriculturalLoanRoute = require('./routes/agicultural.js');
app.use('/api', agriculturalLoanRoute);
const withdrawRoute=require('./routes/withdraw.js')
app.use('/api',withdrawRoute);



app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

