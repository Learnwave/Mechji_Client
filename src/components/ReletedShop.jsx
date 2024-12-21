import React, { useContext, useEffect, useState } from 'react'
import { AppContent } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const ReletedShop = ({category,storeId}) => {

  const {shops} = useContext(AppContent)
  const [relShop,setRelShop] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
        if (storeId.length > 0 && category) {
            const doctorsData = shops.filter((shop) => shop.category === category && shop._id !== storeId)
            setRelShop(doctorsData)

        }
  },[shops,category,storeId])


  return (
    <div className='mt-10'>
       <div className='flex flex-col items-center gap-4 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium '>Releted Shops For You</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted Shops.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {
                relShop.slice(0,5).map((item,index)=>(
                    <div onClick={()=>{navigate(`/store/${item._id}`);scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px]  transition-all duration-500' key={index}>
                        <img className='bg-blue-50 ' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium '>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        
    </div>
    </div>
  )
}

export default ReletedShop