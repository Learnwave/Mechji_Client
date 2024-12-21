import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col gap-4'>
         {/* footer links  */}
        <div className='flex justify-between flex-wrap gap-10 p-4'>
            <div>
                <div><h1 className='text-2xl font-bold'>Categories </h1></div>

                <NavLink to="/"> <div className='cursor-pointer text-blue-900'><p>Home-Services</p></div></NavLink>  
                <NavLink to="/"> <div className='cursor-pointer text-blue-900'><p>Consultants</p></div></NavLink>  
                <NavLink to="/"> <div className='cursor-pointer text-blue-900'><p>Mechanics </p></div></NavLink>  
                <NavLink to="/"> <div className='cursor-pointer text-blue-900'><p>IT services</p></div></NavLink>  
                <NavLink to="/"> <div className='cursor-pointer text-blue-900'><p>Automobile services</p></div></NavLink>  
                <NavLink to="/"> <div className='cursor-pointer text-blue-900'><p>Health services </p></div></NavLink>  
                <NavLink to="/"> <div className='cursor-pointer text-blue-900'><p>Essential services</p></div></NavLink>  
                <NavLink to="/"> <div className='cursor-pointer text-blue-900'><p>Beauty services</p></div></NavLink>  
                <NavLink to="/"> <div className='cursor-pointer text-blue-900'><p>Transportation services</p></div></NavLink>  
                <NavLink to="/"> <div className='cursor-pointer text-blue-900'><p>Finacial services</p></div></NavLink>  
                <NavLink to="/"> <div className='cursor-pointer text-blue-900'><p>Real estate</p></div></NavLink>  
               
                
            </div>
            <div>
              <div><h1 className='text-2xl font-bold'>About </h1></div>

                <NavLink to="/"> <div><p className=' text-blue-900'>Careers</p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Press & News</p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Partnerships</p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Privacy Policy</p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Terms of Service</p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Intellectual Property Claims</p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Investor Relations</p></div></NavLink>  
                
            </div>
            <div>
              <div><h1 className='text-2xl font-bold'>Support </h1></div>

                <NavLink to="/"> <div><p className=' text-blue-900'>Help & Support</p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Trust & Safety</p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Selling on MECHJI</p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Buying on MECHJI</p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>MECHJI Guides</p></div></NavLink>  
               
            </div>
            <div>
              <div><h1 className='text-2xl font-bold'>Community </h1></div>

                <NavLink to="/"> <div><p className=' text-blue-900'>Customer Success Stories</p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Community Hub</p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Forum </p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Events </p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Blog </p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Influencers </p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Affiliates</p></div></NavLink>  
                <NavLink to="/"> <div><p className=' text-blue-900'>Invite a Friend</p></div></NavLink>  
               
            </div>
           
        </div>

        {/* footer icons div */}

        <div className='flex justify-between items-center'>
            <div>
                <NavLink to="/">
                 <div className=''>
                    <h1 className='text-3xl md:text-5xl' >Mechji</h1>
                     <span className='text-sm'>Your Local Store</span>
                 </div>
               </NavLink>
            </div>
            <div className='flex items-center gap-5'>

                       <NavLink to="/"> <div>  <p> <i className="fa-brands fa-instagram text-xl "></i>  </p></div></NavLink>  
                        <NavLink to="/"> <div>  <p> <i className="fa-brands fa-youtube  text-xl "></i> </p></div></NavLink>  
                       <NavLink to="/"> <div>  <p> <i className="fa-brands fa-x-twitter text-xl "></i> </p></div></NavLink>  
                 </div>
        </div>
         
        {/* Copy rights text for footer */}

        
         <div><p className='text-xs pb-2'>Copyright © 2024 Mechji. All Rights Reserved.</p></div>
    </div>
  )
}

export default Footer