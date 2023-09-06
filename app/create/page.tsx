'use client'
import Form from '@/components/CreatePost/Form'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useEffect } from 'react'

const CreatePost = () => {

    return (
        <div className='bg-gray-100 min-h-[100vh]'>
            <Header />
            <div className='max-width create__container'>
                <div className='create__wrap'>
                    <h2 className='create__title'>플레이 개설하기 ⛹️‍♀️</h2>
                    <p className='create__desc'>함께 하고 싶은 플레이를 개설해서 플레이어와 함께 즐겨보세요</p>
                </div>
                <Form />
            </div>
            <Footer />
        </div>
    )
}

export default CreatePost
