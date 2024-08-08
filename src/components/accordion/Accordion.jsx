import React, { useState } from 'react';
import arrow from "../../assets/arrowww.svg";
import down from "../../assets/down.svg";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className='mb-4 py-2 bg-[#0C513F] rounded-md px-5'>  {/* Added mb-4 for spacing between accordion items */}
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex justify-between w-full items-center'
      >
        <span className='sm:text-2xl text-[10px]'>{title}</span>
        {accordionOpen ? (
          <img src={down} alt="Collapse" className='w-7/'/>
        ) : (
          <img src={arrow} alt="Expand" className='w-5'/>
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className='pt-2 text-white sm:text-lg text-[10px] font-medium'>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
