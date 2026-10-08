import React from 'react'
import { Post } from './Post/Post'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';

export const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts)
  console.log(posts,'len')

  return (

    !posts ? <CircularProgress sx={{position:'relative',top:"50%",left:'50%'}}/> : <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: "1" }}>
      {
        posts.map((post,id) => (
          <Post posts={post} key={id} setCurrentId={ setCurrentId }/>
        ))
      }
    </div>

  )
}