"use client"
import { CustomButtonProps } from '@/type'
import React from 'react'

const CustomButton = ({ title, containerStyles, textStyles, handleClick, children, icon }: CustomButtonProps) => {
    return (
        <button className={`custom-btn ${containerStyles}`} onClick={handleClick}>
            {icon && (
                <div className='sm:pr-2'>
                    {children}
                </div>
            )}
            <span className={`${textStyles}`}>{title}</span>
        </button>
    )
}

export default CustomButton
