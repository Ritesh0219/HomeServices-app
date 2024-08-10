import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js if using Next.js

function BusinessList({ businessList, title }) {
  return (
    <div className='mt-5'>
      <h2 className='font-bold text-[22px]'> 
        {title}
      </h2>
      <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5'> {/* Adjusted grid layout */}
        {businessList.map((business, index) => (
          <div 
            className='flex flex-col gap-4  p-4  rounded-md shadow-md  hover:scale-105 transition-transform duration-10 ease-linear'
            key={index}
          >
            
            <div className='grid gap-2 grid-cols-1'>
              {business.images.map((image, imgIndex) => (
                <div key={imgIndex} className='flex justify-center'>
                  <Image
                    src={image.url}  // Ensure `image.url` is the correct property
                    alt={`Image for ${business.name}`}
                    width={400}
                    height={400}
                    className='rounded-md object-cover'  // Ensure the image covers the area
                  />
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-1 items-baseline'>
                <h1 className='p-1 px-2 text-[12px] bg-[#ffe9da] text-primary rounded-full'>{business.category.name}</h1>
                <h2 className='text-primary text-[13px]  font-semibold'>{business.contactPerson}</h2>
                <h2 className='text-black text-md font-semibold'>{business.name}</h2>
                <h2 className='text-gray-500 text-[13px] font-medium'>{business.address}</h2>
               
            </div>
            <div>
            <button className='bg-primary w-full text-white p-2 rounded-full'>Book Now</button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessList;
