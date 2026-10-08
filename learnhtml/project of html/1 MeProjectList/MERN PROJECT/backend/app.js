const express = require('express');
// const { json } = require('express/lib/response');
const cookieParser = require('cookie-parser');
const app = express();

const errorMiddleware = require('./middleware/error');

app.use(express.json()); //if not used then console.log(req.body) give : undefined
app.use(cookieParser());

//Route Imports
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const order = require('./routes/orderRoute');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);


// Middleware For Error
app.use(errorMiddleware);

module.exports = app;




// You do not need express.json() and express.urlencoded()
// for GET Requests or delete requests. We only need it for
// post and put(patch) req

// express.json() is a method inbuilt in express to recognize the
// incoming request object as a json object. this method is called as
// middleware in your application using the
// code: app.use(express.json());
