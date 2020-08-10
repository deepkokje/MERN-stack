const express = require('express');
const cors = require('cors');
const  mongoose = require('mongoose');
 
require('dotenv').config();

const app = express();
const port =  process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

const uri = process.env.MONGODB_URL;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex :true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Db connected")
})  


const exerciseRouter = require('./routes/excersice')
const usersRouter = require('./routes/users')

app.use('/users',usersRouter);
app.use('/excercise',exerciseRouter);

app.listen(port, ()=>{
    console.log(`Server is running :${port}`);
});

