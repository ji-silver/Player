import { PostsProps } from '@/type'
import React, { useEffect } from 'react'
import PostItem from './PostItem';

interface postsDetails {
    posts: PostsProps[];
}

const Posts = ({ posts }: postsDetails) => {
    useEffect(() => {
        console.log(posts)
    }, [])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
            {posts.map((item, index) => (
                <PostItem post={item} key={index} />
            ))}
        </div>
    )
}

export default Posts
