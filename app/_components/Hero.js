
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col items-center mt-6 md:mt-24'>
        <div className='m-6 flex flex-col items-center justify-center'>
        <h1 className='text-[30px] font-extrabold'>Find Trusted <span className='text-primary'>Home Services / Repairs</span> Near you</h1>
        <h1 className='text-[15px] text-gray-500 font-semibold'>Discover Top-Rated Home Services and Repairs Nearby.</h1>
        </div>
        <div className='mt-4 w-full flex gap-3 items-center justify-center' >
            <Input placeholder='Search' className=' rounded-full md:w-[650px]'/>
            <Button className='rounded-full h-[46px]'><Search className='h-4 w-4' /></Button>
        </div>
        
    </div>
  )
}

export default Hero