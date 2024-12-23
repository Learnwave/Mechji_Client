import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
const Login = () => {
    const [state,setState] = useState("Login");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [passView,setPassView] = useState('password')
    const navigate = useNavigate('')

    const {backendUrl,setIsLoggedin, isLoggedin ,getUserData,setPassword,password} = useContext(AppContent);

    const passwordView = ()=> {
        if(passView === "password"){
            setPassView("text")
        }else{
            setPassView("password")
        }
    }
   
    const onSubmitHandler = async (e)=>{
        try {
            e.preventDefault();
            axios.defaults.withCredentials = true 
            if (state === 'Sign Up') {
                const {data} =  await axios.post(backendUrl+'/api/auth/register',{name,email,password});
                if(data.success){
                    setIsLoggedin(true);
                    getUserData();
                    navigate('/')
                }else{
                    toast.error(error.message);
                }
            }else{
                const {data} =  await axios.post(backendUrl+'/api/auth/login',{email,password});
                console.log(data)
                if(data.success){
                    setIsLoggedin(true);
                    getUserData();
                    navigate("/")
                }else{
                    data.
                    toast.error(error.message);
                }

            }

        } catch (error) {
            toast.error(error.message);
        }
    }

  return !isLoggedin ? (
    <div className='flex items-start mt-16 sm:items-center  justify-center min-h-[80vh]   sm:px-0  '>
      
        <div className='border border-gray-600  shadow-black p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm'>
          <h2 className='text-3xl font-semibold text-black text-center mb-3'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
          <p className='text-center text-black text-sm mb-6'>{state === 'Sign Up' ? 'Create Your Account' : 'Login to your account!'}</p>
          
          <form onSubmit={onSubmitHandler} className='flex flex-col gap-3' >
            {state === "Sign Up"  && (<div className=' rounded  flex items-center gap-2 w-full px-5 py-2.5  border border-gray-500'>
                     <i class="fa-solid fa-user w-4 text-black"></i>
                    <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full   bg-transparent outline-none text-black ' type="text" placeholder='Full-name' required name="" id="" />
                </div>)}
                
                <div className=' flex items-center gap-3 w-full px-5 py-2.5 rounded border border-gray-500'>
                     <i class="fa-solid fa-envelope text-black"></i>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full  bg-transparent outline-none text-black' type="email" placeholder='Email-id' required name="" id="" />
                </div>
                <div className=' flex items-center gap-3 w-full px-5 py-2.5 rounded border border-gray-500'>
                     <i class="fa-solid fa-lock text-black"></i>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full  bg-transparent outline-none text-black  flex-grow ' type={passView} placeholder='Password' required name="" id="" />
                    <img onClick={passwordView} className=' w-5  cursor-pointer' src={assets.eye_slash} alt="" />
                </div>
                <p className=' w-full text-right'><span onClick={()=>navigate('/reset-password')} className=' text-right  underline text-indigo-900 cursor-pointer' >Forgot Password?</span></p>
                <div className=' flex flex-col gap-2'>

                    <button className='w-full py-2.5 rounded border text-lg border-white text-white bg-black font-medium hover:bg-gray-800'>{state}</button>
                    <p className='text-xs text-black text-center  '>Or login with</p>
                    <div className='flex items-center justify-between'>
                        <button type='button' className='text-black  flex flex-col cursor-pointer text-xs gap-1'>  <i class="fa-brands cursor-pointer text-3xl self-center text-black  fa-google"></i>Google</button>
                       <button type='button' className='text-black  flex flex-col cursor-pointer text-xs gap-1'> <i class="fa-brands cursor-pointer text-3xl self-center text-black  fa-facebook"></i>Facebook</button>
                        <button type='button' className='text-black  flex flex-col cursor-pointer text-xs gap-1'> <i class="fa-brands cursor-pointer text-3xl self-center text-black  fa-apple"></i>Apple</button>
                        
                    </div>
                </div>
          </form>
          {state === "Sign Up" ?<p className='text-black text-center text-sm mt-4'>Already have an account?{' '} <span 
          onClick={()=>setState("Login")} className='text-indigo-900 cursor-pointer underline'>Login here</span></p> : 
           <p className='text-black text-center text-sm mt-4'>Don't have an account?{' '} <span onClick={()=>setState("Sign Up")} className='text-indigo-900 cursor-pointer underline'>Sign here</span></p> }
                
               
        </div>
    </div>
  ) : <div className=' h-screen w-full flex flex-col mt-10 gap-10 items-center'>
            <div className=''>
                <p className='text-3xl font-semibold'>You are Already Logged in </p>

                <p onClick={()=>navigate("/")} className='text-indigo-900 mt-10 text-center cursor-pointer'>Click here and go to home page </p>
            </div>
         </div>
}

export default Login