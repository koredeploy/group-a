import image from '../../../assets/image.png'
import React from 'react'

const InfoPage = () => {
  return (
    <section className='px-[5rem] flex w-full py-[5rem] items-center justify-center gap-[1rem]'>
        <div className='flex flex-col gap-[.5rem]'>
            <h1 className='text-[80px] font-light leading-[5.5rem]'>BECOME <br /> A VENDOR</h1>
            <div className='flex items-center gap-[.5rem] font-light'>
                <div>
                    <div className='border rounded-full px-[.2rem] py-[.2rem] bg-[#FF7834] border-[#FF7834]'></div>
                </div>
                <p>Increased Visibility: Reach thousands of hungry customers daily.</p>
            </div>
            <div className='flex items-center gap-[.5rem] font-light'>
                <div>
                    <div className='border rounded-full px-[.2rem] py-[.2rem] bg-[#FF7834] border-[#FF7834]'></div>
                </div>
                <p>Marketing Support: Benefit from our extensive marketing campaigns.</p>
            </div>
            <div className='flex items-center gap-[.5rem] font-light'>
                <div>
                    <div className='border rounded-full px-[.2rem] py-[.2rem] bg-[#FF7834] border-[#FF7834]'></div>
                </div>
                <p>Reliable Delivery: Fast and reliable delivery services.</p>
            </div>
            <div className='flex items-center gap-[.5rem] font-light'>
                <div>
                    <div className='border rounded-full px-[.2rem] py-[.2rem] bg-[#FF7834] border-[#FF7834]'></div>
                </div>
                <p>Analytics and Insights: Access to performance data and insights.</p>
            </div>
            <div className='flex items-center gap-[.5rem] font-light'>
                <div>
                    <div className='border rounded-full px-[.2rem] py-[.2rem] bg-[#FF7834] border-[#FF7834]'></div>
                </div>
                <p>Customer Support: 24/7 dedicated partner support.</p>
            </div>

            <div className='pt-[1.5rem]'>
                <button className='border bg-[#FF7834] text-white rounded-full py-[.5rem] px-[2rem] '>Become a Vendor</button>
            </div>

            
        </div>

      <div>
        <img src={image} alt="" className='w-[30rem]'/>
      </div>
    </section>
  )
}

export default InfoPage
