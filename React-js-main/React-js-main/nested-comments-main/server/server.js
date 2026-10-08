const express = require('express')
const cors = require('cors')
const app = express()

app.use(
    cors({
        origin: "http://127.0.0.1:5500",
        // origin: "*" //allow all link
        method: ['GET','POST']  //by default all all method
    })
)

app.get('/data',(req,res)=>{
    res.json({name: "Kyle", favoriteFood: 'Rice'})
})

app.listen(3000)