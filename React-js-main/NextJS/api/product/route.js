

import { connectDB } from "../../../utils/database"

export async function GET(request) {
    // await connectDB();
    const products = [
        {name: 'HP',price: 100,category: 'Laptop'},
        {name: 'DELL',price: 200,category: 'Laptop'},
    ]

    return new Response(JSON.stringify({success:true,products}),{status:200})
}
// export async function GET(request) {
//     return new Response(JSON.stringify({name: 'ham'}),{status:200})
//   }