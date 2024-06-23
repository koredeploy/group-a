import defaultImage from '../../assets/default.png';
import egusiImage from '../../assets/egusi.png';
import egusiHover from '../../assets/hoveredegusi.png';
import riceHover from '../../assets/hoveredrice.png';
import chopsHover from '../../assets/hoveredchops.png';
import friedImage from '../../assets/fried_rice.png';
import chopsImage from '../../assets/small_chops.png';
import styles from './Hero.module.css'
import { useState } from 'react';

const Hero = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <div className='w-full bg-[#073126] text-white md:flex md:flex-row flex flex-col-reverse justify-center items-center md:px-[7rem] px-[2rem] gap-[1rem]'>
            <div className='flex flex-col md:grid gap-[1rem] justify-center items-center leading-[2rem] w-full'>
                <h1 className='md:text-[60px]  text-[48px] font-bold'>MEAL TIME</h1>
                <h2 className='md:text-[35px] text-[20px] font-semibold md:font-extralight'>FUEL YOUR STUDY</h2>
                <p className='text-[#FEFEFF] text-[14px] md:text-[16px] md:text-start text-center font-normal leading-tight'>
                    Order delicious and nutritious meals, so you can relax, stay focused and <br /> energized.
                </p>
                <div>
                    <button className='border rounded-lg md:mt-0 mt-[1rem]  px-[2.5rem] py-1 text-[18.7px] bg-[#FF7834] border-[#FF7834]'>View Menu</button>
                </div>
            </div>

            <div className='w-full border bg-white rounded-full px-[1rem] py-[1rem] my-[3rem] grid justify-center'>
                <img src={hoveredItem || defaultImage} alt='Default' className={`w-[100rem] ${hoveredItem ? styles.hoveredImage : ""}`} />
            </div>

            <div className='w-full md:grid gap-[1rem] hidden justify-center items-center'>
                <div className='text-black relative'>
                    <div
                        className='justify-center items-center flex border hover:border-[#FF7834] rounded-full bg-white px-[.2rem] pr-[5rem] py-[.2rem]'
                        onMouseEnter={() => handleMouseEnter(egusiHover)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div>
                            <img src={egusiImage} alt='Egusi' className='w-[5rem]' />
                        </div>
                        <div className=''>
                            <h1 className={`text-black`}>Eba & Egusi</h1>
                            <p className='text-[13px] text-black'>Sweet Sensation</p>
                            <span className='text-[#FF7834]'>N1500</span>
                        </div>
                    </div>
                </div>
                <div className='text-black relative'>
                    <div
                        className='justify-center items-center flex border hover:border-[#FF7834] rounded-full bg-white px-[.2rem] pl-[4rem] py-[.2rem]'
                        onMouseEnter={() => handleMouseEnter(riceHover)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className=''>
                            <h1 className={`text-black`}>Fried Rice & Egg</h1>
                            <p className='text-[13px] text-black'>Chicken Republic</p>
                            <span className='text-[#FF7834]'>N3000</span>
                        </div>
                        <div>
                            <img src={friedImage} alt='Fried Rice' className='w-[5rem]' />
                        </div>
                    </div>
                </div>
                <div className='text-black relative'>
                    <div
                        className='justify-center items-center flex border hover:border-[#FF7834] rounded-full bg-white px-[.2rem] pr-[5.5rem] py-[.2rem] '
                        onMouseEnter={() => handleMouseEnter(chopsHover)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div>
                            <img src={chopsImage} alt='Small Chops' className='w-[5rem]' />
                        </div>
                        <div className=''>
                            <h1 className={`text-black`}>Small Chops</h1>
                            <p className='text-[13px] text-black '>The Place</p>
                            <span className='text-[#FF7834]'>N4000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
