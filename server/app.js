const express = require('express');
const mongoose = require('mongoose');
const workoutRouter = require('./routes/workoutRoutes')
require("dotenv").config();
// express app
const app = express();


// middlewares

app.use(express.json());


//  connecting to database
const dbURL = process.env.URLDB;
mongoose.connect(dbURL,{ useNewUrlParser: true , useUnifiedTopology:true}).then((result)=>{
    console.log('Connected to database');
    // listin to requests
    
    app.listen(process.env.PORT,(()=>{
        console.log("listining to requests ...");
    }));
}).catch((error)=>{
    console.log(error);
});

// routes

app.use('/api/workouts',workoutRouter);

