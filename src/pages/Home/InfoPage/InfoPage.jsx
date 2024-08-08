import image from '../../../assets/image.png'
import React from 'react'

const InfoPage = () => {
  return (
    <section className='md:px-[5rem] px-[3rem] md:flex md:flex-row flex flex-col-reverse w-full md:py-[5rem] py-[2rem] md:items-center md:gap-[1rem] gap-[2rem]'>
        <div className='flex flex-col gap-[.5rem]'>
            <h1 className='md:text-[80px] text-[45px] font-light md:leading-[5.5rem] leading-[3rem]'>BECOME <br /> A VENDOR</h1>
            <div className='flex items-baseline gap-[.5rem] font-light'>
                <div>
                    <div className='border rounded-full md:px-[.2rem] px-[.15rem] md:py-[.2rem] py-[.15rem] bg-[#FF7834] border-[#FF7834]'></div>
                </div>
                <p className='md:text-[16px] md:w-[32rem] text-[12px] '>Increased Visibility: Reach thousands of hungry customers daily.</p>
            </div>
            <div className='flex items-baseline gap-[.5rem] font-light'>
                <div>
                    <div className='border rounded-full md:px-[.2rem] px-[.15rem] md:py-[.2rem] py-[.15rem] bg-[#FF7834] border-[#FF7834]'></div>
                </div>
                <p className='md:text-[16px] md:w-[32rem] text-[12px]'>Marketing Support: Benefit from our extensive marketing campaigns.</p>
            </div>
            <div className='flex items-baseline gap-[.5rem] font-light'>
                <div>
                    <div className='border rounded-full md:px-[.2rem] px-[.15rem] md:py-[.2rem] py-[.15rem] bg-[#FF7834] border-[#FF7834]'></div>
                </div>
                <p className='md:text-[16px] md:w-[32rem] text-[12px]'>Reliable Delivery: Fast and reliable delivery services.</p>
            </div>
            <div className='flex items-baseline gap-[.5rem] font-light'>
                <div>
                    <div className='border rounded-full md:px-[.2rem] px-[.15rem] md:py-[.2rem] py-[.15rem] bg-[#FF7834] border-[#FF7834]'></div>
                </div>
                <p className='md:text-[16px] md:w-[32rem] text-[12px]'>Analytics and Insights: Access to performance data and insights.</p>
            </div>
            <div className='flex items-baseline gap-[.5rem] font-light'>
                <div>
                    <div className='border rounded-full md:px-[.2rem] px-[.15rem] md:py-[.2rem] py-[.15rem] bg-[#FF7834] border-[#FF7834]'></div>
                </div>
                <p className='md:text-[16px] md:w-[32rem] text-[12px]'>Customer Support: 24/7 dedicated partner support.</p>
            </div>

            <div className='pt-[1.5rem]'>
                <button className='border bg-[#FF7834] text-white rounded-xl py-[1rem] px-[2rem] '>Become a Vendor</button>
            </div>

            
        </div>

      <div className='w-full'>
        <img src={image} alt="" className='w-full'/>
      </div>
    </section>
  )
}

export default InfoPage
