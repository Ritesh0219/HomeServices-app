import Image from 'next/image';
import React from 'react';

function CategoryList({ categoryList }) {
  return (
    <div className="grid grid-cols-3 gap-7 lg:gap-4 md:grid-cols-3 lg:grid-cols-6 mt-10">
      {categoryList.map((category) => (
        <div className={`flex flex-col items-center justify-center p-4 md:py-4 lg:py-4 gap-2 cursor-pointer hover:scale-105 transition-transform duration-20 ease-linear bg-[#ffe0cc] rounded-md`} key={category.id}>
          <Image
            src={category.icon.url}
            alt={`Icon for ${category.name}`}
            width={35}
            height={35}
          />
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
