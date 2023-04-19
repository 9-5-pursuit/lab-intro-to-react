import React from 'react';

import Post from './Post.js';

function Posts() {
    return (
        <div className='posts'>
        <h3>Posts</h3>
        <Post />
        <Post />
        <Post />
        </div>
    )
}

export default Posts;