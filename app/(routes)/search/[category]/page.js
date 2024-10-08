'use client'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../_services/GlobalApi'
import BusinessList from '../../../_components/BusinessList'
import { Button } from '@mui/material'
import { AlignJustify, Link } from 'lucide-react'


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
    <div className='md:p-8'>
     <BusinessList businessList={businessList}/>
    </div>
  )
}

export default BuisnessByCategory