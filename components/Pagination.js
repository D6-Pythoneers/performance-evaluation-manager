import React from 'react'

export default function Pagination() {
    return (
        <div className='relative flex flex-col justify-between w-64 border border-t-0 border-black'>
            <div>
            <div className='p-4 text-lg border border-t-0 border-l-0 border-r-0 border-black cursor-pointer hover:bg-gray-200'>Dashboard</div>
            <div className='p-4 text-lg border border-t-0 border-l-0 border-r-0 border-black cursor-pointer hover:bg-gray-200'>Profile</div>
            </div>
            
            
            <button className='w-64 p-4 text-xl text-red-600 hover:bg-red-200 hover:text-black'>Log Out</button>
        </div>
    )
}
