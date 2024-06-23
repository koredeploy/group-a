import image1 from '../../../assets/first.png'
import image2 from '../../../assets/second.png'
import image3 from '../../../assets/third.png'
import image4 from '../../../assets/fourth.png'
import story from '../../../assets/story.png'
import mission from '../../../assets/mission.png'
import vision from '../../../assets/vision.png'
import cash from '../../../assets/cash.png'
import ride from '../../../assets/ride.png'
import food from '../../../assets/food.png'
import community from '../../../assets/community.png'
import React from 'react'

const AboutHero = () => {
  return (
    <section className='w-full md:px-[5rem] px-[2rem]'>
      <div className='w-full md:flex grid py-[5rem] gap-[2rem] items-center justify-center'>
        <div className='grid grid-cols-2 w-full'>
          <img src={image4} alt="" />
          <img src={image3} alt="" />
          <img src={image2} alt="" />
          <img src={image1} alt="" />
        </div>
        <div className='w-full flex flex-col justify-center'>
          <h1 className='md:text-[50px] text-[28.75px] font-medium '>About Us</h1>
          <p className='md:text-[24px] text-[14px] font-normal'>Welcome to Tedible, the ultimate food ordering app designed specifically for tech enthusiasts and students st Tech Studio Academy. We are a team of passionate food lovers and tech enthusiasts committed to providing seamless, convenient, and delicious dining options to fuel the minds of future innovators. </p>
          <br />
          <p className='md:text-[24px] text-[14px]font-normal'>Whether you're deep in coding, designing the next big product, or analyzing data trends, Tedible is here to ensure you stay nourished and focused.</p>
        </div>
      </div>

      <div className='md:flex grid gap-[2rem]'>
        <div className='border bg-[#0C513F] flex flex-col justify-center items-center gap-[2rem] text-white py-[4rem] px-[2rem] relative text-center'>
          <div className='border w-[15rem] py-1 top-0 flex items-center absolute bg-[#9BB8B0] border-[#9BB8B0]'></div>
          <div>
            <img src={story} alt="" />
          </div>
          <h1>Our Story</h1>
          <p>Tedible was founded by Tech Studio Academy, which noticed a common problem among their students: finding time to eat well while juggling tech courses. It is designed to meet the unique needs of these students.</p>
          <div className='border absolute bottom-0 w-[15rem] py-1  bg-[#9BB8B0] border-[#9BB8B0]'></div>
        </div>


        <div className='border bg-[#0C513F] flex flex-col justify-center items-center gap-[2rem] text-white py-[4rem] relative  px-[2rem] text-center'>
          <div className='border w-[15rem] py-1 top-0 flex items-center absolute bg-[#9BB8B0] border-[#9BB8B0]'></div>
          <div>
            <img src={mission} alt="" />
          </div>
          <h1>Our Mission</h1>
          <p>Our mission is to revolutionize the way tech students access food. We aim to promote healthy eating, fostering community, and leveraging technology to meet the unique needs of our users.</p>
          <div className='border absolute bottom-0 w-[15rem] py-1  bg-[#9BB8B0] border-[#9BB8B0]'></div>
        </div>



        <div className='border bg-[#0C513F] flex flex-col justify-center items-center gap-[2rem] text-white py-[4rem] px-[2rem] relative text-center'>
          <div className='border w-[15rem] py-1 top-0 flex items-center absolute bg-[#9BB8B0] border-[#9BB8B0]'></div>
          <div>
            <img src={vision} alt="" />
          </div>
          <h1>Our Vision</h1>
          <p>Our vision is to become the go-to food service for our students. Our main goal is to provide a hassle-free way to order food, so they can concentrate on what they do best—creating, learning, and innovating.</p>
          <div className='border absolute bottom-0 w-[15rem] py-1  bg-[#9BB8B0] border-[#9BB8B0]'></div>
        </div>
      </div>


      <div className='py-[3rem] w-full text-center '>
        <h1 className='font-medium text-[50px]'>Why Choose You ?</h1>

          <div className='md:flex grid w-full items-center justify-center md:gap-[6rem] gap-[2rem] py-[3rem]'>
            <div className='flex flex-col items-center gap-[1rem] text-center'>
              <div>
                <img src={cash} alt=""  className='w-[4rem]'/>
              </div>
              <h1 className='text-[23.59px] font-medium'>Affordable Pricing</h1>
              <p>We offer competitive pricing and special discounts, making it easy to enjoy great food.</p>
            </div>

            <div className='flex flex-col items-center gap-[1rem] text-center'>
              <div>
                <img src={food} alt=""  className='w-[4rem]'/>
              </div>
              <h1 className='text-[23.59px] font-medium'>Wide Variety of Options</h1>
              <p>From quick snacks to full meals, we offer a range of choices to satisfy any craving.</p>
            </div>

            <div className='flex flex-col items-center gap-[1rem] text-center'>
              <div>
                <img src={ride} alt=""  className='w-[4rem]'/>
              </div>
              <h1 className='text-[23.59px] font-medium'>Seamless Experience</h1>
              <p>Our user-friendly interface and efficient delivery system ensure quick and convenient delivery.</p>
            </div>

            <div className='flex flex-col items-center gap-[1rem] text -center'>
              <div>
                <img src={community} alt=""  className='w-[4rem]'/>
              </div>
              <h1 className='text-[23.59px] font-medium'>Community Oriented</h1>
              <p>Our platform provides opportunities to connect with fellow students over meals.</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default AboutHero
