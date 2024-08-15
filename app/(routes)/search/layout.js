import React from 'react'
import CategorySideBar from '../search/_components/CategorySideBar'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function layout({children}) {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className='p-2 rounded-lg hidden md:block'> 
            <CategorySideBar/>
        </div>
        <div className=' md:col-span-3  p-2 rounded-lg'>
       
          {children}
         
        </div>
      </div>
      
    </div>
  )
}

export default layout