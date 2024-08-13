import React from 'react'

function BusinessDescription({business}) {
  return (
    <div className='flex items-center justify-center mt-2 md:mt-8'>
       <div>
       <h1 className='text-primary text-lg font-semibold'>Description</h1>
       <h1>{business?.about}</h1>
       </div>
    </div>
  )
}

export default BusinessDescription