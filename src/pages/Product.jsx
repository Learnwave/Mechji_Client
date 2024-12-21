import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { assets } from '../assets/assets_products/frontend_assets/assets';

import { AppContent } from '../context/AppContext';

const Product = () => {
  const {productId} = useParams();
  
  const {products,currencySymbol , addToCart} =  useContext(AppContent);

  const [productData,setProductData] = useState(false);

  const [image,setImage] = useState("");
  
  const [size,setSize] = useState('');

  


  const fetchData = async ()=>{
     products.map((item)=>{
      
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        // console.log(item)
        return null;
      }

     })
  }
  useEffect(()=>{
    fetchData()
  },[productId])

  return productData ?  (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>


          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>


            <div className='flex sm:flex-col-reverse overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full' >

              {productData.image.map((item,index)=>(<img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />))}
              
            </div>

            <div className='w-full sm:w-[80%]'>

              <img src={image} className='w-full h-auto ' alt="" />
            </div>

          </div>

          {/* ---------productinfo */}
          
          <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2' >{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className='pl-2' > (122)</p>
              </div>
              <p className='mt-5 text-3xl font-medium' > {currencySymbol} {productData.price} </p>
              <p className='mt-5 text-gray-700  md:w-4/5' > {productData.description} </p>
              <div className='flex flex-col gap-4 my-8'>
                  <p> Select Size </p>
                  <div className='flex gap-2' >
                    {productData.sizes.map((item,index)=>(<button key={index} onClick={()=>{setSize(item)}} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-600': ''} ` }> {item} </button>))}
                  </div>
              </div>
              <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 '>Add To Cart</button>
              <hr className='mt-8 sm:w-4/5 ' />
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1 '>
                  <p>100% original Product.</p>
                  <p>Cash On Delivery Available On This Product</p>
                  <p>Easy return And Exchange policy within 7 days.</p>
              </div>
          </div>

        </div>
        {/* ---------description & review section ---------- */}

        <div className='mt-20'>
          <div className='flex' >
            <b className='border px-5 py-3 text-sm '>Description</b>
            <p className='border px-5 py-3 text-sm'>Review(122)</p>
          </div>

          <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-500'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur nesciunt maiores at consequatur molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptatibus placeat. Aliquid tenetur voluptates atque recusandae maxime fugit incidunt totam.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus laudantium accusamus aspernatur cumque id sequi reprehenderit eaque, reiciendis nisi iure!</p>
          </div>
        </div>
          {/* display releted product */}

         
    </div>
  ): <div className='opacity-0'>

  </div>
}

export default Product