'use client'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../_services/GlobalApi'
import BusinessList from '../../../_components/BusinessList'


function BuisnessByCategory({params}) {
  
  const [businessList, setBusinessList] = useState([])
  
  useEffect(()=>{
    console.log(params)
    params&&getBusinessList()
  },[params])

  const getBusinessList =()=>{
    GlobalApi.getBusinessByCategory(params.category)
    .then(resp=>{
      console.log(resp)
      setBusinessList(resp?.businessLists)
      
    })
  }
  return (
    <div className=''>
     <BusinessList businessList={businessList}/>
    </div>
  )
}

export default BuisnessByCategory