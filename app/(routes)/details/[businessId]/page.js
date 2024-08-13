'use client'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../_services/GlobalApi'
import BusinessInfo from '../_components/BusinessInfo'
import BusinessDescription from '../_components/BusinessDescription'
import SuggestedBusiness from '../_components/SuggestedBusiness'

function businessDetail({params}) {
  const [businessList, setBusinessList] = useState();
  useEffect(()=>{
    params&&getbusinessById();
  },[params])

  const getbusinessById=()=>{
    GlobalApi.getBusinessById(params.businessId)
    .then(resp=>{
      console.log(resp.businessList)
        setBusinessList(resp.businessList)
    })
  }
  return (
    <div className='md:py-8'>
        <BusinessInfo business={businessList} />
        <BusinessDescription business={businessList} />
        <SuggestedBusiness business={businessList} />
        
    </div>
  )
}

export default businessDetail