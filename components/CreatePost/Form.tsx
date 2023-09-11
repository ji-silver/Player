'use client'
import app from '@/app/firebase'
import { gameList } from '@/constants'
import { FormData } from '@/type'
import { useSession } from 'next-auth/react'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {
    getDownloadURL, getStorage,
    ref, uploadBytes
} from "firebase/storage";
import { useRouter } from 'next/navigation'


const Form = () => {
    // db 인스턴스 생성
    const db = getFirestore(app);
    const storage = getStorage(app);
    const router = useRouter();
    const { data: session } = useSession();

    const [file, setFile] = useState<File | null>(null);
    const [otherGame, setOtherGame] = useState('')
    const [formData, setFormData] = useState<FormData>({
        title: "",
        desc: "",
        location: "",
        date: "",
        time: "",
        game: "게임 선택하기",
        image: null as string | null,
        userName: null as string | null,
        userImage: null as string | null,
        email: null as string | null,
    })

    // session이 있으면 userName, userImage, email에 넣기 
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

    // name을 키값으로 value는 value값으로
    const handleChanege = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === 'otherGame') {
            setOtherGame(value);
        }

        setFormData((values) => ({
            ...values,
            [name]: value
        }))
    }

    // 파일 선택하기
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        // 파일 목록 중 첫번째 파일 가져오기
        const selectedFile = e.target.files && e.target.files[0];
        setFile(selectedFile);
    }

    // firestore에 데이터 보내기
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            if (formData.game === '그 외') {
                setFormData({
                    ...formData,
                    game: otherGame,
                });
            }
            if (file instanceof File) {
                const storageRef = ref(storage, 'images/' + file?.name);
                await uploadBytes(storageRef, file);
                const url = await getDownloadURL(storageRef);
                setFormData((values) => ({
                    ...values,
                    image: url
                }));
                await addDoc(collection(db, "posts"), formData);
            }
            alert('플레이를 개설했습니다.');
            router.push('/');
        } catch (error) {
            console.error(error);
            alert('개설하지 못했습니다. 잠시후에 다시 이용해주세요');
        }
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

                        {formData.game === '그 외' && (
                            <>
                                <input type="text" name="otherGame" className='form__input' onChange={handleChanege} required />
                            </>
                        )}

                        <label className='form__title'>사진 올리기</label>
                        <input type="file" accept='image/gif, image/jpeg, image/png' onChange={handleFileChange} />
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
