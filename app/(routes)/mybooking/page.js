'use client'
import React, { useEffect, useState } from 'react';
import BookingHistoryList from '../mybooking/_components/BookingHistoryList'
import GlobalApi from '../../_services/GlobalApi';
import { useUser } from '@clerk/nextjs';

function MyBooking() {
  const [activeTab, setActiveTab] = useState('ongoingServices');

  const {user}=useUser();

  const[bookingHistory, setBookingHistory] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(()=>{
    user&&GetUserBookingHistory();
  },[user])
  const GetUserBookingHistory=()=>{
    GlobalApi.GetUserBookingHistory(user?.primaryEmailAddress?.emailAddress)
    .then(resp=>{
        setBookingHistory(resp.bookings)
        console.log(resp.bookings)
        console.log(user?.primaryEmailAddress?.emailAddress)
    })
  }

  return (
    <div className='w-full flex flex-col items-center mt-8 md:mt-4'>
        <h2 className=' mb-8 md:mb-4 text-4xl font-extrabold'>My Bookings</h2>
      <div className='flex gap-4  rounded-full px-8 py-2 bg-secondary'>
        <button
          onClick={() => handleTabChange('completedServices')}
          className={`px-8 py-2 text-sm font-semibold rounded-full  ${activeTab === 'completedServices' ? 'text-white bg-primary' : 'text-gray-500'}`}
        >
          Booked 
        </button>
        <button
          onClick={() => handleTabChange('ongoingServices')}
          className={`px-3 py-2 text-sm rounded-full font-semibold ${activeTab === 'ongoingServices' ? 'text-white bg-primary' : 'text-gray-500'}`}
        >
          Completed 
        </button>
       
      </div>
      
      <div className='w-full mt-4 p-4'>
        {activeTab === 'completedServices' && (
          <div className='w-full flex flex-col items-center justify-center'>
            <BookingHistoryList/>
          </div>
        )}
        {activeTab === 'ongoingServices' && (
          <div className='w-full flex flex-col items-center justify-center'>
            <h2 className='text-lg font-bold'>Ongoing Services</h2>
            {/* Content for ongoing services */}
            <p>Here is the content for Ongoing Services.</p>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBooking;
