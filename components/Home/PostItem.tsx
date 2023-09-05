import { PostsProps } from '@/type';
import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { AiTwotoneCalendar } from 'react-icons/ai'

interface postsDetails {
    post: PostsProps;
}

const PostItem = ({ post }: postsDetails) => {
    return (
        <>
            {post ?
                <div className="rounded overflow-hidden border border-gray-400">
                    <img className="w-full h-[180px] object-cover" src={post.image} alt="sports" />
                    <div className="px-6 py-4">
                        <div className='flex items-center gap-2 mb-2'>
                            <img src="/" alt="" />
                            님의 제안
                        </div>
                        <div className="font-bold text-xl mb-2">{post.title}</div>
                        <div className='flex items-center gap-2 mb-2 text-orange-400'>
                            <AiTwotoneCalendar className="text-[20px]" />
                            {post.date}
                        </div>
                        <div className='flex items-center gap-2 mb-2 text-blue-400'>
                            <HiLocationMarker className="text-[20px]" />
                            {post.location}
                        </div>
                    </div>
                </div>
                : null}
        </>
    )
}

export default PostItem
