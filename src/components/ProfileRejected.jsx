import React, { useContext } from 'react'
import { AppContent } from '../context/AppContext'
import {  useNavigate } from 'react-router-dom';

const ProfileRejected = () => {
    const {userData} = useContext(AppContent);
    const navigate = useNavigate();
  return (
    <div>
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
             
              <p>
                <b className='text-2xl'>Upon reviewing your submission</b> <br /> we noticed some issues with the
                provided information, which unfortunately did not meet our
                verification criteria. For this reason, we are unable to approve
                your business profile at this time.
              </p>
              <p className='text-2xl font-bold'>Here are the reasons why your profile could not be approved:</p>
              <p>
                Once the review is complete, we’ll notify you via email about the
                status of your profile.
              </p>
              <p>
                We kindly request you to review and update the necessary information
                to ensure your profile complies with our guidelines. You can
                resubmit your business details by following these steps:
              </p>
              <p >Log in to your account</p>
              <p>Navigate to the Edit Business Profile section.</p>
              <p>Correct the identified issues and submit the updated profile for review.</p>
              <button onClick={()=>navigate("/create-space")} className='px-6 py-2 bg-black text-sm text-white rounded-sm hover:bg-gray-700  '>Create Space Again</button>
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
    </div>
  )
}

export default ProfileRejected