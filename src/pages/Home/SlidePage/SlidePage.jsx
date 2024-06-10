import space from '../../../assets/space.png'
import kfc from '../../../assets/kfc.png'
import chickenrep from '../../../assets/chicken.png'
import awoof from '../../../assets/awoof.png'
import sweetsensation from '../../../assets/sweetsensation.png'
import theplace from '../../../assets/theplace.png'
import React from 'react'

const SlidePage = () => {
  return (
    <div className='w-full text-center bg-[#073126] text-white px-[9rem] py-[2rem]'>
      <h1 className='text-[50px] py-[2rem]'>Our Top Restaurant</h1>

        <div className='w-full flex gap-[5rem] items-center logos'>
            <div className='logos-slide flex gap-[5rem] items-center'>
                <div className='flex flex-col itfems-center gap-2'>
                    <img src={space} alt="" className='w-[5rem]'/>
                    <p className='text-[14px]'>Space Route</p>
                </div>
                <div  className='flex flex-col items-center gap-2'>
                    <img src={kfc} alt="" className='w-[3.5rem]'/>
                    <p className='text-[14px]'>Kenturkey fried <br /> Chicken</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={chickenrep} alt="" className='w-[2.5rem]'/>
                    <p className='text-[14px]'>Chicken <br /> Republic</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={awoof} alt="" className='w-[6.5rem]'/>
                    <p className='text-[14px]'>Awoof Brekete</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={sweetsensation} alt="" className='w-[3rem]'/>
                    <p className='text-[14px]'>Sweet Sensation</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={theplace} alt="" className='w-[6rem]'/>
                    <p className='text-[14px]'>The Place</p>
                </div>
            </div>
            <div className='logos-slide flex gap-[5rem] items-center'>
                <div className='flex flex-col itfems-center gap-2'>
                    <img src={space} alt="" className='w-[5rem]'/>
                    <p className='text-[14px]'>Space Route</p>
                </div>
                <div  className='flex flex-col items-center gap-2'>
                    <img src={kfc} alt="" className='w-[3.5rem]'/>
                    <p className='text-[14px]'>Kenturkey fried <br /> Chicken</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={chickenrep} alt="" className='w-[2.5rem]'/>
                    <p className='text-[14px]'>Chicken <br /> Republic</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={awoof} alt="" className='w-[6.5rem]'/>
                    <p className='text-[14px]'>Awoof Brekete</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={sweetsensation} alt="" className='w-[3rem]'/>
                    <p className='text-[14px]'>Sweet Sensation</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={theplace} alt="" className='w-[6rem]'/>
                    <p className='text-[14px]'>The Place</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SlidePage
