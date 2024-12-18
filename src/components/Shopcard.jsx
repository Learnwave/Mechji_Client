import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext';


const Shopcard = () => {
    const navigate = useNavigate();
    const {shops} = useContext(AppContent);
    console.log(shops)
  return (
    <div className='w-full flex flex-col  items-center gap-4 text-gray-900 '>
        <h1 className='text-3xl text-left w-full font-medium '>Top Shops Near You</h1>
        <p className='text-left w-full text-sm'>Simply browse through our extensive list of trusted Shops.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5  sm:px-0'>
            {
                shops.slice(0,10).map((item,index)=>(
                    <div onClick={()=>navigate(`/appointments/${item._id}`)} className='border flex flex-col border-black rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px]  transition-all duration-500 shadow-sm  shadow-gray-500 ' key={index}>
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
        <button onClick={()=>{navigate("/doctors"); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>More</button>
    </div>
  )
}

export default Shopcard