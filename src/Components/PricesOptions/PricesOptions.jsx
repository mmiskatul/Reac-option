import React from 'react';
import PricesOption from '../PricesOption/PricesOption';

const PricesOptions = () => {
    const pricesoptions=[
  {
    "id": 1,
    "planName": "Basic Plan",
    "price": 30,
    "duration": "per month",
    "features": [
      "Access to all gym equipment",
      "1 personal training session per month",
      "Locker room access",
      "Free Wi-Fi",
      "Access during staffed hours only",
      "No contract - cancel anytime",
      "Basic fitness assessment",
      "Free water refill station",
      "Introductory training guide",
      "Access to mobile app schedule"
    ]
  },
  {
    "id": 2,
    "planName": "Standard Plan",
    "price": 50,
    "duration": "per month",
    "features": [
      "24/7 gym access",
      "4 personal training sessions per month",
      "Group fitness classes (Yoga, HIIT, Zumba)",
      "Locker room & sauna access",
      "Fitness tracking app access",
      "1 guest pass per month",
      "Monthly progress report",
      "10% discount on supplements",
      "Health & wellness newsletter",
      "Access to stretching & recovery area"
    ]
  },
  {
    "id": 3,
    "planName": "Premium Plan",
    "price": 80,
    "duration": "per month",
    "features": [
      "Unlimited personal training",
      "All group classes included",
      "Customized nutrition consultation",
      "Body composition and BMI analysis",
      "Locker, sauna, and massage chair access",
      "Laundry service for gym clothes",
      "Priority class booking",
      "5 guest passes per month",
      "20% discount on gym products",
      "Advanced fitness reports and analysis"
    ]
  },
  {
    "id": 4,
    "planName": "Annual Plan",
    "price": 500,
    "duration": "per year",
    "features": [
      "All Premium benefits",
      "Monthly goal-setting session",
      "Exclusive member-only events",
      "Free gym merchandise kit",
      "2 free months included",
      "Free home workout equipment pack",
      "Dedicated VIP support hotline",
      "Access to partner gyms nationwide",
      "Annual health screening",
      "Custom long-term fitness roadmap"
    ]
  }
];


    return (
        <div className='m-12'>
            <h1 className='text-5xl'>Best Prices int the Town</h1>
            <div className='grid    grid-cols-2 items-center justify-center mt-5 gap-6  '>
                {
                pricesoptions.map(pricesoption=><PricesOption key={pricesoption.id} pricesoption={pricesoption}/>)
            }
            </div>
        </div>
    );
};

export default PricesOptions;