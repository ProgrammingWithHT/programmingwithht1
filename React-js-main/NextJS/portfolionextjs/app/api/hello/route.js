import contactus from "@/model/contactus";
import { connectDB } from "@/utils/database"
import { NextResponse } from "next/server";


export async function GET(request) {
  try {
    await connectDB();
    const user = await contactus.find();
    return NextResponse.json({
      success: true, user
    })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
export async function POST(request) {
  try{
    const { fname, lname, email, comment } = await request.json();
    const user = await contactus.create({fname,lname,email,comment})
    return NextResponse.json({success:true,user})
  }catch(error){
    return NextResponse.json({success:false,error})
  }
}
