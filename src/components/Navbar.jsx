import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
const Navbar = () => {
    const navigate = useNavigate();
    const {userData,backendUrl,setUserData,setIsLoggedin} = useContext(AppContent);

    const sendVerificationOtp = async ()=> {
        try {
            axios.defaults.withCredentials = true
            const {data} = await axios.post(backendUrl + '/api/auth/send-verify-otp')
            if (data.success) {
                navigate("/verify-email")
                toast.success(data.message)

            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout = async ()=>{
        try {
            console.log("function working")
            axios.defaults.withCredentials = true
            const {data} = await axios.post(backendUrl+'/api/auth/logout')
            console.log(data)
            data.success && setIsLoggedin(false);
            data.success && setUserData(false);
            navigate('/')

        } catch (error) {
            toast.error(error.message)
        }
    }
  return (
    <div>

   
    <div className='w-full mt-1  flex gap-3 justify-between items-center '>
        <Link to="/" >
            <h1 className='text-2xl sm:text-3xl md:text-5xl  '>Mechji</h1>
            <span className='text-xs'>All solutions in one place </span>
        </Link>

            {/* center part of navigation area */}

            <div className="nav_center hidden sm:flex  gap-3 items-center justify-between flex-grow-1 w-full">
                    <div className='flex gap-2 items-center w-1/2  h-10 border border-black rounded px-2 '>
                          <i class="fa-solid fa-location-crosshairs w-3"></i>
                        <input className='w-full bg-transparent text-sm p-1 outline-none' type="text" placeholder='India' name="location" id="location" />
                    </div>
                    <div className='w-full flex items-center h-10  border border-black rounded  '>
                        <input className='w-full bg-transparent text-sm p-1 outline-none ' type="text" placeholder='Find anything here' name="search" id="search" />
                        <div className='flex items-center  justify-center w-10 h-10 rounded  bg-black'>
                            
                            <i className="fa-solid fa-magnifying-glass cursor-pointer text-white"></i>
                        </div>
                        
                    </div>
            </div>

            {/* cart container */}

            <div>
                 <i class="fa-solid cursor-pointer fa-cart-plus w-8"></i>
            </div>
            {/* notification container */}

            <div>
                <i class="fa-solid cursor-pointer fa-envelope w-8"></i>
            </div>

        {userData ? <div className=' p-2 w-10 flex justify-center items-center rounded-full bg-black text-white relative group '> {userData.name[0].toUpperCase()} <div className=' absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10' > 
            <ul className='border w-48 border-black list-none m-1 p-2 rounded-md  bg-black text-white text-sm cursor-pointer flex flex-col gap-3 '> 
                <li className='text-xl'> Hi! {userData.name} <br /> <p onClick={()=>navigate("/profile")} className='text-sm text-indigo-200'>View Profile</p> </li>
                
                <p className='border hover:bg-slate-300 hover:text-black transition-all duration-300 rounded shadow shadow-white border-white px-2 py-1'>My Orders</p>
                <p className='border hover:bg-slate-300 hover:text-black transition-all duration-300 rounded shadow shadow-white border-white px-2 py-1'>Create Space <br /> <span className='text-xs'>Sell Anything here</span> </p>
                <p className='border hover:bg-slate-300 hover:text-black transition-all duration-300 rounded shadow shadow-white border-white px-2 py-1'>Install Mechji App </p>


            {!userData.isAccountVerified && <li onClick={sendVerificationOtp} className=' border border-white px-2 py-1 '>Verify email</li>}    
            
            <li  className='border hover:bg-slate-300 hover:text-black transition-all duration-300 rounded shadow shadow-white border-white px-2 py-1' onClick={logout} >Logout <i class="fa-solid fa-right-from-bracket"></i> </li>
            </ul> 
            </div> </div> :  <button onClick={()=>navigate('/login')} className='flex items-center gap-2 border hover:bg-slate-300 hover:text-black transition-all duration-300 rounded shadow shadow-white border-gray-500 rounded-full px-6 py-2 hover:bg-gray-100 transition-all '>Login <img src={assets.arrow_icon} alt="" /> </button> }
           
         </div>
         <hr className='border border-gray-300' />
    </div>
  )
}

export default Navbar