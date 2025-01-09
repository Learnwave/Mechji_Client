import React, { useContext } from "react";
import { AppContent } from "../context/AppContext";


const Dashboard = () => {
  const { storeActive, userData } = useContext(AppContent);
  return (
    <div className="flex">
      <div>
          {
              storeActive === "Active" ? <div> <div className='mt-6'>

              {/* Shop details */}
              <div className='flex flex-col sm:flex-row gap-4'>
       
               <div className='flex flex-col gap-5 flex-shrink-0'>
                  <img className='bg-primary w-full sm:max-w-72 h-60  rounded-md ' src={shopInfo.image} alt="" />
                  <div className=' flex flex-col gap-3 '>
                       <div className='flex items-center cursor-pointer px-7 py-2 text-center justify-center bg-black rounded-sm text-white '><p className=''>Inventory</p></div>
                       <div className='flex items-center cursor-pointer px-7 py-2 text-center justify-center bg-black rounded-sm text-white '><p className=''>Services</p></div>
                       <div className='flex items-center cursor-pointer px-7 py-2 text-center justify-center bg-black rounded-sm text-white '><p className=''>Offers</p></div>
                       <div className='flex items-center cursor-pointer px-7 py-2 text-center justify-center bg-black rounded-sm text-white '><p className=''>Reviews</p></div>
                       <div className='flex items-center cursor-pointer px-7 py-2 text-center justify-center bg-black rounded-sm text-white '><p className=''>About</p></div>
                 </div>
                </div>
       
                <div className='flex-1 border border-gray-400 rounded-md p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>
       
                 {/* Shop info name,type, category */}
                 <div>
                   
                    <p className='flex  items-center gap-2 text-2xl font-medium text-gray-900'>{shopInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /> </p>
                   <div className='flex items-center gap-2 text-sm mt-1 text-gray-600 '>
                   <p>{shopInfo.degree} - {shopInfo.speciality}  </p>
                   <button className='py-0.5 px-2 border text-xs rounded-full '>{shopInfo.experience}</button>
                  </div>
                    {/* shop about page */}
                 <div>
                   <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 '>About <img src={assets.info_icon} alt="" /></p>
                   <p className='text-sm text-gray-500 '>{shopInfo.about}</p>
                 </div>
                 <p className='text-gray-500 font-medium mt-4 '>
                    Appointment fee: <span className='text-gray-600'>{currencySymbol}{shopInfo.fees}</span>
                 </p>
                </div>
             <hr  className='my-3 border-0.5 border-gray-500 shadow shadow-gray-500'/>
                <div className='flex flex-col gap-4 '> 
                   <div className='flex gap-10 items-center '>
                     <p>All Products Listed by {shopInfo.name} </p>
                     <div className='py-1 px-4 flex items-center gap-2 border border-black max-w-92 rounded-md'>
                     <input className='border-none outline-none text-sm bg-transparent ' type="text" placeholder='Search Products ' name="" id="" />
                     <i className="fa-solid text-gray-700 text-sm fa-magnifying-glass"></i>
                     </div>
                   </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                       {
                         products.map((items,index)=>(<Products_Items key={index} name={items.name} id={items._id} price={items.price} image={items.image} />))
                       }
                     </div>
                 </div>
       
                 </div>
             </div>
       
             {/* left menu section of div */}
            
                      <ReletedShop category={shopInfo.category} storeId={storeId}  />   
           </div></div> : <></>
            }
      </div>
     

      {storeActive === "Under_Review" ?  <div className="flex flex-col gap-4 items-center text-center mt-10 mb-10">
          <h1 className="text-2xl font-bold">
            Welcome to Mechji ! Your Business Profile is Under Review
          </h1>
          Hi {userData.name},
          <p>
            Thank you for joining Mechji and creating your business profile!
            We’re excited to have you on board and are currently reviewing the
            details you submitted. This process helps us ensure a high-quality
            experience for all users on our platform.
          </p>
          <h1>What Happens Next?</h1>
          <p>
            Our team will carefully review your business profile within 24–48
            hours.
          </p>
          <p>
            Once the review is complete, we’ll notify you via email about the
            status of your profile.
          </p>
          <p>
            In the meantime, if you have any questions or need assistance, feel
            free to reach out to us at support@mechji.com or visit our{" "}
            <b className="text-indigo-700 cursor-pointer">Help Center link.</b>
            Thank you for your patience and for choosing our business profile to
            grow your business. Warm regards, The{" "}
            <b className="text-indigo-700 cursor-pointer">www.mechji.com</b>
            Team
          </p>
        </div> : <></>}

      {storeActive === "Rejected" ? (
        (
            <div className="flex flex-col gap-4 items-center text-center mt-10 mb-10">
              <h1 className="text-2xl font-bold">
                Action Required: Your Business Profile Submission
              </h1>
              Hi {userData.name},
              <p>
                Thank you for submitting your business profile on Mechji . We
                appreciate your interest in joining our platform and sharing your
                business with our community.
              </p>
              <h1>What Happens Next?</h1>
              <p>
                Upon reviewing your submission, we noticed some issues with the
                provided information, which unfortunately did not meet our
                verification criteria. For this reason, we are unable to approve
                your business profile at this time.
              </p>
              <p>Here are the reasons why your profile could not be approved:</p>
              <p>
                Once the review is complete, we’ll notify you via email about the
                status of your profile.
              </p>
              <p>
                We kindly request you to review and update the necessary information
                to ensure your profile complies with our guidelines. You can
                resubmit your business details by following these steps:
              </p>
              <p>Log in to your account .</p>
              <p>Navigate to the Edit Business Profile section.</p>
              <p>Correct the identified issues and submit the updated profile for review.</p>
              <p>
                In the meantime, if you have any questions or need assistance, feel
                free to reach out to us at support@mechji.com or visit our{" "}
                <b className="text-indigo-700 cursor-pointer">Help Center link.</b>
                Thank you for your patience and for choosing our business profile to
                grow your business. Warm regards, The{" "}
                <b className="text-indigo-700 cursor-pointer">www.mechji.com</b>
                Team
              </p>
            </div>
          )
      ) : <></>}
     
    </div>
  );
};

export default Dashboard;
