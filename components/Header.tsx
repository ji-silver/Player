import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { HiPencilSquare, HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";
const USER_IMAGE = "https://res.cloudinary.com/jisilver/image/upload/v1690546283/upload/l9wb59xf1luissmkmpso.png"

const Header = () => {
    return (
        <div className='flex justify-between p-5 border-b-[2px]'>
            {/* <Image src="/" alt="logo" fill /> */}
            로고
            <div className='flex gap-4'>
                <CustomButton containerStyles='bg-black text-white rounded-full flex items-center' title="글쓰기" icon textStyles='hidden sm:block'><HiPencilSquare /></CustomButton>
                <CustomButton containerStyles="text-gray-500 border-[1px] rounded-full flex items-center" title="로그인" icon textStyles='hidden sm:block'><HiOutlineArrowLeftOnRectangle /></CustomButton>
                <Image src={USER_IMAGE} width={40} height={40} alt="user image" className='rounded-full' />
            </div>
        </div>
    )
}

export default Header
