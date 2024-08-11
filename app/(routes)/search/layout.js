import React from 'react'
import CategorySideBar from '../search/_components/CategorySideBar'

function layout({children}) {
  return (
    <div>
      <div className='grid  grid-cols-4'>
        <div className='p-2 rounded-lg'> 
            <CategorySideBar/>
        </div>
        <div className=' col-span-3  bg-red-100 p-2 rounded-lg'>
          {children}
        </div>
      </div>
      
    </div>
  )
}

export default layout