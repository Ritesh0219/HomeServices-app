import Image from 'next/image';
import React from 'react';

function CategoryList({ categoryList }) {
  return (
    <div className="grid grid-cols-3 gap-7 lg:gap-4 md:grid-cols-3 lg:grid-cols-6 mt-8 mb-12">
      {categoryList.length === 0 ? (
        [1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className='h-[120px]  bg-slate-200 flex items-center justify-center animate-pulse rounded-md'>
            
          </div>
        ))
      ) : (
        categoryList.map((category) => (
          <div 
            className={`flex flex-col items-center justify-center p-4 md:py-4 lg:py-4 gap-2 cursor-pointer hover:scale-105 transition-transform duration-200 ease-linear bg-[#ffe9da] rounded-md`} 
            key={category.id}
          >
            <Image
              src={category.icon.url}
              alt={`Icon for ${category.name}`}
              width={35}
              height={35}
            />
            <h2 className='text-primary font-semibold'>{category.name}</h2>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
