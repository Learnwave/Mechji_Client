import React, { useContext } from 'react'
import { AppContent } from '../context/AppContext'

const UnderReview = () => {

    const {userData} = useContext(AppContent)

  return (
    <div><div className="flex flex-col gap-4 items-center text-center mt-10 mb-10">
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
  </div></div>
  )
}

export default UnderReview