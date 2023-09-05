'use client'
import React, { useEffect, useState } from 'react'
import { gameList } from '@/constants'
import Image from 'next/image'

const GameList = () => {
    return (
        <>
            <div className='grid grid-cols-3 md:grid-cols-6 my-7 gap-5'>
                {gameList.map((item) => (
                    <div className='gameList__container' key={item.id}>
                        <Image src={item.image} alt="sports" width={45} height={45} className='hover:animate-bounce transition-all duration-150' />
                        <h3 className='gameList__name'>{item.name}</h3>
                    </div>
                ))}
            </div>
            {/* <div className='border-b border-black mb-5'></div> */}
        </>
    )
}

export default GameList
