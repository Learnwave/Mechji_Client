import React, { useContext, useState } from "react";
import { AppContent } from "../context/AppContext.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateSpace = () => {

  
  
  const statesAndUTs = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands", // Union Territory
    "Chandigarh", // Union Territory
    "Dadra and Nagar Haveli and Daman and Diu", // Union Territory
    "Delhi", // Union Territory
    "Jammu and Kashmir", // Union Territory
    "Ladakh", // Union Territory
    "Lakshadweep", // Union Territory
    "Puducherry" // Union Territory
  ];
  
  const { isLoggedin, backendUrl, token ,setStoreActive,storeActive } = useContext(AppContent);

  const [files, setFiles] = useState([]); // Store selected files
  const [previewImages, setPreviewImages] = useState([]); // For previewing selected images

  

  const [bname, setBname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sell, setSell] = useState("Goods");
  const [category, setCategory] = useState("Shoping-store");
  const [subCategory, setSubCategory] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("Andhra Pradesh");
  const [country, setCountry] = useState("india");
  const [workingRange, setWorkingRange] = useState("25-Km");
  const [serviceCharges, setServicesCharges] = useState("0");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");
  
  const navigate = useNavigate();


  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files); // Convert FileList to array
    setFiles(selectedFiles);

    // Generate previews
    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (files.length === 0) {
        return toast.error("Image Not Selected");
      }
      const formData = new FormData();

      files.forEach((file, index) => {
        formData.append("images", file); // Backend key name is 'images'
      });

      formData.append("bname", bname);
      formData.append("phoneNumber", phoneNumber);
      formData.append("password", password);
      formData.append("sellOptions", sell);
      formData.append("category", category);

      formData.append("street", street);
      formData.append("city", city);
      formData.append("pincode", pincode);
      formData.append("state", state);
      formData.append("country", country);

      formData.append("subCategory", subCategory);
      formData.append("workingRange", workingRange);
      formData.append("serviceCharges", serviceCharges);
      formData.append("about", about);

      const { data } = await axios.post(
        backendUrl + "/api/store/add-store",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
        navigate("/under-review")
        setStoreActive(true)

       
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  return (
    isLoggedin && storeActive === "" && (
      <div>
        <div>
          <h1 className="text-2xl mt-3">
            Create your profile now and unlock endless opportunities to sell
            anything – from unique goods to professional services.
          </h1>

          <form
            onSubmit={onSubmitHandler}
            className="mt-10 mb-10 flex  flex-col  "
          >
            <div className="flex flex-col flex-wrap p-2 items-center justify-start  gap-4">
              <div className="flex gap-2 w-1/2 flex-col">
                <div className=" flex flex-col gap-3 ">
                  <div className="w-full m-auto flex flex-col gap-2 items-center">
                    <p className="text-xl">Upload images of your business</p>

                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {previewImages.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`Preview ${index}`}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                      ))}
                    </div>

                    <input
                      type="file"
                      multiple // Allow multiple files
                      accept="image/*" // Accept only image files
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <div className=" flex flex-col gap-1">
                  <label htmlFor="title">Your business name</label>
                  <div className="border border-black rounded-sm p-2 ">
                    <input
                      required
                      onChange={(e) => setBname(e.target.value)}
                      value={bname}
                      className="bg-transparent outline-none w-full text-sm"
                      placeholder="Enter your business name"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className=" flex flex-col gap-1">
                  <label htmlFor="title">Your phone number</label>
                  <div className="border border-black rounded-sm p-2 ">
                    <input
                      required
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className="bg-transparent outline-none w-full text-sm"
                      placeholder="Enter your phone number"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className=" flex flex-col gap-1">
                  <label htmlFor="address">Enter your address</label>
                  <div className="flex gap-1">

                  <div className="flex justify-center  border border-black rounded-sm p-2 ">
                    <input
                      required
                      className="bg-transparent outline-none w-full text-xs "
                      placeholder="Enter your street"
                      type="address"
                      name=""
                      id=""
                      onChange={(e) => setStreet(e.target.value)}
                      value={street}
                      />
                    <i className=" cursor-pointer fa-solid fa-map-pin"></i>
                  </div>

                  <div className=" flex flex-col gap-1">
                 
                  <div className="border border-black rounded-sm p-2 ">
                    <input
                      required
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                      className="bg-transparent outline-none w-full text-xs"
                      placeholder="Enter your city name"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className=" flex flex-col gap-1">
                 
                 <div className="border border-black rounded-sm p-2 ">
                   <input
                     required
                     onChange={(e) => setPincode(e.target.value)}
                     value={pincode}
                     className="bg-transparent outline-none w-full text-xs"
                     placeholder="Enter your pin-code"
                     type="text"
                     name=""
                     id=""
                   />
                 </div>
               </div>

                  <div className="flex justify-center  border border-black rounded-sm p-2"> 
                  <select  className="bg-transparent outline-none w-full text-xs" onChange={(e)=>setState(e.target.value)} value={state} name="" id="">
                    {
                      statesAndUTs.map((state,index)=>(
                        <option key={index} >{state}</option>
                      ))
                    }
                  </select>
                  </div>

                  
                  
                </div>

                
                </div>

                <div>
                  <label htmlFor="business Type">
                    What would you like to sell here?
                  </label>
                  <div className="border border-black rounded-sm p-2 w-full">
                    <select
                      required
                      className="w-full bg-transparent outline-none"
                      name=""
                      onChange={(e) => setSell(e.target.value)}
                      value={sell}
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
                    <label htmlFor="business Type">Category</label>
                    <div className="border border-black rounded-sm p-2 ">
                      <select
                        required
                        className="w-full bg-transparent outline-none"
                        name=""
                        id=""
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                      >
                        {sell === "Both" || sell === "Goods" ? (
                          <option value="Shoping-stores">Shoping-stores</option>
                        ) : (
                          <></>
                        )}

                        <option value="Technology">Technology</option>
                        <option value="Auto-mobiles">Auto-mobiles</option>
                        <option value="Heath-care">Heath-care</option>
                        <option value="Repair-and-fix">Repair-and-fix</option>
                        <option value="Hotel-and-restaurants">
                          Hotel-and-restaurants
                        </option>
                        <option value="Educational">Educational</option>
                        <option value="Property & Assets">
                          Property & assets
                        </option>
                        <option value="Essential">Essential</option>
                        <option value="Transports & Travels">
                          Transports & travels
                        </option>
                        <option value="Finacials">Finacials</option>
                        <option value="Personal">Personal</option>
                      </select>
                    </div>
                  </div>

                  <div className=" flex flex-col gap-1">
                    <label htmlFor="title">Sub-category</label>
                    <div className="border border-black rounded-sm p-2 ">
                      <input
                        required
                        className="bg-transparent outline-none w-full text-sm"
                        placeholder="Enter your sub-category"
                        type="text"
                        name=""
                        id=""
                        onChange={(e) => setSubCategory(e.target.value)}
                        value={subCategory}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="business Type">
                      Working range from your location
                    </label>
                    <div className="border border-black rounded-sm mt-1 p-2 ">
                      <select
                        required
                        className="w-full bg-transparent outline-none"
                        name=""
                        id=""
                        onChange={(e) => setWorkingRange(e.target.value)}
                        value={workingRange}
                      >
                        <option  value="25-Km">25-Km</option>
                        <option  value="50-Km">50-Km</option>
                        <option  value="100-Km">100-Km</option>
                        <option  value="Punjab">Punjab</option>
                        <option  value="India">India</option>
                        {sell === "Both" || sell === "Services" ? (
                          <option  value="Remote">Work From Home</option>
                        ) : (
                          <></>
                        )}
                      </select>
                    </div>
                  </div>

                  {sell === "Both" || sell === "Services" ? (
                    <div className=" flex flex-col gap-1">
                      <label htmlFor="title">
                        Enter your service charge per hour
                      </label>
                      <div className="border flex items-center justify-center border-black rounded-sm p-2 ">
                        <span className="text-sm">Rs:</span>
                        <input
                          required
                          className="bg-transparent outline-none w-full text-sm"
                          placeholder="Enter your service charge per hour"
                          type="number"
                          name=""
                          id=""
                          onChange={(e) => setServicesCharges(e.target.value)}
                          value={serviceCharges}
                        />
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}

                  <div className=" flex flex-col gap-1">
                    <label htmlFor="title">Create profile password</label>
                    <div className="flex justify-center  border border-black rounded-sm p-2 ">
                      <input
                        required
                        className="bg-transparent outline-none w-full text-sm"
                        placeholder="Enter unique profile password"
                        type="password"
                        name=""
                        id=""
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mt-4 mb-2 ">Write about your business</p>
                    <textarea
                      className="w-full px-4 pt-2 border bg-transparent border-black rounded "
                      type="text"
                      onChange={(e) => setAbout(e.target.value)}
                      value={about}
                      placeholder="Write about your business"
                      rows={5}
                      required
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-black rounded-sm px-8 py-2 text-white text-lg hover:bg-gray-900  cursor-pointer mt-10"
                >
                  Submit{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default CreateSpace;
