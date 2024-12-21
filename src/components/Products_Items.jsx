import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContent } from '../context/AppContext';

const Products_Items = ({id,image,name,price}) => {

    const {currencySymbol} = useContext(AppContent);

  return (
    <Link className='text-gray-700' to={`/Product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 w-48 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-wrap text-sm'>{name}</p>
        <p className='text-sm font-medium'> {currencySymbol} {price}</p>
    </Link>
  )
}

export default Products_Items