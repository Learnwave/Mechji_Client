import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import CategoryMenus from '../components/CategoryMenus'
import Shopcard from '../components/Shopcard'

const Home = () => {
  return (
    <div className='flex flex-col  '>
      
        {/* <Header/> */}
        <CategoryMenus/>
        <div className='mt-10'></div>
        <Shopcard/>
        
    </div>
  )
}

export default Home