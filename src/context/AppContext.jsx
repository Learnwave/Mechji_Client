import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { shops } from "../assets/assets_frontend/assets";
import { products } from "../assets/assets_products/frontend_assets/assets";

export const AppContent = createContext();
           
export const AppContextProvider = (props)=>{

        axios.defaults.withCredentials = true
        const backendUrl = import.meta.env.VITE_BACKEND_URL
        
        const [token,setToken] = useState("");
        const [storeActive,setStoreActive] = useState("");
        console.log(storeActive);
        
       
        const [isLoggedin, setIsLoggedin] = useState(false);
        const [password,setPassword] = useState("");
        const [userData, setUserData] = useState(false);
        const currencySymbol = "$"
        
        const getLoginState = async ()=>{
            try {
            const loginToken = localStorage.getItem('token')
                if (loginToken) {
                   setToken(loginToken)
                    getUserData();
                }else{
                    console.log("secion");
                    
                }
            } catch (error) {
                toast.error(error.message)
            }
        }

        const getUserData = async ()=> {
            try {
                const {data} = await axios.get(backendUrl+"/api/user/data");
                
                if (data.success) {
                    setUserData(data.userData)
                    setIsLoggedin(true)
                    setStoreActive(data.userData.storeActiveStatus)
                }else{
                    setIsLoggedin(false)
                }

            } catch (error) {
                toast.error(error.message)
            }
        }

        useEffect(()=>{
            getLoginState();
        },[])

        const value = {
            backendUrl,isLoggedin,setIsLoggedin,setUserData,userData,getUserData,password,setPassword,shops,currencySymbol,products,token,setToken,
            storeActive,setStoreActive,
        }

        return(
            <AppContent.Provider value={value}>
                    {props.children}
            </AppContent.Provider>
        )
}