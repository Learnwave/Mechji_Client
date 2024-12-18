import React from 'react'
import { Link } from 'react-router-dom'
const CategoryMenus = () => {
  return (
    <div className='mt-3 flex flex-col gap-3' >
        <span>Browse By Category</span>
        <div className='w-full sm:w-3/4 flex flex-wrap gap-1  items-center justify-around '>

            <Link to={"/shops/shoping-stores"}  className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/store-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Shoping <br /> Stores</span>
             </Link>
             <Link to={"/shops/technology-services"} className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/computer-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Technology<br /> Services</span>
             </Link>
             <Link to={"/shops/automoiles-services"} className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/car-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Auto-mobiles<br /> Services</span>
             </Link>
             <Link to={"/shops/healthcare-services"} className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/suitcase-medical-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Heathcare <br /> Services</span>
             </Link>
             <Link to={"/shops/repair-services"} className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/screwdriver-wrench-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Repair & Fix <br /> Services</span>
             </Link>
             <Link to={"/shops/hotels_restaurants"} className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/hotel-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Hotels & <br /> Restaurants</span>
             </Link>
             <Link to={"/shops/educational-services"} className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/book-open-reader-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Educational <br /> Services</span>
             </Link>
             <Link to={"/shops/property-services"} className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/sign-hanging-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Property & Assets <br /> Services</span>
             </Link>
             <Link to={"/shops/essential-services"} className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/star-regular.svg" alt="" /> 
                    <span className='text-sm text-center'>Essential <br /> Services</span>
             </Link>
             <Link to={"/shops/transports-services"} className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/truck-fast-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Transports <br /> Services</span>
             </Link>
             <Link to={"/shops/finacial-services"} className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/sack-dollar-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Finacial<br /> Services</span>
             </Link>
             <Link to={"/shops"} className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                             <i className="text-2xl fa-solid fa-shop"></i>
                    <span className='text-sm text-center'>All Nearby <br /> Shops</span>
             </Link>
        </div>
    </div>
  )
}

export default CategoryMenus