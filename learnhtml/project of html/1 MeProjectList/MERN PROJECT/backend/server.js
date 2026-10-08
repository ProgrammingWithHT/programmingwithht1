const app = require("./app");

const dotenv = require('dotenv')
const connectDatabase = require('./config/database')

// Handling Uncaught Exception
process.on('uncaughtException',err=> {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
}) //if we write this process in below of of code and write console is above of process code so how console error that's the reaseon why we write process in top of our code 
// console.log(Youtube) Handle this error above code do 

//config

dotenv.config({path:'backend/config/config.env'})

// Connecting to database
connectDatabase()


const server = app.listen(process.env.PORT,()=> {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})


// Unhandled Promise Rejection //means if we write invaild mongo string connection // see video 1hour:17min
process.on('unhandledRejection',err=> {

    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`)

    server.close(()=> {
        process.exit(1);
    })
})
