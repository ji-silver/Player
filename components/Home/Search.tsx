"use client"
import React, { useState } from 'react'

const Search = () => {
    const [search, setSearch] = useState("")
    const handleClick = () => {
        console.log(search)
    }
    return (
        <div>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" onChange={(e) => setSearch(e.target.value)} className="focus:outline-none block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus" placeholder="지역으로 검색하기" required />
                <button type="submit" onClick={handleClick} className="text-white absolute right-2.5 bottom-2.5 bg-black focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600">검색</button>
            </div>


        </div>
    )
}

export default Search
