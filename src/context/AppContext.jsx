import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { shops } from "../assets/assets_frontend/assets";
import { products } from "../assets/assets_products/frontend_assets/assets";

export const AppContent = createContext();

export const AppContextProvider = (props)=>{

        axios.defaults.withCredentials = true
        const backendUrl = import.meta.env.VITE_BACKEND_URL
        const [isLoggedin, setIsLoggedin] = useState(false);
        const [password,setPassword] = useState("");
        const [userData, setUserData] = useState(false);
        const currencySymbol = "$"
        const getAuthState = async ()=>{
            try {
                const {data} = await axios.get(backendUrl+"/api/auth/isAuth")
                if (data.success) {
                    setIsLoggedin(true);
                    getUserData();
                }
            } catch (error) {
                toast.error(error.message)
            }
        }

        const getUserData = async ()=> {
            try {
                const {data} = await axios.get(backendUrl+"/api/user/data");
                data.success ? setUserData(data.userData) : toast.error(data.message)
            } catch (error) {
                toast.error(error.message)
            }
        }

        useEffect(()=>{
            getAuthState();
        },[])

        const value = {
            backendUrl,isLoggedin,setIsLoggedin,setUserData,userData,getUserData,password,setPassword,shops,currencySymbol,products
        }

        return(
            <AppContent.Provider value={value}>
                    {props.children}
            </AppContent.Provider>
        )
}