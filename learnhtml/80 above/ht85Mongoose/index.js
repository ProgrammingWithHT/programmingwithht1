// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hamzakart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("connected successfully")
// });
const kittySchema = new mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    const greeting = "My name is: " + this.name;
    console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);
const hamzakitty = new Kitten({ name: 'hamzakitty' });
const hamzakitty2 = new Kitten({ name: 'hamzakitty' });

hamzakitty.save(function (err,k) {
    if (err) return console.error(err);
    // hamzakitty.speak();
});
hamzakitty2.save(function (err,k) {
    if (err) return console.error(err);
    // hamzakitty2.speak();
});

Kitten.find({name:"hamzakitty"},function (err,kitten){
    if (err) return console.error(err);
    console.log(kittens);
})