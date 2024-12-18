import React from 'react'

const CategoryMenus = () => {
  return (
    <div className='mt-3 flex flex-col gap-3' >
        <span>Browse By Category</span>
        <div className='w-full sm:w-3/4 flex flex-wrap gap-1  items-center justify-around '>
            <div className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/store-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Shoping <br /> Stores</span>
             </div>
             <div className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/computer-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Technology<br /> Services</span>
             </div>
             <div className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/car-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Auto-mobiles<br /> Services</span>
             </div>
             <div className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/suitcase-medical-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Heathcare <br /> Services</span>
             </div>
             <div className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/screwdriver-wrench-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Repair & Fix <br /> Services</span>
             </div>
             <div className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/hotel-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Hotels & <br /> Restaurants</span>
             </div>
             <div className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/book-open-reader-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Educational <br /> Services</span>
             </div>
             <div className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/sign-hanging-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Property & Assets <br /> Services</span>
             </div>
             <div className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/star-regular.svg" alt="" /> 
                    <span className='text-sm text-center'>Essential <br /> Services</span>
             </div>
             <div className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/truck-fast-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Transports <br /> Services</span>
             </div>
             <div className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/sack-dollar-solid.svg" alt="" /> 
                    <span className='text-sm text-center'>Finacial<br /> Services</span>
             </div>
             <div className='w-32 h-28 rounded-md border border-gray-400 cursor-pointer flex flex-col items-center justify-center hover:bg-slate-100' >
                     <img className='w-8' src="src/assets/Icons/burger-menu.svg" alt="" /> 
                    <span className='text-sm text-center'>See More</span>
             </div>
        </div>
    </div>
  )
}

export default CategoryMenus