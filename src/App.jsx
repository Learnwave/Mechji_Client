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
import MyOrder from "./pages/MyOrder";
import CreateSpace from "./pages/CreateSpace";
import InstallApp from "./pages/InstallApp";
import Dashboard from "./pages/Dashboard";
import UnderReview from "./components/UnderReview";
import ProfileRejected from "./components/ProfileRejected";
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

        <Route path="/my-orders" element={<MyOrder/>}/>
        <Route path="/create-space" element={<CreateSpace/>}/>

        <Route path="/install-app" element={<InstallApp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>

        <Route path="/under-review" element={<UnderReview/>}/>
        <Route path="/profile-rejected" element={<ProfileRejected/>}/>


      </Routes>

      <hr  className='my-5 border-0.5 border-gray-400 shadow'/>
     
      <Footer/>
    </div>
  );
};

export default App;
