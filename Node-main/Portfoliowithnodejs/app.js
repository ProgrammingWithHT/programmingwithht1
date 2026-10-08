const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8000

app.use(express.static(__dirname));
// EXPRESS SPECIFIC STUFF
app.use('/css', express.static('css')) // For serving static files
app.use('/img', express.static('img')) // For serving static files

const home = fs.readFileSync('index.html');
const contact = fs.readFileSync('contact.html');

app.get('/',(req,res)=>{
    console.log("Hello World");
    res.end(home);
})
app.get('/contact',(req,res)=>{
    console.log("Hello World");
    res.end(contact);
})

app.listen(port, ()=> {
    console.log(`app listening at http://localhost:${port}`);
})