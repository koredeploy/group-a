import React from 'react'
import Cart from '../../../components/Cart/Cart'
import pic from '../../../assets/pic.png'

const Notification = () => {
  return (
    <div className='w-full flex relative z-1'>
      <div className=' pl-[18rem] px-[2rem] w-full py-[7rem]' >
        <h1 className='text-[28.5px] font-semibold text-[#0C513F] py-[1rem]'>Notifications</h1>

        <div className='border border-white rounded-md font-semibold text-[#0C513F] bg-white  px-5 py-3'>
            <h2 className='text-[28.5px]'>Today</h2>

            <div className='flex border-b border-[#80808080] items-center gap-4 py-5 justify-between'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={pic} alt="" className='rounded-full w-[4rem]'/>
                    </div>

                    <div>
                        <h3 className='text-xl'>Jason Fredrick</h3>
                        <p className='text-[15.26px] font-light'>2:00PM</p>
                        <h4 className='text-[19.07px] font-medium'>Techie Kitchen</h4>
                        <h5 className='text-base font-light'>Your order will arrive in 20mins</h5>
                    </div>
                </div>

                <div>
                    <h6 className='text-xl font-medium mx-[3rem]'>JUN 21, 2024</h6>
                </div>
            </div>
            <div className='flex border-b border-[#80808080] items-center gap-4 py-5 justify-between'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={pic} alt="" className='rounded-full w-[4rem]'/>
                    </div>

                    <div>
                        <h3 className='text-xl'>Jason Fredrick</h3>
                        <p className='text-[15.26px] font-light'>2:00PM</p>
                        <h4 className='text-[19.07px] font-medium'>Techie Kitchen</h4>
                        <h5 className='text-base font-light'>Your order will arrive in 20mins</h5>
                    </div>
                </div>

                <div>
                    <h6 className='text-xl font-medium mx-[3rem]'>JUN 21, 2024</h6>
                </div>
            </div>
            <div className='flex border-b border-[#80808080] items-center gap-4 py-5 justify-between'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={pic} alt="" className='rounded-full w-[4rem]'/>
                    </div>

                    <div>
                        <h3 className='text-xl'>Jason Fredrick</h3>
                        <p className='text-[15.26px] font-light'>2:00PM</p>
                        <h4 className='text-[19.07px] font-medium'>Techie Kitchen</h4>
                        <h5 className='text-base font-light'>Your order will arrive in 20mins</h5>
                    </div>
                </div>

                <div>
                    <h6 className='text-xl font-medium mx-[3rem]'>JUN 21, 2024</h6>
                </div>
            </div>
            <div className='flex border-b border-[#80808080] items-center gap-4 py-5 justify-between'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={pic} alt="" className='rounded-full w-[4rem]'/>
                    </div>

                    <div>
                        <h3 className='text-xl'>Jason Fredrick</h3>
                        <p className='text-[15.26px] font-light'>2:00PM</p>
                        <h4 className='text-[19.07px] font-medium'>Techie Kitchen</h4>
                        <h5 className='text-base font-light'>Your order will arrive in 20mins</h5>
                    </div>
                </div>

                <div>
                    <h6 className='text-xl font-medium mx-[3rem]'>JUN 21, 2024</h6>
                </div>
            </div>
        </div>
        <div className='border border-white rounded-md font-semibold text-[#0C513F] bg-white  px-5 py-3'>
            <h2 className='text-[28.5px]'>Yesterday</h2>

            <div className='flex border-b border-[#80808080] items-center gap-4 py-5 justify-between'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={pic} alt="" className='rounded-full w-[4rem]'/>
                    </div>

                    <div>
                        <h3 className='text-xl'>Jason Fredrick</h3>
                        <p className='text-[15.26px] font-light'>2:00PM</p>
                        <h4 className='text-[19.07px] font-medium'>Techie Kitchen</h4>
                        <h5 className='text-base font-light'>Your order will arrive in 20mins</h5>
                    </div>
                </div>

                <div>
                    <h6 className='text-xl font-medium mx-[3rem]'>JUN 21, 2024</h6>
                </div>
            </div>
            <div className='flex border-b border-[#80808080] items-center gap-4 py-5 justify-between'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={pic} alt="" className='rounded-full w-[4rem]'/>
                    </div>

                    <div>
                        <h3 className='text-xl'>Jason Fredrick</h3>
                        <p className='text-[15.26px] font-light'>2:00PM</p>
                        <h4 className='text-[19.07px] font-medium'>Techie Kitchen</h4>
                        <h5 className='text-base font-light'>Your order will arrive in 20mins</h5>
                    </div>
                </div>

                <div>
                    <h6 className='text-xl font-medium mx-[3rem]'>JUN 21, 2024</h6>
                </div>
            </div>
        </div>
      </div>
      <Cart />
    </div>
  )
}

export default Notification
