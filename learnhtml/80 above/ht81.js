////////////Inserting data in mongodb//////////

// use hamzaKart
// This below line can be used to insert one object 
db.items.insertOne({name: "Samsung 30s", 
price: 22000, rating: 4.5, 
qty: 233, sold: 98})  //this items is called collections

// This below line can be used to insert Many object 
db.items.insertOne([{name: "Nokia", 
price: 100,sold: 10},{name: "Samsung 30s", 
price: 22000, rating: 4.5, 
qty: 233, sold: 98}])  //this items is called collections


/////////////Searing data in mongodb///////////////

// use hamzaKart
// This query will return all the objects with rating equal to 3.5
db.items.find({rating: 3.5})
db.items.find({rating: {$gte: 3.5}})     //gte means >=
db.items.find({rating: {$gt: 3.5}})     //gt means >

// ___________And operator
db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})

db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})   //lt means <

// __________OR operator
db.items.find({
    $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] 
})


////////Delete object////////
// show dbs 
// use hamzaKart
// show collections

db.items.find({price: 22000})

// Deleting items from the Mongo Database
db.items.deleteOne({price: 22000})
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteMany({price: 129000})


/////////Updata object//////////
// show dbs 
// use harryKart
// show collections

db.items.find()
db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}})
db.items.find()
db.items.updateMany({name: "Moto 30s"}, {$set: {price: 3, rating: 1}})


