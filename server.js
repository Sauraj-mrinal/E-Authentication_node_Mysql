// to use env file of Db connection
require("dotenv").config();
// now i have to use express also thne first we will requre it 

const express  = require('express');
const cors = require('cors');
// require('./config/dbConnection')
require('./config/dbConnection.js');

const app = express();

app.use(cors());

// error handling 

app.use((err , req,res,next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || " internal server error ";

    res.status(err.statusCode).json({
        message:err.message,
    });
})

app.listen(3600 , ()=> console.log('server is running on port 3000'))









