const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose');
let records = [];


mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://HamzaTahir:Hhtta31631850@ecommerce.sltargt.mongodb.net/?retryWrites=true&w=majority')  //qasim is database if not have any database than automatically created database with name qasim
.then(()=>{ console.log('connection is on the success')})
.catch((err)=>{console.log(err)})

const postSchema = mongoose.Schema({
    name: String,
})

var PostMessage = mongoose.model('PostMessage', postSchema);



const staticPath = path.join(__dirname + '../public');
console.log(staticPath)
app.use(express.static(staticPath))
app.use(express.urlencoded())
app.use(express.json());

// app.use(express.static(__dirname));

// const home = fs.readFileSync(__dirname + '../public/index.html');

//Get all students
router.get('/', (req, res) => {
  res.send('App is running..');
  // res.end(home);
});

router.post('/sub',async(req,res)=>{


  const {name} = req.body;
  const newPostMessage = new PostMessage({ name })

  try {
      await newPostMessage.save();

      res.status(201).json(newPostMessage );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }

  // console.log(req.body)
  // res.send(`form submitted successfully ${req.body.name} and ${req.body}`)
})


// router.get('/about', (req, res) => {
//   res.send('about this is');
//   // res.end(home);
// });

//Create new record
router.post('/add', (req, res) => {
  res.send('New record added.');
});

//showing demo records
router.get('/demo', (req, res) => {
  res.json([
    {
      id: '001',
      name: 'Smith',
      email: 'smith@gmail.com',
    },
    {
      id: '002',
      name: 'Sam',
      email: 'sam@gmail.com',
    },
    {
      id: '003',
      name: 'lily',
      email: 'lily@gmail.com',
    },
  ]);
});

app.use('/', router);
module.exports.handler = serverless(app);
