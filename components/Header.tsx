'use client'
import React from 'react'
import Image from 'next/image'
import { useSession, signOut } from "next-auth/react"
import CustomButton from './CustomButton'
import { HiPencilSquare, HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";
import { useRouter } from 'next/navigation'
const USER_IMAGE = "https://res.cloudinary.com/jisilver/image/upload/v1690546283/upload/l9wb59xf1luissmkmpso.png"

const Header = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleButtonClick = () => {
        if (session) {
            signOut({ callbackUrl: "/" });
        } else {
            router.push('/login')
        }
    }
    return (
        <div className='flex justify-between p-5 border-b-[2px]'>
            {/* <Image src="/" alt="logo" fill /> */}
            로고
            <div className='flex gap-4'>
                <CustomButton containerStyles='bg-black text-white rounded-full flex items-center' title="글쓰기" icon textStyles='hidden sm:block'><HiPencilSquare /></CustomButton>
                <CustomButton containerStyles="text-gray-500 border-[1px] rounded-full flex items-center" title={session ? "로그아웃" : "로그인"} handleClick={handleButtonClick} icon textStyles='hidden sm:block'><HiOutlineArrowLeftOnRectangle /></CustomButton>
                <Image src={USER_IMAGE} width={40} height={40} alt="user image" className='rounded-full' />
            </div>
        </div>
    )
}

export default Header
