'use client'
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "./_components/businessList";



export default function Home() {

// Get all category list
  const [categoryList , setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);

  useEffect(()=>{
    getCategoryList();
    getAllBusinessList()
  },[])

  
// Get all category list
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      // console.log(resp.categories)
      setCategoryList(resp.categories)
    })  
  }

  // Get all business List
  const getAllBusinessList=()=>{
    GlobalApi.getAllBusinessList().then(resp=>{
      setBusinessList(resp.businessLists);

    })
  }
  return (
    <div>
       <Hero/>
       <CategoryList categoryList={categoryList}/>
       <BusinessList businessList={businessList} title={'Popular Business'} />
    </div>
  );
}
