



























// RESIZE OBSERVER IN JS
// const box = document.querySelector('.box');
// const container = document.querySelector('.container');

// const observer = new ResizeObserver((entries)=>{
//     console.log(entries)

// })

// observer.observe(box)
// observer.observe(container)

















// Learn Express middleware
// Middleware is a function or program or something that is going to run between the that the server gets the request and the time that the server sends the request out to the 
// client so when i click refresh here i'm sending a request to the server and that gets to the server and this app get processes it and middleware is anything that happens 
// between the time the server gets the request and the time that the server sends out a response so in definition this function right here (/user) for our app get users is 
// actually a middleware because it's happening in between beginning of the response and the sending of the response
//
//
//
// const express = require('express');
// const app = express();

// app.use(logger) //Global level middleware

// app.get('/',(req,res,next)=> {
//     console.log("home")
//     res.send("home page")
//     next()
// })

// app.get('/users',auth,(req,res)=> {
//     console.log(`users is admin = ${req.admin}`)
//     res.send("users page")
// })

// function logger(req,res,next) {
//     console.log('LOG');
//     next();
// }
// function auth(req,res,next) {
//     if(req.query.admin === 'true'){
//         req.admin = true
//         next()
//     }else {res.send('No auth')}
// }

// app.listen(3000)











































// const calc = (n)=> {
//     return (n*(n+1)/2);
// }

// const memoize = (fun)=> {
//     let cache = {};
//     return function(...args){
//         let n = args[0];
//         if(n in cache) {
//             console.log("cache",cache);
//             return cache[n];
//         }else {
//             console.log("calculating first time",cache)
//             let result = fun(n);
//             cache[n] = result
//             return result
//         }
//     }
// }

// let a = memoize(calc);

// console.log(a(5))
// console.log(a(5))

// const ab = {name: "hamza"};
// console.log('name' in ab)


// const myfunction = (a) => {
//     console.log("this is a: ",a);
//     let c = 2;
//     console.log("this is a: ",a);
//     return function(b) {
//         return a+b+c;
//     }
// }
// let fun = myfunction(5);
// console.log(fun(3))
// console.log(fun(3))

