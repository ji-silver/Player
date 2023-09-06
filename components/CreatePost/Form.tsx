'use client'
import { gameList } from '@/constants'
import { FormData } from '@/type'
import { useSession } from 'next-auth/react'
import React, { ChangeEvent, useEffect, useState } from 'react'

const Form = () => {
    const { data: session } = useSession()
    const [formData, setFormData] = useState<FormData>({
        title: "",
        desc: "",
        location: "",
        date: "",
        time: "",
        game: "게임 선택하기",
        file: null as File | null, // file 타입 null / File
        userName: null as string | null,
        userImage: null as string | null,
        email: null as string | null,
    })

    useEffect(() => {
        if (session) {
            setFormData((prev) => ({
                ...prev,
                userName: session?.user?.name || null,
                userImage: session?.user?.image || null,
                email: session?.user?.email || null,
            }))
        }
    }, [session])


    const handleChanege = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData((values) => ({
            ...values,
            [name]: value
        }))
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files && e.target.files[0];
        setFormData({ ...formData, file: selectedFile || null });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <>
            <div className='create__wrap mt-3'>
                <form onSubmit={handleSubmit} id="form">
                    <div className='flex flex-col'>
                        <label className='form__title font-bold'>제목</label>
                        <input type="text" name='title' onChange={handleChanege} className='form__input' required />

                        <label className='form__title'>플레이 소개</label>
                        <textarea name="desc" onChange={handleChanege} className='form__input resize-none whitespace-pre' required />

                        <label className='form__title'>일정</label>
                        <input name='date' onChange={handleChanege} type="date" className='form__input' required />

                        <label className='form__title'>시간</label>
                        <input name='time' onChange={handleChanege} type="time" className='form__input' required />

                        <label className='form__title'>장소</label>
                        <input name='location' onChange={handleChanege} type="text" className='form__input' required />

                        <label className='form__title'>게임 선택</label>
                        <select name="game" className='form__input w-full' onChange={handleChanege} value={formData.game || ""} required>
                            <option disabled hidden>
                                게임 선택하기
                            </option>
                            {gameList.map((item) => (
                                <option key={item.id}>{item.name}</option>
                            ))}
                        </select>

                        <label className='form__title'>사진 올리기</label>
                        <input type="file" onChange={handleFileChange} />
                    </div>
                </form>
            </div>
            <div className='my-5'>
                <button form="form" className='bg-black text-white w-full p-3 rounded-lg' type='submit'>개설하기</button>
            </div>
        </>
    )
}

export default Form
