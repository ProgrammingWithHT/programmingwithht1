import { NextResponse } from "next/server"

// run this function by this url
// http://localhost:3000/api/hello/123 

export async function GET(request,{params}) {  
  console.log(params,'hamza tahir')  // { id: '123' } hamza tahir
  const res = await fetch('https://api.agify.io/?name=bella');
  const data = await res.json();

  return NextResponse.json({ data})
}

// export async function GET(request,params) {
//   console.log(params,'hamza tahir')  //{ params: { id: '123' } } hamza tahir
//   const res = await fetch('https://api.agify.io/?name=bella');
//   const data = await res.json();

//   return NextResponse.json({ data})
// }
