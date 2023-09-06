'use client'
import Image from 'next/image'
import { useSession, signOut } from "next-auth/react"
import CustomButton from './CustomButton'
import { HiPencilSquare, HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";
import { useRouter } from 'next/navigation'
const USER_IMAGE = "https://res.cloudinary.com/jisilver/image/upload/v1693725189/upload/wcystucfzjmot8dbqv3l.png"

const Header = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleButtonClick = () => {
        if (session) {
            if (window.confirm('로그아웃 하시겠습니까?')) {
                signOut({ callbackUrl: "/" });
            } else {
                return;
            }
        } else {
            router.push('/login')
        }
    }

    const handleCreatePost = () => {
        if (session) {
            router.push('/create')
        } else {
            router.push('/login')
        }
    }
    return (
        <div className='relative h-[80px]'>
            <div className='h-[80px] w-full fixed top-0 bg-white border-b-[1px] py-4 z-[9999]'>
                <div className='max-width flex justify-between items-center'>
                    {/* <Image src="/" alt="logo" fill /> */}
                    로고
                    <div className='gap-4 flex'>
                        <CustomButton containerStyles='bg-black text-white rounded-full flex items-center' title="글쓰기" icon textStyles='hidden sm:block' handleClick={handleCreatePost}><HiPencilSquare /></CustomButton>
                        <CustomButton containerStyles="text-gray-500 border-[1px] rounded-full flex items-center" title={session ? "로그아웃" : "로그인"} handleClick={handleButtonClick} icon textStyles='hidden sm:block'><HiOutlineArrowLeftOnRectangle /></CustomButton>
                        <div className='w-[40px] h-[40px] relative'>
                            <Image src={session?.user?.image || USER_IMAGE} fill alt="user image" className='rounded-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
