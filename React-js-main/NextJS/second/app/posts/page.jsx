import { getAllPosts } from '@/utils/features'
import React from 'react'

const page = async() => {
    const posts = await getAllPosts()
  return (
    <div style={{}}>
        {
            posts.map((i)=>{
                return <div key={i.userId}>{i.title}</div>
            })
        }
    </div>
  )
}

export default page