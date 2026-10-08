import mongoose from "mongoose"

export const connectDB = async()=>{
    try{
        const {connection} = await mongoose.connect(process.env.DB_CONNECTION)
        console.log(process.env.DB_CONNECTION)
        console.log(`Database connected successfully at ${connection.host}`)
    }catch(error){
        console.log('Error: ',error)
    }
}