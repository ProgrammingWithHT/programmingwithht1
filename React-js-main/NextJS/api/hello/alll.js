export async function GET(request) {
    return new Response(JSON.stringify({name: 'hamza'}),{status:200})
  }