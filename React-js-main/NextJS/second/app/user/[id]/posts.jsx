import React from 'react'

const posts = async ({post}) => {
    const posts = await post;
    // console.log(posts)
  return (
    <div>posts
        {
            posts.map((i)=>{
                return <h1 key={i.userId}>{i.title}</h1>
            })
        }
    </div>
    
  )
}

export default posts