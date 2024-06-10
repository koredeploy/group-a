import meal from '../../../assets/meal.png'
import time from '../../../assets/time.png'
import group from '../../../assets/group.png'
import React from 'react'

const FeaturesPage = () => {
  return (
    <section className='py-[3rem] w-full bg-[#F1F6FA] px-[5rem]'>
      <div className='text-center'>
        <h1 className='text-[50px] pb-[2rem]'>Special Features</h1>
      </div>

      <div className='flex w-full gap-[9rem]'>
        <div className='flex flex-col items-center gap-[1rem] text-center'>
            <div>
                <img src={meal} alt="" className='w-[4rem]'/>
            </div>
            <h1 className='font-medium text-[23.59px]'>Customizable <br /> Meal Plan</h1>
            <p className=''>"Personalize your meals to suit your taste . Match items to create your perfect dish."</p>
        </div>
        <div className='flex flex-col items-center gap-[1rem] text-center'>
            <div>
                <img src={time} alt="" className='w-[4rem]'/>
            </div>
            <h1 className='font-medium text-[23.59px]'>Real-Time Order Tracking</h1>
            <p className=''>"Track your order item from kitchen to doorstep. Know exactly when your meal will arrive."</p>
        </div>
        <div className='flex flex-col items-center  gap-[1rem] text-center'>
            <div>
                <img src={group} alt="" className='w-[4rem]'/>
            </div>
            <h1 className='font-medium text-[23.59px]'>Group <br /> Order</h1>
            <p className=''>"Ordering for a crowd? Easily split and customize group orders for everyone."</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesPage
