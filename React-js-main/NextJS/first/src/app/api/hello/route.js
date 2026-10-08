import { NextResponse } from "next/server"


// export async function GET(request) {
//   return new Response(JSON.stringify({name: 'hamza'}),{status:200})
// }


export async function GET(request) {
  const res = await fetch('https://api.agify.io/?name=bella');
  const data = await res.json();

  return NextResponse.json({ data})
}


// export default async function handler(req, res) {

//   res.status(200).json({ text: 'Hello' });
// }