import React from 'react'
import mongoose from 'mongoose'

const dbConnection = async() => {
    try {
        const { connection } = await mongoose.connect(process.env.DB_CONNECTION)
        console.log(process.env.DB_CONNECTION)
        console.log(`Database connected successfully at ${connection.host}`)
    } catch (error) {
        console.log('Error: ', error)
    }
}

export default dbConnection