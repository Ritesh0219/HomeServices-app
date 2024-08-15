'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Header() {
  const { user } = useUser();
  
  return (
    <div className='py-1 w-full shadow-sm flex items-center justify-between'>
        <Link href='/'>
        <div className='flex  items-center p-1'>
            <Image src='/cleaning.png' alt='logo' width={35} height={35} className='hover:scale-105'/>
        </div>
        </Link>
        
        
       
        <div className='flex  gap-3 items-center justify-center' >
          {!user?
            <a href='/search/'>
            <button className='bg-primary text-[15px] text-white px-3 py-2 rounded-full hover:bg-orange-800' >Get Started</button>
            </a>
            :
           <div className=' flex items-center justify-center border   rounded-full border-primary '>
               <UserButton/>
           </div>
          }
            
        </div>
    </div>
  )
}

export default Header