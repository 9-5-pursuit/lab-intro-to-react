import React from 'react'
import Post from './Post'

function Posts() {
  return (
    <div className='Posts' style={{border: '1px solid black', padding: '10px', textAlign: 'center', justifyContent: 'center', 
    display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3%'}}>
        <h3>Posts</h3>
        <Post/>
        <Post/>
        <Post/>
        </div>
  )
}

export default Posts