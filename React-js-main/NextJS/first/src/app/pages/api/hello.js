

// export default function handler(req, res) {
//     res.status(200).json({ text: 'Hello' });
//   }

export async function GET(request) {
  return new Response('Hello, Next.js!')
}