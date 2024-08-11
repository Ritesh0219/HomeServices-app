'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  const { user } = useUser();
  
  return (
    <div className='py-2 w-full shadow-sm flex items-center justify-between'>
        <div className='flex  items-center'>
            <Image src='/cleaning.png' alt='logo' width={35} height={35} className='hover:scale-105'/>
        </div>
        <div className='hidden md:flex items-center gap-6 '>
                <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Home</h2>
                <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Services</h2>
                <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Contact us</h2>
        </div>
        <div className='flex  gap-3 items-center justify-center' >
          {!user?
            <a href='/dashboard'>
            <button className='bg-primary text-[15px] text-white px-3 py-2 rounded-full hover:bg-orange-800' >Get Started</button>
            </a>
            :
           <div className=' flex items-center justify-center border-[3px]   rounded-full border-primary '>
               <UserButton defaultOpen  />
           </div>
          }
            
        </div>
    </div>
  )
}

export default Header