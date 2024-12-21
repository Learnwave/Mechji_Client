import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContent } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';
import Products_Items from './Products_Items';

const Store = () => {

    const {storeId} = useParams();
    const {shops,currencySymbol,products} = useContext(AppContent);
    const [shopInfo,setShopinfo] = useState(null);

    const fetchShopInfo = async () => {
        const shopInfo = shops.find(shop => shop._id === storeId);
        setShopinfo(shopInfo);
        console.log(shopInfo)
    }

    useEffect(()=>{
        fetchShopInfo();
        },[storeId ,shops])
        console.log(shopInfo)
  return shopInfo && (
    <div className='mt-6'>

       {/* Shop details */}
       <div className='flex flex-col sm:flex-row gap-4'>

        <div className='flex flex-col gap-5 flex-shrink-0'>
           <img className='bg-primary w-full sm:max-w-72 h-60  rounded-md ' src={shopInfo.image} alt="" />
           <div className=' flex flex-col gap-3 '>
                <div className='flex items-center cursor-pointer px-7 py-2 text-center justify-center bg-black rounded-sm text-white '><p className=''>Inventory</p></div>
                <div className='flex items-center cursor-pointer px-7 py-2 text-center justify-center bg-black rounded-sm text-white '><p className=''>Services</p></div>
                <div className='flex items-center cursor-pointer px-7 py-2 text-center justify-center bg-black rounded-sm text-white '><p className=''>Offers</p></div>
                <div className='flex items-center cursor-pointer px-7 py-2 text-center justify-center bg-black rounded-sm text-white '><p className=''>Reviews</p></div>
                <div className='flex items-center cursor-pointer px-7 py-2 text-center justify-center bg-black rounded-sm text-white '><p className=''>About</p></div>
          </div>
         </div>

         <div className='flex-1 border border-gray-400 rounded-md p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>

          {/* Shop info name,type, category */}
          <div>
            
             <p className='flex  items-center gap-2 text-2xl font-medium text-gray-900'>{shopInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /> </p>
            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600 '>
            <p>{shopInfo.degree} - {shopInfo.speciality}  </p>
            <button className='py-0.5 px-2 border text-xs rounded-full '>{shopInfo.experience}</button>
           </div>
             {/* shop about page */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 '>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 '>{shopInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4 '>
             Appointment fee: <span className='text-gray-600'>{currencySymbol}{shopInfo.fees}</span>
          </p>
         </div>
      <hr  className='my-3 border-0.5 border-gray-500 shadow shadow-gray-500'/>
         <div className='flex flex-col gap-4 '> 
            <div className='flex gap-10 items-center '>
              <p>All Products Listed by {shopInfo.name} </p>
              <div className='py-1 px-4 flex items-center gap-2 border border-black max-w-92 rounded-md'>
              <input className='border-none outline-none text-sm bg-transparent ' type="text" placeholder='Search Products ' name="" id="" />
              <i className="fa-solid text-gray-700 text-sm fa-magnifying-glass"></i>
              </div>
            </div>
             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                {
                  products.map((items,index)=>(<Products_Items key={index} name={items.name} id={items._id} price={items.price} image={items.image} />))
                }
              </div>
          </div>

          </div>
      </div>

      {/* left menu section of div */}
     

    </div>
  )
}

export default Store