'use client';
import React, { useEffect, useState } from 'react';
import BookingHistoryList from '../mybooking/_components/BookingHistoryList';
import GlobalApi from '../../_services/GlobalApi';
import { useUser } from '@clerk/nextjs';

function MyBooking() {
  const [activeTab, setActiveTab] = useState('Booked');
  const { user } = useUser();
  const [bookingHistory, setBookingHistory] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (user) {
      GetUserBookingHistory();
    }
  }, [user]);

  const filterData=(type)=>{
    const result = bookingHistory.filter(item=> 
      type=='Booked'?
      new Date(item.date)>=new Date():new Date(item.date) < new Date())
      return result;
  }

  const GetUserBookingHistory = () => {
    GlobalApi.GetUserBookingHistory(user?.primaryEmailAddress?.emailAddress)
      .then((resp) => {
        setBookingHistory(resp.bookings || []); // Ensure bookings is always an array
        console.log(resp.bookings);
        console.log(user?.primaryEmailAddress?.emailAddress);
      })
      .catch((error) => {
        console.error('Error fetching booking history:', error);
      });
  };

  return (
    <div className='w-full flex flex-col items-start mt-8 md:mt-5'>
      
      <div className='flex flex-col items-center justify-center w-full'>
      <h2 className=' md:mb-4 text-4xl font-extrabold'>Bookings</h2>
          <div className=' flex gap-3 mt-5 md:mt-0'>
            <button
                onClick={() => handleTabChange('Booked')}
                className={`px-6 py-2 text-sm font-semibold rounded-full border ${activeTab === 'Booked' ? 'text-white bg-primary' : 'text-gray-500'}`}
              >
                Booked
              </button>
              <button
                onClick={() => handleTabChange('Completed')}
                className={`px-3 py-2 text-sm rounded-full font-semibold border ${activeTab === 'Completed' ? 'text-white bg-primary' : 'text-gray-500'}`}
              >
                Completed
              </button>
          </div>
      </div>
      <div className='w-full  md:p-4'>
        {activeTab === 'Booked' && (
          <div className='w-full flex flex-col items-center justify-center'>
            <BookingHistoryList bookingHistory={filterData('Booked')} />
          </div>
        )}
        {activeTab === 'Completed' && (
          <div className='w-full flex flex-col items-center justify-center'>
            <BookingHistoryList bookingHistory={filterData('Completed')} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBooking;
