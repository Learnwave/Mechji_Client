import React, { useContext,useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContent } from '../context/AppContext';
const Store = () => {
    const category = useParams();
    const {shops} = useContext(AppContent);
    const [filterShops,setFilterShops] = useState([]);
    const navigate = useNavigate();

    const applyFilter = () => {
        if(category.docId){
          setFilterShops(shops.filter(shop => shop.category === category.docId));
        }else{
          setFilterShops(shops);
        }
      }

      useEffect(()=>{
        applyFilter();
    },[shops,category])

    console.log(category.docId);
    console.log(filterShops);
    

  return (
    <div>
        <p>Browse all shops your nearby</p>
        <div>

        </div>
    </div>
  )
}

export default Store