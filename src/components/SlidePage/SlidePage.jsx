import space from '../../assets/space.png'
import kfc from '../../assets/kfc.png'
import chickenrep from '../../assets/chicken.png'
import awoof from '../../assets/awoof.png'
import sweetsensation from '../../assets/sweetsensation.png'
import theplace from '../../assets/theplace.png'

const SlidePage = () => {
  return (
    <div className='w-full text-center bg-[#073126] text-white md:px-[9rem] px-[2rem] py-[2rem]'>
      <h1 className='md:text-[50px] text-[20px] font-medium  py-[2rem]'>Our Top Restaurant</h1>

        <div className='w-full flex gap-[5rem] items-center logos'>
            <div className='logos-slide flex gap-[5rem] items-center'>
                <div className='flex flex-col itfems-center gap-2'>
                    <img src={space} alt="" className='md:w-[5rem] w-[2rem]'/>
                    <p className='text-[14px]'>Space Route</p>
                </div>
                <div  className='flex flex-col items-center gap-2'>
                    <img src={kfc} alt="" className='md:w-[3.5rem] w-[2.5rem]'/>
                    <p className='text-[14px]'>Kenturkey fried <br /> Chicken</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={chickenrep} alt="" className='md:w-[2.5rem] w-[2rem]'/>
                    <p className='text-[14px]'>Chicken <br /> Republic</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={awoof} alt="" className='md:w-[6.5rem] w-[4.5rem]'/>
                    <p className='text-[14px]'>Awoof Brekete</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={sweetsensation} alt="" className='md:w-[3rem] w-[2.5rem]'/>
                    <p className='text-[14px]'>Sweet Sensation</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={theplace} alt="" className='md:w-[6rem] w-[5rem]'/>
                    <p className='text-[14px] pt-[1rem]'>The Place</p>
                </div>
            </div>
            <div className='logos-slide flex gap-[5rem] items-center'>
                <div className='flex flex-col itfems-center gap-2'>
                    <img src={space} alt="" className='md:w-[5rem] w-[2rem]'/>
                    <p className='text-[14px]'>Space Route</p>
                </div>
                <div  className='flex flex-col items-center gap-2'>
                    <img src={kfc} alt="" className='md:w-[3.5rem] w-[2.5rem]'/>
                    <p className='text-[14px]'>Kenturkey fried <br /> Chicken</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={chickenrep} alt="" className='md:w-[2.5rem] w-[2rem]'/>
                    <p className='text-[14px]'>Chicken <br /> Republic</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={awoof} alt="" className='md:w-[6.5rem] w-[4.5rem]'/>
                    <p className='text-[14px]'>Awoof Brekete</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={sweetsensation} alt="" className='md:w-[3rem] w-[2.5rem]'/>
                    <p className='text-[14px]'>Sweet Sensation</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <img src={theplace} alt="" className='md:w-[6rem] w-[5rem]'/>
                    <p className='text-[14px] pt-[1rem]'>The Place</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SlidePage
