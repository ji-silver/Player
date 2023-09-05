import { PostsProps } from '@/type';
import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { AiTwotoneCalendar } from 'react-icons/ai'

interface postsDetails {
    post: PostsProps;
}

const PostItem = ({ post }: postsDetails) => {
    return (
        <div className="rounded overflow-hidden border border-gray-400">
            <img className="w-full h-[180px] object-cover" src={post.image} alt="sports" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <div className='flex items-center gap-2 mb-2 text-orange-400'>
                    <AiTwotoneCalendar className="text-[20px]" />
                    {post.date}
                </div>
                <div className='flex items-center gap-2 mb-2 text-blue-400'>
                    <HiLocationMarker className="text-[20px]" />
                    {post.location}
                </div>
                <p className="text-gray-700 text-base">
                    {post.desc}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            </div>
        </div>
    )
}

export default PostItem
