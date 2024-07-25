import React from 'react'
import Cart from '../../../components/Cart/Cart'
import { CiSearch } from 'react-icons/ci'
import open from '../../../assets/open.svg'
import action from '../../../assets/action.svg'

const Order = () => {
  return (
    <div className='w-full flex relative z-1'>
      <div className='pl-[18rem] px-[2rem] w-full py-[7rem]'>
      <h1 className='text-[28.5px] font-semibold text-[#0C513F] py-[1rem]'>
        Order History
      </h1>

        <div className='border border-white rounded-md font-semibold text-[#0C513F] bg-white  px-5 py-3'>
            <div className='w-[30rem] py-2 relative'>
                <input type="text" placeholder='search history' className='font-normal text-[15.28px] border-[1.5px] w-full py-3 px-10 outline-none border-[#191B1D] rounded-md'/>
                <CiSearch className="absolute px-2 top-0 my-3" fontSize={40}/>
            </div>

            <div className='w-full bg-[#FF7834] text-white py-3 rounded-md mt-5 flex'>
                <h2 className='px-4 text-[18.25px]'>ID</h2>
                <div className='px-[4rem] flex items-center gap-2'>
                    <img src={open} alt="" />
                    <h3>Menu</h3>
                </div>
                <div className='px-[3.5rem] flex items-center gap-2'>
                    <img src={open} alt="" />
                    <h3>Date</h3>
                </div>
                <div className='px-[2rem] flex items-center gap-2'>
                    <img src={open} alt="" />
                    <h3>Amount</h3>
                </div>
                <div className='px-[7.5em] flex items-center gap-2'>
                    <img src={open} alt="" />
                    <h3>Status</h3>
                </div>
                <h4>Action</h4>
            </div>

            <div className='mt-5  flex items-center font-medium gap-[2rem] text-[#191B1D] '>
                <h1 className='text-[14.19px] px-4'>#24643</h1>
                <h2 className='text-[11.93px] '>Chicken curry special with <br className=''/> cucumber</h2>
                <h3 className='text-[15.55px] flex gap-2'>
                    9/4/12 
                    <span>
                    10:00am
                    </span>
                </h3>
                <h4>N3000</h4>
                <h5 className='text-[#39BC0B] px-40 w-[20rem]'>Completed</h5>
                <img src={action} alt="" />
            </div>
            <div className='mt-5  flex items-center font-medium gap-[2rem] text-[#191B1D] '>
                <h1 className='text-[14.19px] px-4'>#24643</h1>
                <h2 className='text-[11.93px] '>Chicken curry special with <br className=''/> cucumber</h2>
                <h3 className='text-[15.55px] flex gap-2'>
                    9/4/12 
                    <span>
                    10:00am
                    </span>
                </h3>
                <h4>N3000</h4>
                <h5 className='text-[#F8BD00] px-40 w-[20rem]'>Pending</h5>
                <img src={action} alt="" />
            </div>
            <div className='mt-5  flex items-center font-medium gap-[2rem] text-[#191B1D] '>
                <h1 className='text-[14.19px] px-4'>#24643</h1>
                <h2 className='text-[11.93px] '>Chicken curry special with <br className=''/> cucumber</h2>
                <h3 className='text-[15.55px] flex gap-2'>
                    9/4/12 
                    <span>
                    10:00am
                    </span>
                </h3>
                <h4>N3000</h4>
                <h5 className='text-[#39BC0B] px-40 w-[20rem]'>Completed</h5>
                <img src={action} alt="" />
            </div>
            <div className='mt-5  flex items-center font-medium gap-[2rem] text-[#191B1D] '>
                <h1 className='text-[14.19px] px-4'>#24643</h1>
                <h2 className='text-[11.93px] '>Chicken curry special with <br className=''/> cucumber</h2>
                <h3 className='text-[15.55px] flex gap-2'>
                    9/4/12 
                    <span>
                    10:00am
                    </span>
                </h3>
                <h4>N3000</h4>
                <h5 className='text-[#39BC0B] px-40 w-[20rem]'>Completed</h5>
                <img src={action} alt="" />
            </div>
            <div className='mt-5  flex items-center font-medium gap-[2rem] text-[#191B1D] '>
                <h1 className='text-[14.19px] px-4'>#24643</h1>
                <h2 className='text-[11.93px] '>Chicken curry special with <br className=''/> cucumber</h2>
                <h3 className='text-[15.55px] flex gap-2'>
                    9/4/12 
                    <span>
                    10:00am
                    </span>
                </h3>
                <h4>N3000</h4>
                <h5 className='text-[#BD3826] px-40 w-[20rem]'>Cancelled</h5>
                <img src={action} alt="" />
            </div>
            <div className='mt-5  flex items-center font-medium gap-[2rem] text-[#191B1D] '>
                <h1 className='text-[14.19px] px-4'>#24643</h1>
                <h2 className='text-[11.93px] '>Chicken curry special with <br className=''/> cucumber</h2>
                <h3 className='text-[15.55px] flex gap-2'>
                    9/4/12 
                    <span>
                    10:00am
                    </span>
                </h3>
                <h4>N3000</h4>
                <h5 className='text-[#F8BD00] px-40 w-[20rem]'>Pending</h5>
                <img src={action} alt="" />
            </div>
            <div className='mt-5  flex items-center font-medium gap-[2rem] text-[#191B1D] '>
                <h1 className='text-[14.19px] px-4'>#24643</h1>
                <h2 className='text-[11.93px] '>Chicken curry special with <br className=''/> cucumber</h2>
                <h3 className='text-[15.55px] flex gap-2'>
                    9/4/12 
                    <span>
                    10:00am
                    </span>
                </h3>
                <h4>N3000</h4>
                <h5 className='text-[#BD3826] px-40 w-[20rem]'>Cancelled</h5>
                <img src={action} alt="" />
            </div>
            <div className='mt-5  flex items-center font-medium gap-[2rem] text-[#191B1D] '>
                <h1 className='text-[14.19px] px-4'>#24643</h1>
                <h2 className='text-[11.93px] '>Chicken curry special with <br className=''/> cucumber</h2>
                <h3 className='text-[15.55px] flex gap-2'>
                    9/4/12 
                    <span>
                    10:00am
                    </span>
                </h3>
                <h4>N3000</h4>
                <h5 className='text-[#39BC0B] px-40 w-[20rem]'>Completed</h5>
                <img src={action} alt="" />
            </div>
        </div>
      </div>

      <Cart />
    </div>
  )
}

export default Order
