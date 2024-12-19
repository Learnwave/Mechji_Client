import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContent } from '../context/AppContext';

const Shops = () => {
    const {category} = useParams()
    const [shopFilter,setShopFilter] = useState([]);
    const {shops} = useContext(AppContent);
    const navigate = useNavigate();
    
    const applyFilter = () => {
        if (category) {
            setShopFilter(shops.filter(shop => shop.category === category))
        }else{
          setShopFilter(shops)
        }
    }
    useEffect(()=>{
        applyFilter()
    },[shops,category])
    console.log(shopFilter)
  return (
    <div>
        <p className='text-gray-600'>Browse All nearby shops that listed on mechji</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5 '>
          <div className='flex flex-col text-sm text-gray-600 gap-2'>
          <p onClick={()=> category === "" ? navigate("/shops") : navigate("/shops/")} className={`w-[94vw] sm:w-auto  py-2 px-5  bg-black text-white text-sm rounded-sm transition-all cursor-pointer text-center`} >All Nearby</p>
          <p onClick={()=> category === "shoping-stores" ? navigate("/shops") : navigate("/shops/shoping-stores")} className={`w-[94vw] sm:w-auto  py-2 px-5  bg-black text-white text-sm rounded-sm transition-all cursor-pointer text-center`} >Shoping</p>
          <p onClick={()=> category === "technology-services" ? navigate("/shops") : navigate("/shops/technology-services")} className={`w-[94vw] sm:w-auto  py-2 px-5  bg-black text-white text-sm rounded-sm transition-all cursor-pointer text-center`} >Technology</p>
          <p onClick={()=> category === "automoiles-services" ? navigate("/shops") : navigate("/shops/automoiles-services")} className={`w-[94vw] sm:w-auto  py-2 px-5  bg-black text-white text-sm rounded-sm transition-all cursor-pointer text-center`} >Auto-mobiles</p>
          <p onClick={()=> category === "healthcare-services" ? navigate("/shops") : navigate("/shops/healthcare-services")} className={`w-[94vw] sm:w-auto  py-2 px-5  bg-black text-white text-sm rounded-sm transition-all cursor-pointer text-center`} >Heathcare</p>
          <p onClick={()=> category === "repair-services" ? navigate("/shops") : navigate("/shops/repair-services")} className={`w-[94vw] sm:w-auto  py-2 px-5  bg-black text-white text-sm rounded-sm transition-all cursor-pointer text-center`} >Repair & Fix</p>
          <p onClick={()=> category === "hotels_restaurants" ? navigate("/shops") : navigate("/shops/hotels_restaurants")} className={`w-[94vw] sm:w-auto  py-2 px-5  bg-black text-white text-sm rounded-sm transition-all cursor-pointer text-center`} >Hotels & Restaurants</p>
          <p onClick={()=> category === "educational-services" ? navigate("/shops") : navigate("/shops/educational-services")} className={`w-[94vw] sm:w-auto  py-2 px-5  bg-black text-white text-sm rounded-sm transition-all cursor-pointer text-center`} >Educational</p>
          <p onClick={()=> category === "property-services" ? navigate("/shops") : navigate("/shops/property-services")} className={`w-[94vw] sm:w-auto  py-2 px-5  bg-black text-white text-sm rounded-sm transition-all cursor-pointer text-center`} >Property & Assets</p>
          <p onClick={()=> category === "essential-services" ? navigate("/shops") : navigate("/shops/essential-services")} className={`w-[94vw] sm:w-auto  py-2 px-5  bg-black text-white text-sm rounded-sm transition-all cursor-pointer text-center`} >Essential</p>
          <p onClick={()=> category === "transports-services" ? navigate("/shops") : navigate("/shops/transports-services")} className={`w-[94vw] sm:w-auto  py-2 px-5  bg-black text-white text-sm rounded-sm transition-all cursor-pointer text-center`} >Transports</p>
          <p onClick={()=> category === "finacial-services" ? navigate("/shops") : navigate("/shops/finacial-services")} className={`w-[94vw] sm:w-auto  py-2 px-5  bg-black text-white text-sm rounded-sm transition-all cursor-pointer text-center`} >Finacial</p>
         
        </div>
        
        <div className='w-full grid grid-cols-auto gap-3 sm:px-0'>
          {
              shopFilter.map((item,index)=>(
                    <div onClick={()=>navigate(`/store/${item._id}`)} className='border flex flex-col border-black rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px]  transition-all duration-500 shadow-sm  shadow-gray-500 ' key={index}>
                        <img className='bg-blue-50 h-40  p-0.5 rounded-xl ' src={item.image} alt="" />
                        <div className='p-4 flex flex-col gap-2'>
                            <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium '>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.category}</p>
                            <button className='border border-gray-500 rounded-md px-2 text-sm py-1 bg-black text-white'>Visit Shop </button>
                        </div>
                    </div>
                ))
            }
          
        </div>
        </div>
    </div>
  )
}

export default Shops