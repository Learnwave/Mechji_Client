import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Shops from "./pages/Shops";
import Store from "./components/Store";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import UserProfile from "./pages/UserProfile";
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
      <ToastContainer />
       
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/shops" element={<Shops/>} />
        <Route path="/shops/:category" element={<Shops/>} />

        <Route path="/store/" element={<Store/>}/>
        <Route path="/store/:storeId" element={<Store/>}/>

        <Route path="/product/:productId" element={<Product/>} />

        <Route path="/profile" element={<UserProfile/>} />
      </Routes>

      <hr  className='my-5 border-0.5 border-gray-400 shadow'/>
     
      <Footer/>
    </div>
  );
};

export default App;
