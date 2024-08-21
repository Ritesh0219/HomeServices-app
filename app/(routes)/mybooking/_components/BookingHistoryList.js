import { Calendar } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

// Function to format date from YYYY-MM-DD to DD MMM YYYY
const formatDate = (dateString) => {
  if (!dateString) return 'Date';

  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }); // e.g., "Aug"
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

function BookingHistoryList({ bookingHistory, section }) {
  return (
    <div className='md:w-[90%]'>
      {section === 'completed' && bookingHistory.length === 0 ? (
        <div className='w-full h-[80vh] text-center flex mb-4 rounded-lg items-center justify-center text-black bg-gray-100 mt-5'>
          <h2 className='text-lg font-semibold w-full'>No Business Found</h2>
        </div>
      ) : (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 cursor-default'>
          {bookingHistory.map((booking, index) => (
            <div key={index} className='flex gap-3 p-4 rounded-md shadow-md hover:scale-105 hover:transition-transform duration-900 ease-in-out bg-white'>
              {booking?.businessList?.images && booking?.businessList?.images.length > 0 ? (
                <div className='flex justify-center'>
                  <Image
                    src={booking?.businessList?.images[0]?.url || '/placeholder.png'}
                    alt={`Image for ${booking?.businessList?.name}`}
                    width={100}
                    height={100}
                    className='rounded-md object-cover'
                  />
                </div>
              ) : (
                <div className='w-full h-32 bg-gray-200 rounded-md'></div>
              )}
              <div className='flex flex-col gap-1.5 items-start ml-2 md:ml-8 justify-center'>
                <h1 className='p-1 px-2 text-[14px] bg-[#ffe9da] text-center text-primary rounded-full w-[40%] md:font-medium md:w-[40%] hover:bg-primary hover:text-white'>
                  {booking?.businessList?.category?.name || 'Category'}
                </h1>
                <h2 className='text-primary text-[13px] font-semibold'>
                  {booking?.businessList?.contactPerson || 'Contact Person'}
                </h2>
                <h2 className='text-black text-md font-semibold'>
                  {booking?.businessList?.name || 'Business Name'}
                </h2>
                <h2 className='text-gray-500 text-[13px] font-medium'>
                  {booking?.businessList?.address || 'Business Address'}
                </h2>
                <h2 className='text-primary items-center flex gap-2 text-md font-medium'>
                  <span className='text-primary'><Calendar /></span>
                  <h2>
                    Booked :
                  </h2>
                  {formatDate(booking?.date) || 'Date'}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookingHistoryList;
