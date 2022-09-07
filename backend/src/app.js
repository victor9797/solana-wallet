const express = require('express')
const app = express()
const router = require('./routes/index')
const bodyParser = require('body-parser')
require('dotenv').config();

// Setup
const port = process.env.PORT || 3000; 
app.set('port', port)
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// Routes
app.use('/api', router)

// Start
app.listen(port, () => {
    console.log(`Backend running on port ${port}`)
})