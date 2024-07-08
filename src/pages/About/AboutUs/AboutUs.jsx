import alex from '../../../assets/alex.png'
import rofiat from '../../../assets/rofiat.png'
import pic from '../../../assets/pic.png'
// import '../../categories/Categories.css'
import '../AboutUs/AboutUs.Module.css'

const AboutUs = () => {
  return (
    <section className='w-full '>
        <div className='bg-[#F7FAFC] py-[3rem] md:px-[5rem] px-[2rem]'>
            <div className='text-center py-[2rem]'>
                <h1 className='md:text-[50px] py-[2rem] text-[29px] font-medium'>What Our Clients Say About Us</h1>
            </div>

            <div className='About'>
                <img src={alex} alt="" />
                <img src={rofiat} alt="" />
                <img src={alex} alt="" />
                <img src={alex} alt="" />
                <img src={alex} alt="" />
                <img src={alex} alt="" />
                <img src={alex} alt="" />
                <img src={alex} alt="" />
                <img src={alex} alt="" />
                <img src={alex} alt="" />
                <img src={alex} alt="" />
                <img src={alex} alt="" />
                <img src={alex} alt="" />
                <img src={alex} alt="" />
            </div>

            {/* <div className='flex gap-[2rem] w-[150rem]'>
                <div className='w-full border flex bg-white border-[#ffffff] pl-[2rem] pt-[2rem] pb-[2rem]'>
                    <div className='border-l-[3px] border-b-[3px] border-t-[3px] border-orange-500 flex p-[1rem]'>
                        <div className='px-[rem] text-black'>
                            <h1 className='font-semibold text-[20px]'>Alex</h1>
                            <p className='text-[14px] font-bold'>Web Development Student</p>
                            <div className='border-b-[1px] border-black p-2 w-[3rem]'></div>
                            <p className='text-[14px] pt-[1rem]'>"Tedible's user-friendly web app makes ordering food so easy. I love being able to customize my meals to fit my dietary needs. Plus, the affordable pricing is perfect for a student budget!"</p>
                        </div>
                        <div>
                            <img src={alex} alt="" className='w-[45rem]'/>
                        </div>
                    </div>
                </div>
                <div className='w-full border flex bg-white border-[#ffffff] pl-[2rem] pt-[2rem] pb-[2rem]'>
                    <div className='border-l-[3px] border-b-[3px] border-t-[3px] border-orange-500 flex p-[1rem]'>
                        <div className='py-[rem] text-black'>
                            <h1 className='font-semibold text-[20px]'>Rofiat</h1>
                            <p className='text-[14px] font-bold'>CyberSecurity Student</p>
                            <div className='border-b-[1px] border-black p-2 w-[3rem]'></div>
                            <p className='text-[14px] pt-[1rem]'>"I used to struggle with finding time to eat well between classes and projects. Tedible has solved that problem. The fast delivery and tasty meals keep me going throughout the day. It's a lifesaver!"</p>
                        </div>
                        <div>
                            <img src={rofiat} alt="" className='w-[45rem]'/>
                        </div>
                    </div>
                </div>
                <div className='w-full border flex bg-white border-[#ffffff] pl-[2rem] pt-[2rem] pb-[2rem]'>
                    <div className='border-l-[3px] border-b-[3px] border-t-[3px] border-orange-500 flex p-[1rem]'>
                        <div className='py-[rem] text-black'>
                            <h1 className='font-semibold text-[20px]'>Rofiat</h1>
                            <p className='text-[14px] font-bold'>CyberSecurity Student</p>
                            <div className='border-b-[1px] border-black p-2 w-[3rem]'></div>
                            <p className='text-[14px] pt-[1rem]'>"I used to struggle with finding time to eat well between classes and projects. Tedible has solved that problem. The fast delivery and tasty meals keep me going throughout the day. It's a lifesaver!"</p>
                        </div>
                        <div>
                            <img src={rofiat} alt="" className='w-[45rem]'/>
                        </div>
                    </div>
                </div>
                <div className='w-full border flex bg-white border-[#ffffff] pl-[2rem] pt-[2rem] pb-[2rem]'>
                    <div className='border-l-[3px] border-b-[3px] border-t-[3px] border-orange-500 flex p-[1rem]'>
                        <div className='py-[rem]'>
                            <h1 className='font-semibold text-[20px]'>Rofiat</h1>
                            <p className='text-[14px] font-bold'>CyberSecurity Student</p>
                            <div className='border-b-[1px] border-black p-2 w-[3rem]'></div>
                            <p className='text-[14px] pt-[1rem]'>"I used to struggle with finding time to eat well between classes and projects. Tedible has solved that problem. The fast delivery and tasty meals keep me going throughout the day. It's a lifesaver!"</p>
                        </div>
                        <div>
                            <img src={rofiat} alt="" className='w-[45rem]'/>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>


      <div className='md:py-[5rem] py-[2rem] md:px-[5rem] px-[2rem]'>
        <h1 className='md:text-[50px] py-[2rem] text-[29px] font-medium text-center'>Meet The Team</h1>

        <div className='md:flex grid grid-cols-2 md:gap-[3rem] gap-[1rem]'>
            <div className='text-center border border-[#0C513F] w-full pb-[rem] rounded-t-2xl rounded-b-xl '>
                <div>
                    <img src={pic} alt="" className='w-full'/>
                </div>
                <div className='md:py-[2rem] py-[1rem]'>
                    <h1 className='md:text-[24px] text-[14px] font-medium'>Aisha Falola</h1>
                    <p className='md:text-[14px] text-[8px]'>Customer Service Representative</p>
                </div>
            </div>
            <div className='text-center border w-full border-[#0C513F] rounded-t-2xl rounded-b-xl '>
                <div>
                    <img src={pic} alt="" className='w-full'/>
                </div>
                <div className='md:py-[2rem] py-[1rem]'>
                    <h1 className='md:text-[24px] text-[14px] font-medium'>Olatunji Fijabi</h1>
                    <p className='md:text-[14px] text-[8px]'>Logistics Specialist</p>
                </div>
            </div>
            <div className='text-center border w-full border-[#0C513F] rounded-t-2xl rounded-b-xl '>
                <div>
                    <img src={pic} alt="" className='w-full'/>
                </div>
                <div className='md:py-[2rem] py-[1rem]'>
                    <h1 className='md:text-[24px] text-[14px]font-medium'>Ibidun Adesoji</h1>
                    <p className='md:text-[14px] text-[8px]'>Food Quality Specialist</p>
                </div>
            </div>
            <div className='text-center border w-full border-[#0C513F] rounded-t-2xl rounded-b-xl '>
                <div>
                    <img src={pic} alt="" className='w-full'/>
                </div>
                <div className='md:py-[2rem] py-[1rem]'>
                    <h1 className='md:text-[24px] text-[14px] font-medium'>Raymond Greg</h1>
                    <p className='md:text-[14px] text-[8px]'>Operations Assistant</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
