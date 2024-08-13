'use client'
import { NotebookPen } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../_services/GlobalApi'
import BusinessList from '../../../_components/BusinessList'

function SuggestedBusiness({business}) {
  const [businessList, setBusinessList] = useState([])
  
  useEffect(()=>{
   
  business&&getBusinessList()
  },[business])

  const getBusinessList =()=>{
    GlobalApi.getBusinessByCategory(business?.category?.name)
    .then(resp=>{
      console.log(resp)
      setBusinessList(resp?.businessLists)
      
    })
  }
  return (
    <div className='flex flex-col items-center justify-center mt-2 md:mt-8'>
    <div>
    <h1 className='text-primary text-xl font-semibold'>Similar Businesses</h1>
    <BusinessList businessList={businessList}/>
    </div>
 </div>
  )
}

export default SuggestedBusiness