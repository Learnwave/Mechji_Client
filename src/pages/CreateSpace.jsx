import React, { useContext, useState } from "react";
import {assets} from '../assets/assets_admin/assets.js'
import { AppContent } from "../context/AppContext.jsx";
import { toast } from "react-toastify";
import axios from "axios";

const CreateSpace = () => {

  const {isLoggedin,backendUrl,token} = useContext(AppContent)

  const [sell, setSell] = useState("Goods");
  const [state,setState] = useState("Punjab")
  const[country,setCountry] = useState('India')

  const [file, setFile] = useState([]);
  const [bname,setBname] = useState("");
  const [email,setEmail] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [sellOption,setSellOption] = useState("");
  const [category,setCategory] = useState("");
  const [subCategory,setSubCategory] = useState("");
  const [addresss,setAddress] = useState("");
  const [workingRange,setWorkingRange] = useState("");
  const [serviceCharges,setServicesCharges] = useState("");
  const [password,setPassword] = useState("");
  const [about,setAbout] = useState("");

    
    
  const onSubmitHandler = async (event) => {
          event.preventDefault()
    try {
      if (file.length === 0) {
          return toast.error("Image Not Selected")
      }
      const formData = new FormData();
      formData.append('image',file)
      formData.append('bname',bname)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('phoneNumber',phoneNumber)
      formData.append('sellOption',sellOption)
      formData.append('category',category)
      formData.append('subCategory',subCategory)
      formData.append('addresss',addresss)
      formData.append('workingRange',workingRange)
      formData.append('serviceCharges',serviceCharges)
      
     const {data} = await axios.post(backendUrl + "/api/admin/add-shop",formData)
      
      if (data.success) {
          toast.success(data.message)
         

          
      }else{
          toast.error(data.message)
      }
      

  } catch (error) {
      toast.error(error)
      console.log(error)
  }

 
  }


  

  

  function uploadSingleFile(e) {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
    console.log("file", file);
  }

  function upload(e) {
    e.preventDefault();
    console.log(file);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }


  
  

  return isLoggedin && (
    <div>
      <div>
        <h1 className="text-2xl mt-3">
          Create your profile now and unlock endless opportunities to sell
          anything – from unique goods to professional services.
        </h1>

        <form onSubmit={onSubmitHandler} className="mt-10 mb-10 flex  flex-col  ">
          <div className="flex flex-col flex-wrap p-2 items-center justify-start  gap-4">
            <div className="flex gap-2 w-1/2 flex-col">
              

            <div className=" flex flex-col gap-3 ">
              <div className="w-full m-auto flex flex-col gap-2 items-center">
                <p className="text-xl">Upload images of your business</p>
               {file.length === 0 ?  <img className="w-32 border border-gray-300 rounded-full "   src={assets.upload_area} alt="" />
                  : <></>}
              </div>


                <div className=" flex gap-2.5 flex-wrap">
                


                 {file.length > 0 &&
                    file.map((item, index) => {
                   return (
                       <div className="flex  flex-col w-32 items-center justify-between rounded-sm  border border-black" key={item}>
                         <img className="w-32" src={item} alt="" />
                          <button className="bg-red-500 w-full flex items-center gap-3 justify-center text-white text-xs px-3 py-2" type="button" onClick={() => deleteFile(index)}> Delete </button>
                         </div>
                           );
                           })}
                       </div>

                <div className="form-group">
                    <div className="flex border border-black rounded-sm items-center justify-center">
                      <label htmlFor="pro-img" className="bg-black w-full flex items-center gap-3 justify-center text-white text-xs px-3 py-2"> Upload <i className="text-white text-sm fa-solid fa-cloud-arrow-up"></i></label>
                       

                     </div>
        
                    <input 
                    type="file"
                      disabled={file.length === 10}
                      placeholder="Ul"
                     className="" hidden
                     onChange={uploadSingleFile}
                     id="pro-img"
                     />
                </div>
     

                 

              </div>



              <div className=" flex flex-col gap-1">
                <label htmlFor="title">Your business name</label>
                <div className="border border-black rounded-sm p-2 ">
                  <input  required onChange={(e)=>setBname(e.target.value)} value={bname}
                    className="bg-transparent outline-none w-full text-sm"
                    placeholder="Enter your business name"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>

              <div className=" flex flex-col gap-1">
                <label htmlFor="title">Enter Phone Number</label>
                <div className="border border-black rounded-sm p-2 ">
                  <input
                    onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber}
                    className="bg-transparent outline-none w-full text-sm"
                    placeholder="Enter Phone Number"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
              </div>

              <div className=" flex flex-col gap-1">
                <label htmlFor="title">Enter Your Email-address</label>
                <div className="border border-black rounded-sm p-2 ">
                  <input  required
                    className="bg-transparent outline-none w-full text-sm"
                    placeholder="Enter Your Email-address"
                    type="email"
                    name=""
                    id=""
                    onChange={(e)=>setEmail(e.target.value) } value={email}
                  />
                </div>
              </div>

              <div className=" flex flex-col gap-1">
                <label htmlFor="title">Address</label>
                <div className="flex justify-center  border border-black rounded-sm p-2 ">
                  <input  required
                    className="bg-transparent outline-none w-full text-sm"
                    placeholder="Enter your address or pin on map"
                    type="address"
                    name=""
                    id=""
                    onChange={(e)=>setAddress(e.target.value) } value={addresss}
                  />
                  <i className=" cursor-pointer fa-solid fa-map-pin"></i>
                </div>
              </div>

             
              <div>
                <label htmlFor="business Type">
                  What would you like to sell here?
                </label>
                <div className="border border-black rounded-sm p-2 w-full">
                  <select  required
                    className="w-full bg-transparent outline-none"
                    name="" onChange={(e)=>setSell(e.target.value)} value={sell}
                    id=""
                  >
                    <option value="Goods">Goods</option>
                    <option value="Services">Services</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
              </div>

              
           
          <div className="w-full flex gap-2 flex-col">

           
            <div>
                <label htmlFor="business Type">
                  Category
                </label>
                <div className="border border-black rounded-sm p-2 ">
                  <select  required
                    className="w-full bg-transparent outline-none"
                    name=""
                    id=""
                    onChange={(e)=>setCategory(e.target.value) } value={category}
                  >
                    {
                     (sell === "Both" || sell === "Goods" ) ?  <option value="Shoping-stores">Shoping-stores</option> :<></>
                    }
                  
                   <option value="Technology">Technology</option>
                   <option value="Auto-mobiles">Auto-mobiles</option>
                   <option value="Heath-care">Heath-care</option>
                   <option value="Repair-and-fix">Repair-and-fix</option>
                   <option value="Hotel-and-restaurants">Hotel-and-restaurants</option>
                   <option value="Educational">Educational</option>
                   <option value="Property & Assets">Property & assets</option>
                   <option value="Essential">Essential</option>
                   <option value="Transports & Travels">Transports & travels</option>
                   <option value="Finacials">Finacials</option>
                   <option value="Personal">Personal</option>
                  </select>
                </div>
              </div>

              <div className=" flex flex-col gap-1">
                <label htmlFor="title">Sub-category</label>
                <div className="border border-black rounded-sm p-2 ">
                  <input  required
                    className="bg-transparent outline-none w-full text-sm"
                    placeholder="Enter your sub-category"
                    type="text"
                    name=""
                    id=""
                    onChange={(e)=>setSubCategory(e.target.value) } value={subCategory}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="business Type">
                Working Range From Your Location 
                </label>
                <div className="border border-black rounded-sm mt-1 p-2 ">
                  <select  required
                    className="w-full bg-transparent outline-none"
                    name=""
                    id=""
                    onChange={(e)=>setWorkingRange(e.target.value) } value={workingRange}
                  >
                    <option value="25-Km">25-Km</option>
                    <option value="50-Km">50-Km</option>
                    <option value="100-Km">100-Km</option>
                    <option value={state}>{state}</option>
                    <option value={country}>{country}</option>
                    {
                        (sell === "Both" || sell === "Services" ) ?  <option value="Remote">Work From Home</option> : <></>
                    }
                    
                  </select>
                </div>
              </div>

             {
                (sell === "Both" || sell === "Services" ) ?  <div className=" flex flex-col gap-1">
                <label htmlFor="title">Enter your service charge per hour</label>
                <div className="border flex items-center justify-center border-black rounded-sm p-2 ">
                  <span className="text-sm">Rs:</span>
                  <input  required
                    className="bg-transparent outline-none w-full text-sm"
                    placeholder="Enter your service charge per hour"
                    type="number"
                    name=""
                    id=""
                    onChange={(e)=>setServicesCharges(e.target.value) } value={serviceCharges}
                  />
                </div>
              </div> : <></> 
             } 

              <div className=" flex flex-col gap-1">
                <label htmlFor="title">Create profile password</label>
                <div className="flex justify-center  border border-black rounded-sm p-2 ">
                  <input  required
                    className="bg-transparent outline-none w-full text-sm"
                    placeholder="Enter unique profile password"
                    type="password"
                    name=""
                    id=""
                    onChange={(e)=>setPassword(e.target.value) } value={password}
                  />
                 
                </div>
              </div>

              <div>
          <p className="mt-4 mb-2 ">Write about your business</p>
          <textarea className="w-full px-4 pt-2 border bg-transparent border-black rounded "
            type="text"
            
            onChange={(e)=>setAbout(e.target.value)} value={about}
            placeholder="Write about your business"
            rows={5}
            required
            name=""
            id=""
          />
        </div>


              </div>   
          <button type="submit" className="bg-black rounded-sm px-8 py-2 text-white text-lg hover:bg-gray-900  cursor-pointer mt-10">Submit </button>
              </div>
             

          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSpace;
