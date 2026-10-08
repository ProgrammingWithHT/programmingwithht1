import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'
// import mongoose from 'mongoose'


// const MONGODB_URI="mongodb+srv://HamzaTahir:Hhtta31631850@ecommerce.sltargt.mongodb.net/?retryWrites=true&w=majority"
// const MONGODB_URI="mongodb://0.0.0.0:27017/"
const MONGODB_URI="mongodb+srv://HamzaTahir:Hhtta31631850@ecommerce.sltargt.mongodb.net/?retryWrites=true&w=majority"
if (!MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}
const uri = MONGODB_URI
// const options = {}
// let client = new MongoClient(uri, options)
// let connectDB = client.connect()
// export default connectDB

export const connectDB = async () => {
  try{
    const client = new MongoClient(uri)
    let con = client.connect();
    console.log(`Database connected on`)
  }catch(error){
    console.log('not connected Error: ')
  }
}
// export const connectDB = async () => {
//   try{
//     const {connection} = await mongoose.connect(uri)
//     console.log(`Database connected on ${connection.host}`)
//   }catch(error){
//     console.log('not connected Error: ')
//   }
// }


// import mongoose from 'mongoose'

// const MONGODB_URI = process.env.MONGODB_URI

// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   )
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     }

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose
//     })
//   }

//   try {
//     cached.conn = await cached.promise
//   } catch (e) {
//     cached.promise = null
//     throw e
//   }

//   return cached.conn
// }

// export default dbConnect
