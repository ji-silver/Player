'use client'
import Link from 'next/link'
import { useSession, signIn } from "next-auth/react"

const Login = () => {
    const { data: session, status } = useSession();

    return (
        <div className="login__container">
            <div className="login__section">
                <div className="login__leftContainer">
                    <div className="login__wrap">
                        <div>
                            <Link href='/' className='login__title'>
                                <p className="font-light">Welcome to</p>
                                <h2 className='font-bold text-[48px] pb-5'>Player</h2>
                            </Link>
                            <div className="login__social">
                                <button className="login__button border border-gray-400" onClick={() => signIn("google", { callbackUrl: "/" })}>
                                    <img src="/images/google.svg" alt="google" className='pr-[6px]' />구글 계정으로 로그인</button>
                                <button className='login__button bg-[#fee500]' onClick={() => signIn('kakao', { callbackUrl: "/" })} >
                                    <img src="/images/kakao.svg" alt="kakao" className='w-[30px] h-[30px]' />카카오 로그인</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login__rightContainer">
                    <div className="login__bgImage"></div>
                </div>
            </div>
        </div>
    )
}

export default Login

