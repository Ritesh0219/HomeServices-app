

import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col items-center mt-2 md:mt-24'>
        <div className='m-6 flex flex-col items-center justify-center'>
        <h1 className='text-[45px] font-extrabold'>Find Trusted <span className='text-primary'>Home Services</span> Near you</h1>
        <h1 className='text-[15px] text-gray-500 font-semibold'>Discover Top-Rated Home Services and Repairs .</h1>
        </div>
        <div className='mt-4 w-full flex gap-3 items-center justify-center' >
            <input placeholder='Search' className=' rounded-full w-full md:w-[650px] outline-none border p-3 px-3'/>
            <button className='rounded-full h-[46px]'><Search className='h-4 w-4' /></button>
        </div>
       
        
    </div>
  )
}

export default Hero