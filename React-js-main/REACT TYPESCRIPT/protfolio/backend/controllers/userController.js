
import contactus from "../models/contactus.js";  //if not used .js with contactus than not work this line Remember that



export const createMessage = async(req,res)=>{
    try{
        // console.log(req.body)
        const {fname,lname,email,comment} = req.body;

        const user = await contactus.create({fname,lname,email,comment})

        res.status(200).json({
            success:true,user
        })
    }catch(error){
        res.status(201).json({success:false,error})
    }
}
export const getMessage = async(req,res)=>{
    try{
        const user = await contactus.find();
        console.log(user)
        res.status(200).json({
            success:true,user
        })
    }catch(error){
        res.status(201).json({success:false,error})
    }
}

