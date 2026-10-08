import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv'
import contactrouter from './routes/userRoute.js'


dotenv.config()
const app = express();


app.use(express.json())
app.use(cors());
app.use('/',contactrouter)



mongoose.connect(process.env.CONNECTION_URLD, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)))
  .catch((error) => console.log(`Error did not connect`));
