import { getAllUsers } from '@/utils/features'
import Link from 'next/link';
import React from 'react'

//Data Fetching Techniques

//In npm run dev by default SSR server-side-rendering kohe be parameter dado npm run dev ma SSR he hoga
// SSR fetch data whenever visit on the page it's dynamical fetcing
//In production by default SSG npm run dev make project in SSG mode and npm start run production project if write npm run dev than they again our project convert into non-production mode in SSR
// SSG fetch data before user visit on page it's static fetching
// SSG ma fetching phaly sa he hoa hota ha


const page = async() => {
  const users = await getAllUsers();
//   console.log(users)
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
        {
            users?.map((i)=>{
                return <Link key={i.key} href={`user/${i.id}`}>{i.name}</Link>
            })
        }
    </div>
  )
}

export default page




