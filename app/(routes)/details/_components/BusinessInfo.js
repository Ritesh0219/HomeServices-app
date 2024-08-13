import { Clock3, Mail, MapPin, NotebookPen, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BusinessInfo({business}) {
  return business?.name&&(
   
       <div className='flex flex-col md:flex-row  gap-4 items-center justify-center mt-6'>
       <Image src={business?.images[0]?.url} alt='logo' width={180} height={250} className='rounded-lg  object-cover shadow-xl md:w-[250px]
        hover:scale-105 transition-transform duration-100 ease-in-out bg-white' />
        <div className='flex flex-col  gap-2 mt-3'>
            
            <h2 className='text-4xl font-bold'>{business?.name}</h2>
            <a href={'/search/'+business?.category?.name}>
            <h2 className='text-center font-semibold bg-secondary text-primary w-28 rounded-full px-2 py-1 hover:bg-orange-800 hover:text-white'>{business?.category?.name}</h2>
            </a>
            <h2 className='flex gap-2 text-primary text-lg hover:text-orange-700'><User/>{business?.contactPerson}</h2>
            <h2 className='flex gap-2 text-gray-500 hover:text-black'><Mail/>{business?.email}</h2>
            <h2 className='flex gap-2 text-gray-500 hover:text-black'><MapPin/>{business?.address}</h2>
            <h2 className='flex gap-2  font-bold'><Clock3/>Available 8:00 AM to 10:00 PM</h2>
           <div className='w-full flex items-center justify-center md:justify-start mt-2'>
           <button className='bg-primary  flex gap-2 px-4 py-2 rounded-full text-white hover:bg-orange-700'><NotebookPen/>Book Apointment</button>
           </div>
        </div>
       </div>
    
  )
}

export default BusinessInfo