import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-2 shadow-sm flex items-center justify-between'>
        <div className='flex  items-center'>
            <Image src='/cleaning.png' alt='logo' width={50} height={50} className='hover:scale-105'/>
        </div>
        <div className='hidden md:flex items-center gap-6 '>
                <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Home</h2>
                <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Services</h2>
                <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Contact us</h2>
        </div>
        <div>
            <Button>Get Started</Button>
        </div>
    </div>
  )
}

export default Header