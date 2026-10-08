import { NextResponse } from "next/server"


export async function GET(request) {
  return new Response(JSON.stringify({name: 'hamza'}),{status:200})
}
// export default async function handler(req, res) {

//   res.status(200).json({ text: 'Hello' });
// }