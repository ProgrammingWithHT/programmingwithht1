
import dbConnection from "../../database/dbConnection";
import userModel from "../..//models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res, next) {
  try {
    await dbConnection();

    // POST API
    if (req.method == 'POST') {
      console.log('hamza');
      let { name, email, password, Repassword } = await req.body;
      if (password !== Repassword) {
        res.status(201).json({ success: false, error: 'password not same!' })
        return;
      }

      password = await bcryptjs.hash(password, 10)

      console.log(name, email, password, Repassword)
      const user = await userModel.create({ name, email, password })
      let a = String(user._id)
      
      const token = jwt.sign({ id: a }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
      })

      const options = {
        expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
      }

      // console.log(token)

      res.status(200).json({ success: true, user })
      // res.status(200).cookies('token', token, options).json({
      //   success: true, user, token,
      // })
      
      return;
    }

    // GET API
    const user = await userModel.find();
    res.status(200).json({ success: true, user })

  } catch (error) {
    res.status(200).json({ success: false, error })
  }
}
