const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())   //use to get data from form

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('demo.pug', params);
})

app.post('/', (req, res)=>{
    console.log(req.body); //can be used to get all value of form in terminal they display in json form file in terminal
    let name = req.body.name
    let lastname = req.body.lastname
    let email = req.body.email
    let Phone = req.body.Phone
    let more = req.body.more

    let outputToWrite =`\nThe name of the Student is: ${name}\nThe Last Name of the Student is: ${lastname}\nE-mail: ${email}\nPhone Number: ${Phone}\nMore about him/her: ${more}`;

    fs.appendFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('demo.pug', params);

})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
