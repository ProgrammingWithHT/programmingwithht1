
// import mongoose from "mongoose";
// const connectDB = async () =>{
//     try{
//         // let client = new MongoClient(uri,options)
//         const {connection} = await mongoose.connect('mongodb://localhost:27017')
//         // client.connect();
//         console.log(`Database connected on ${connection.host}`)
//     }catch(error){
//         console.log("Error",error)
//     }
// }

export async function GET(request) {
  return new Response('Hello, Nextsd.js!')
}
