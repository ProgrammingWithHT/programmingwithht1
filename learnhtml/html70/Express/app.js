// Create MY First express app

const express = require("express");
const fs = require('fs');   //include this module for readFileSync function 
const app = express();    //first two line require to start express app
const port = 80;   //if we use port 80 than we don't used in our url localhost/home
//                                                                   localhost:80/home same as above line
// if we use another port like 3000 than compulsory to include port  localhost:3000/home

const home = fs.readFileSync("index.html")           //This give error ("index")
const about = fs.readFileSync('./about.html')       //This give error ("./about")

app.get("/", (req, res)=>{ 
    // res.status(200).send("This is homepage of my first express app with Hamza");    // if we write this line than the server turn on only one time even we use nodemon server
    res.end(home);
});

app.get('/about', (req, res)=>{   //SAME AS app.get("/about", (req, res)=>{
    // res.send("This is about page of my first express app with Hamza");    // if we write this line than the server turn on only one time even we use nodemon server
    res.end(about);
});


app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website ProgrammingWithHT");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
