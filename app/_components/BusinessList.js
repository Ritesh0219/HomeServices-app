import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function BusinessList({ businessList = [] }) {
  return (
    <div className='mt-5'>
      {businessList.length === 0 ? (
        <div className='w-full h-[80vh] text-center flex mb-4 rounded-lg items-center justify-center text-black bg-gray-100 animate-pulse mt-5'>
          <h2 className='text-lg font-semibold'>Loading Business</h2>
        </div>
      ) : (
        <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5'>
          {businessList.map((business) => (
            <Link
              key={business.id} // Assuming each business has a unique 'id'
              href={`/details/${business.id}`}
              passHref
            >
              
                <div
                  className='flex flex-col gap-4 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300 ease-in-out bg-white'
                >
                  {business.images && business.images.length > 0 ? (
                    <div className='grid gap-2 grid-cols-1'>
                      {business.images.map((image, imgIndex) => (
                        <div key={imgIndex} className='flex justify-center'>
                          <Image
                            src={image.url}
                            alt={`Image for ${business.name}`}
                            width={400}
                            height={400}
                            className='rounded-md object-cover'
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className='w-full h-32 bg-gray-200 rounded-md'></div>
                  )}
                  <div className='flex flex-col gap-1 items-baseline'>
                    <h1 className='p-1 px-2 text-[12px] bg-[#ffe9da] text-primary rounded-full'>
                      {business.category?.name || 'Category'}
                    </h1>
                    <h2 className='text-primary text-[13px] font-semibold'>
                      {business.contactPerson || 'Contact Person'}
                    </h2>
                    <h2 className='text-black text-md font-semibold'>
                      {business.name || 'Business Name'}
                    </h2>
                    <h2 className='text-gray-500 text-[13px] font-medium'>
                      {business.address || 'Business Address'}
                    </h2>
                  </div>
                  <div>
                    <button className='bg-primary w-full text-white p-2 rounded-full hover:bg-orange-800'>
                      Book Now
                    </button>
                  </div>
                </div>
              
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default BusinessList;
