"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Ensure you import Image if using Next.js
import GlobalApi from '../../../_services/GlobalApi';
import Link from 'next/link'; // Import Link from Next.js
import { usePathname } from 'next/navigation';

// Placeholder icon URL or use a local placeholder image
const placeholderIcon = '/path/to/placeholder-icon.png'; 

function CategoryTopBar() {
  const [categoryList, setCategoryList] = useState([]);
  const params = usePathname();


  const [selectedCategory, setSelectedCategory] = useState()
  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(()=>{
   params&&setSelectedCategory( params.split('/')[2])
  },[params]);


  const getCategoryList = async () => {
    try {
      const resp = await GlobalApi.getCategory();
      setCategoryList(resp.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-3 mt-4">
      {categoryList.length === 0 ? (
        [1, 2, 3, 4, 5, 6].map((item) => (
          <div 
            key={item} 
            className='h-[64px] bg-slate-200 flex items-center justify-center animate-pulse rounded-md'
          >
            <Image
              src={placeholderIcon} // Use placeholder icon when no data is available
              alt='Loading icon'
              width={10}
              height={10}
            />
          </div>
        ))
      ) : (
        categoryList.map((category) => (
          <Link href={`/search/${encodeURIComponent(category.name)}`} key={category.id}>
            <div 
              className={`flex items-center justify-center px-2 py-2 md:py-4 lg:py-4 gap-1 border hover:bg-secondary hover:text-primary hover:border-primary cursor-pointer rounded-lg ${selectedCategory==category.name&&'border-primary text-primary bg-secondary'}`} 
            >
              <Image
                src={category.icon.url} // Ensure category.icon.url is valid
                alt={`Icon for ${category.name}`}
                width={20}
                height={20}
              />
              <h2 className='font-medium'>{category.name}</h2>
            </div>
          </Link>
        ))
      )}
     
    </div>
  );
}

export default CategoryTopBar;
