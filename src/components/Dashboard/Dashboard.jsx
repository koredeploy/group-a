import React, { useState, useEffect } from 'react';
import banner from '../../assets/banner.svg';
import banner2 from '../../assets/aboutHero.png';
import arrowside from '../../assets/arrowside.svg';

const Dashboard = () => {
  const banners = [banner, banner2]; // Add more banners if needed
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [banners.length]);

  return (
    <div className='w-full pl-5 py-5'>
      <img src={banners[currentBannerIndex]} alt="Banner" className='w-full  rounded-2xl'/>
      <div className='flex justify-between py-5'>
        <h1 className='text-[24px] font-semibold'>Restaurant</h1>
        <div className='flex gap-3 items-center'>
          <h2 className='text-[#FF7834] text-[17.77px] font-normal'>View all</h2>
          <img src={arrowside} alt="Arrow side" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
