import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContent } from '../context/AppContext';

const Store = () => {

    const {storeId} = useParams();
    const {shops} = useContext(AppContent);
    const [shopInfo,setShopinfo] = useState(null);

    const fetchShopInfo = async () => {
        const shopInfo = shops.find(shop => shop._id === storeId);
        setShopinfo(shopInfo);
        console.log(shopInfo)
    }

    useEffect(()=>{
        fetchShopInfo();
        },[storeId ,shops])

  return (
    <div>
        
    </div>
  )
}

export default Store