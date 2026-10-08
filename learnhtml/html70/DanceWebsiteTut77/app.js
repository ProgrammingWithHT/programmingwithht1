const express = require("express");
const mongoose = require('mongoose');     //mongoose connect to mongod
const bodyparser = require('body-parser');  
const path = require("path"); 
const app = express();
const port = 80;
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{ 
    const params = { }
    res.status(200).render('home.pug', params);
})

// ENDPOINTS
app.get('/contact', (req, res)=>{ 
    console.log("MY name is hamza")
    const params = { }
    res.status(200).render('contact.pug', params);
})


// For Data Base mongoose
mongoose.connect('mongodb://localhost:27017/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});

        // Define data type in Schema
        const contactSchema = new mongoose.Schema({
            name: String,
            phone: String,
            email: String,
            address: String,
            concern: String
        });

        // Make model of Schema
        const Contact = mongoose.model('contact', contactSchema);

        // post request and save data to data base
        app.post('/contact', (req, res)=>{ 
            var myData = new Contact(req.body);
            myData.save().then(()=>{
                res.send("This item has been saved to the database")
            }).catch(()=>{
                res.status(400).send("item was not saved to the databse")
                })
        })

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});