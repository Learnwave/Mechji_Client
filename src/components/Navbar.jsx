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
            <ul className='list-none m-0 p-2 bg-gray-100 text-sm '> 
            <button>View Profiles</button>
            {!userData.isAccountVerified && <li onClick={sendVerificationOtp} className=' py-1 px-2 hover:bg-gray-200 cursor-pointer'>Verify email</li>}    
            
            <li  className='py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10' onClick={logout} >Logout</li>
            </ul> 
            </div> </div> :  <button onClick={()=>navigate('/login')} className='flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 hover:bg-gray-100 transition-all '>Login <img src={assets.arrow_icon} alt="" /> </button> }
           
         </div>
         <hr className='border border-gray-300' />
    </div>
  )
}

export default Navbar