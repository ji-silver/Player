import React from 'react'
import { IoClose } from 'react-icons/io5'
import PostItem from './PostItem'
import { PostsProps } from '@/type';
import { HiLocationMarker } from 'react-icons/hi'
import { AiTwotoneCalendar } from 'react-icons/ai'


const PostModal = ({ post }: { post: PostsProps }) => {
    return (
        <>
            <dialog id="my_modal_1" className="modal p-0 rounded-lg">
                <form method="dialog" className="modal-box">
                    <button className='absolute right-2 top-2 text-bold'>
                        <IoClose className="text-[30px]" />
                    </button>
                    {post ? <>
                        <div>
                            <h2 className='text-[24px] font-bold'>{post.title}</h2>
                            <p className='flex items-center'><HiLocationMarker />{post.location}</p>
                            <p className='flex items-center'><AiTwotoneCalendar />{post.date}</p>
                        </div>
                        <img src={post.image} alt="post image" className='w-full max-h-[300px] object-cover' />
                        {post.desc}
                        <div className='pt-3 flex justify-center'>
                            <span className='bg-black text-white rounded-2xl px-5 py-2 cursor-pointer text-bold'>
                                참여하기
                            </span>
                        </div>
                    </> : null}
                </form>
            </dialog>
        </>
    )
}

export default PostModal
