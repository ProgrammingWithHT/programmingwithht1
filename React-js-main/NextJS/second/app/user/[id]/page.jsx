import { getUserDatail, getUserPosts } from '@/utils/features'
import React, { Suspense } from 'react'
import Posts from './posts'
import {notFound} from 'next/navigation'

// export const dynamicParams = false; //make dynamic fetching off

export const generateStaticParams=async()=>{ //name same hona chaya jo offical website per ha static fetch bana ki
  
  // we static generate these 4 ids users
  return [
    {id:"1",},
    {id:"2",},
    {id:"3",},
    {id:"4",},
  ]
}

export const generateMetadata = async({params})=>{
  // console.log(params.id)
  const user = await getUserDatail(params.id)
  return {
  title: `${user.name} Profiles`,
  description: 'with Programmingwithht',
  }
}

// IMPORTANT POINT
// we think it's waste of time beacuse of fetch data using
// await in above or below component don't wory nextjs manage
// it's because of SSR or SSG

const page = async({params}) => {
  // console.log(params.id)
  const user = await getUserDatail(params.id)
  if(!user.id) return notFound()
    const post = getUserPosts(params.id);
    // console.log(user)
  return (
    <div>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>

        <Suspense fallback={<div>Loading...</div>}>

          <Posts post={post}/>

        </Suspense>


    </div>
  )
}

export default page