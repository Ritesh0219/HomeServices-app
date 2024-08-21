import React from 'react'
import CategorySideBar from '../search/_components/CategorySideBar'
import CategoryTopBar from '../search/_components/CategoryTopBar'


function layout({children}) {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className='p-2 rounded-lg hidden md:block'> 
            <CategorySideBar/>
        </div>
        <div className=' md:col-span-3  p-2 rounded-lg'>
        <div className='md:hidden'>
         <CategoryTopBar/>
        </div>
          {children}
         
        </div>
      </div>
      
    </div>
  )
}

export default layout