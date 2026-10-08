import { NextResponse } from "next/server"

// run this function by this url
// http://localhost:3000/api/hello/123/234/kasaho

export async function GET(request,{params}) {  
  console.log(params,'hamza gujjar')  // { ids: [ '123', '234', 'kasaho' ] } hamza gujjar
  console.log(params.ids[0],params.ids[1])
  const res = await fetch('https://api.agify.io/?name=bella');
  const data = await res.json();

  return NextResponse.json({ data})
}