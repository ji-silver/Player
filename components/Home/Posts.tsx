'use client'
import { PostsProps } from '@/type'
import PostItem from './PostItem';
import PostModal from './PostModal';
import { useEffect, useState } from 'react';

declare global {
    interface Window {
        my_modal_1: HTMLDialogElement;
    }
}

const Posts = ({ posts }: { posts: PostsProps[] }) => {
    const [post, setPost] = useState<PostsProps>({} as PostsProps);


    return (
        <div>
            <PostModal post={post} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
                {posts.map((item, index) => (
                    <div key={index} className='cursor-pointer' onClick={() => { window.my_modal_1.showModal(); setPost(item) }}>
                        <PostItem post={item} />
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Posts
