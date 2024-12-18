import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
const ResetPassword = () => {

    axios.defaults.withCredentials = true
    const  {backendUrl,getUserData,setIsLoggedin,setPassword,password} = useContext(AppContent);

    const [minutes,setMintutes] = useState(0);
    const [seconds,setSeconds] = useState(59);

    const resendOtp = async ()=> {
       
        setMintutes(0);
        setSeconds(59);
        try {
            const {data} = await axios.post(backendUrl + "/api/auth/send-reset-otp",{email})
            data.success ? toast.success(data.message) : toast.error(data.message)
            data.success && setIsEmailSent(true)
        } catch (error) {
            toast.error(error.message)
        }
        
    }

    
    useEffect(()=>{
        const interval = setInterval(() => {
            if(seconds > 0 ){
                setSeconds(seconds - 1)
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                }else{
                    setSeconds(59);
                    setMintutes(minutes - 1);
                }
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    },[seconds]);

    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [newPassword,setNewPassword] = useState('')
    const [isEmailSent,setIsEmailSent] = useState()
    const [OTP,setOtp] = useState()
    const [isOtpSubmited,setIsOtpSubmited] = useState(false)

    

    const inputRef = React.useRef([])
    const handleInput = (e,index) => {
        if (e.target.value.length > 0 && index < inputRef.current.length - 1) {
            inputRef.current[index + 1].focus()
        }
    }
    const handleKeyDown = (e,index) => {
        if (e.key === 'Backspace' && e.target.value === "" && index > 0 )  {
            inputRef.current[index - 1].focus()
        }
    }

    const  handlePaste = (e)=>{
        const paste = e.clipboardData.getData('text')
        const pasteArray = paste.split("");
        pasteArray.forEach((char,index)=>{
                if(inputRef.current[index]){
                    inputRef.current[index].value = char ;
                    const otpArray = inputRef.current.map(e => e.value)
                    setOtp(otpArray.join(''))
                }
        })
    }
    const onSubmitEmail = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post(backendUrl + "/api/auth/send-reset-otp",{email})
            data.success ? toast.success(data.message) : toast.error(data.message)
            data.success && setIsEmailSent(true)
        } catch (error) {
            toast.error(error.message)
        }
    }
   

    const onSubmitOTP = async (e) => {
        e.preventDefault();
        console.log(OTP)
        try {
        const {data} = await axios.post(backendUrl + "/api/auth/verify-otp",{email,OTP})
        if(!data.success){return toast.error("Please Enter Valid Otp!")} 
            setIsOtpSubmited(true)   
            console.log(data)
        if(data.success){

            
            return toast("Your Otp is valid Now you can change your password");
        }
        } catch (error) {
            return toast.error("Please Enter Valid Otp!")
        }
        
        
    }

    const otpAddToState = (e)=>{
        const otpArray = inputRef.current.map(e => e.value)
        
        setOtp(otpArray.join(''))
    }
    
    const onSubmitNewPassword = async (e) => {
        e.preventDefault();
       
        try {
            const {data} = await axios.post(backendUrl + '/api/auth/reset-password',{email,OTP,newPassword})
            
            data.success ? toast.success(data.message) : toast.error(data.message);
            
            if (data.success) {
                setPassword(newPassword);
                const {data} =  await axios.post(backendUrl+'/api/auth/login',{email,password});
                getUserData();
                setIsLoggedin(true);
                navigate('/login')
            }
        } catch (error) {
         return  toast.error(error.message);
           
        }
    }



  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0  '>
           
    {/* email form */}
        {!isEmailSent && <form onSubmit={onSubmitEmail}  className='bg-transparent border border-gray-900 p-8 rounded-lg shadow-lg shadow-black w-96 text-sm'>
             <h1 className='text-black text-2xl font-semibold text-center mb-4'>Reset Password</h1>
             <p className='text-center mb-6 text-black'>Enter your registered email address </p>
             <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded bg-transparent border border-black'>
             <i class="fa-solid fa-envelope text-black"></i>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required name="" id="i" placeholder='Email Id' className='w-full bg-transparent outline-none  focus:bg-transparent  text-white' />
             </div>
                  <button className=' w-full py-2.5  bg-black border border-white text-white hover:bg-gray-800 rounded mt-3'>Submit</button>
             </form> }
            
    {/* reset password form */}
    {
        !isOtpSubmited && isEmailSent && <form onSubmit={onSubmitOTP}  className= 'bg-transparent flex flex-col border border-black shadow-black items-center gap-3 justify-between p-8 rounded-lg shadow-lg w-96 text-sm' >
        <h1 className='text-black text-2xl font-semibold text-center mb-4'>Reset Password OTP</h1>
           <p className='text-center mb-6 text-indigo-900'>Enter the 6-digit code sent to your Email Id </p>
             <div className='flex justify-between gap-1 ' onPaste={handlePaste}>
          {
             Array(6).fill(0).map((_,index)=>(
          <input onKeyDown={(e)=> handleKeyDown(e,index)} ref={e => inputRef.current[index] = e} onInput={(e)=> handleInput(e,index)} type="text" maxLength='1' key={index} required className='w-12 h-12 bg-transparent border border-black text-black text-center text-xl rounded' />
             ))
            }
       </div>
      <div className="countdown-text flex items-center w-full justify-around">
        <p className='text-black text-xs'>
            Time Remaining:{""}
            <span>
                {minutes < 10 ? `0${minutes}`: minutes}:
                {seconds < 10 ? `0${seconds}`: seconds}
            </span>
        </p>
        <button type='button' onClick={resendOtp} disabled={seconds > 0 || minutes > 0} style={{color: seconds > 0 || minutes > 0 ? "#9E9E9E":"#303F9F"}} className=' text-xs underline cursor-pointer' >Resend OTP</button>
      </div>
      <button type='submit' onClick={otpAddToState} className='w-full py-2.5 bg-black text-white text-lg rounded'>Submit</button>
   </form>
    }
            
    {/* New password form */}

    {
        isOtpSubmited && isEmailSent &&
  
             <form onSubmit={onSubmitNewPassword} className='bg-transparent p-8 rounded-lg shadow-black border border-black shadow-lg w-96 text-sm'>
             <h1 className='text-black text-2xl font-semibold text-center mb-4'>New Password</h1>
             <p className='text-center mb-6 text-black'>Enter the new password below</p>
             <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded bg-transparent border border-black'>
                <i class="fa-solid fa-lock text-black"></i>
                <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required name=""  placeholder='Password' className='bg-transparent outline-none text-black' />
             </div>
                  <button className=' w-full py-2.5 bg-black text-white rounded mt-3'>Submit</button>
             </form>
                }      
    </div>
  )
}

export default ResetPassword