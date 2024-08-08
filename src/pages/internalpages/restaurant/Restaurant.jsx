import React from 'react'
import Cart from '../../../components/Cart/Cart'
import { useLocation } from 'react-router-dom'

const Restaurant = () => {
  const {pathname} = useLocation()

  return (
    <section className="flex">
      <div className="pl-[18rem] px-[2rem] w-full py-[7rem]">
        <h1 className="text-[28.5px] w-full border-[#80808080] font-semibold text-[#0C513F] py-[1rem]">
          Restaurants
        </h1>

        <div className='w-[50rem] flex gap-10 z-0 overflow-hidden About text-xl'>
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
