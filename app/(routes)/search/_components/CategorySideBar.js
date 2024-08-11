"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Ensure you import Image if using Next.js
import GlobalApi from '../../../_services/GlobalApi';
import Link from 'next/link'; // Import Link from Next.js

// Placeholder icon URL or use a local placeholder image
const placeholderIcon = '/path/to/placeholder-icon.png'; 

function CategorySideBar() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    try {
      const resp = await GlobalApi.getCategory();
      setCategoryList(resp.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div className="flex flex-col gap-1 h-[80vh]  justify-center">
      <h2 className='text-primary mb-2 font-bold text-center w-[30%] bg-secondary p-2 rounded-full'>
        Categories
      </h2>
      {categoryList.length === 0 ? (
        [1, 2, 3, 4, 5, 6].map((item) => (
          <div 
            key={item} 
            className='h-[64px] bg-slate-200 flex items-center justify-center animate-pulse rounded-md'
          >
            <Image
              src={placeholderIcon} // Use placeholder icon when no data is available
              alt='Loading icon'
              width={35}
              height={35}
            />
          </div>
        ))
      ) : (
        categoryList.map((category) => (
          <Link href={`/search/${encodeURIComponent(category.name)}`} key={category.id}>
            <div 
              className={`flex items-center p-4 md:py-4 lg:py-4 gap-3 border hover:bg-secondary hover:text-primary hover:border-primary cursor-pointer rounded-md`} 
            >
              <Image
                src={category.icon.url} // Ensure category.icon.url is valid
                alt={`Icon for ${category.name}`}
                width={30}
                height={30}
              />
              <h2 className='font-semibold'>{category.name}</h2>
            </div>
          </Link>
        ))
      )}
      <div className='flex items-center  gap-4 mt-4'>
      <Link href='/contact' className='w-[40%]'>
      <h2 className='text-white mb-2 font-bold text-center  hover:bg-orange-800 bg-primary p-2 rounded-full'>
        Contact Us
      </h2>
      </Link>
      </div>
    </div>
  );
}

export default CategorySideBar;
