import React from 'react'
import Cart from '../../../components/Cart/Cart'
import { useLocation } from 'react-router-dom'

const Restaurant = () => {
  const {pathname} = useLocation()

  return (
    <section className="flex">
      <div className="sm:pl-[18rem] sm:px-[2rem] px-5  w-full sm:py-[7rem] py-[2rem] pt-[10rem]">
        <h1 className="sm:text-[28.5px] text-xl w-full border-[#80808080] font-semibold text-[#0C513F] py-[1rem]">
          Restaurants
        </h1>

        <div className='sm:w-[50rem] w-full flex gap-10 z-0 overflow-hidden About sm:text-xl text-[13.47px] no-scrollbar text-[#0C513F]'>
          <button className={`${location.pathname  === '/internal/cart' ? 'border-[#FF7834] bg-[#FF7834] rounded-full py-1 px-7 text-white': 'border py-1 px-7 rounded-full border-black '}`}>Offers</button>
          <button className='border py-1 px-7 rounded-full border-black'>Pizza</button>
          <button className='border py-1 px-7 rounded-full border-black'>Burger</button>
          <button className='border py-1 px-7 rounded-full border-black'>Rice</button>
          <button className='border py-1 px-7 rounded-full border-black'>Pasta</button>
          <button className='border py-1 px-7 rounded-full border-black'>Pastry</button>
        </div>
    </div>
    <Cart />
    </section>
  )
}

export default Restaurant
