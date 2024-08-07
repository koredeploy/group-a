import meal from '../../../assets/meal.png'
import time from '../../../assets/time.png'
import group from '../../../assets/group.png'

const FeaturesPage = () => {
  return (
    <section className='py-[3rem] w-full md:bg-[#F1F6FA] bg-[#ffffff] md:px-[5rem] px-[4.5rem]'>
      <div className='text-center'>
        <h1 className='md:text-[50px] text-[29px] font-semibold md:font-medium pb-[2rem]'>Special Features</h1>
      </div>

      <div className='md:flex grid w-full md:gap-[9rem] gap-[2rem]'>
        <div className='flex flex-col items-center gap-[1rem] text-center'>
            <div>
                <img src={meal} alt="" className='w-[4rem]'/>
            </div>
            <h1 className='font-medium md:text-[23.59px] text-[16px]'>Customizable Meal Plan</h1>
            <p className='md:text-[16px] text-[14px]'>Personalize your meals to suit your taste . Match items to create your perfect dish.&quot;</p>
        </div>
        <div className='flex flex-col items-center gap-[1rem] text-center'>
            <div>
                <img src={time} alt="" className='w-[4rem]'/>
            </div>
            <h1 className='font-medium md:text-[23.59px] text-[16px]'>Real-Time Order Tracking</h1>
            <p className='md:text-[16px] text-[14px]'>Track your order item from kitchen to doorstep. Know exactly when your meal will arrive.&quot;</p>
        </div>
        <div className='flex flex-col items-center  gap-[1rem] text-center'>
            <div>
                <img src={group} alt="" className='w-[4rem]'/>
            </div>
            <h1 className='font-medium md:text-[23.59px] text-[16px]'>Group Order</h1>
            <p className='md:text-[16px] text-[14px]'>Ordering for a crowd? Easily split and customize group orders for everyone.&quot;</p>
        </div>
      </div>
      
    </section>
  )
}

export default FeaturesPage
