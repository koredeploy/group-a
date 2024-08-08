import React from 'react';
import Cart from '../../../components/Cart/Cart';
import pic from '../../../assets/pic.png';

const NotificationItem = ({ name, time, title, message, date }) => (
  <div className='sm:flex border-b border-[#80808080] items-center gap-4 py-5 justify-between'>
    <div className='flex items-center gap-4'>
      <img src={pic} alt="" className='rounded-full w-[4rem]'/>
      <div>
        <h3 className='sm:text-xl text-[15.36px]'>{name}</h3>
        <p className='sm:text-[15.26px] text-[11.5px] font-light'>{time}</p>
        <h4 className='sm:text-[19.07px] text-[14.48px] font-medium'>{title}</h4>
        <h5 className='sm:text-base text-[12.71px] font-light'>{message}</h5>
      </div>
    </div>
    <div>
      <h6 className='sm:text-xl text-sm font-medium sm:pl-0 pl-8 sm:pt-0 pt-3 mx-[3rem]'>{date}</h6>
    </div>
  </div>
);

const NotificationSection = ({ title, notifications }) => (
  <div className='border border-white rounded-md font-semibold text-[#0C513F] bg-white sm:px-5 px-2 py-3'>
    <h2 className='sm:text-[28.5px] text-[21.64px]'>{title}</h2>
    {notifications.map((notification, index) => (
      <NotificationItem key={index} {...notification} />
    ))}
  </div>
);

const Notification = () => {
  const notificationsToday = [
    {
      name: 'Jason Fredrick',
      time: '2:00PM',
      title: 'Techie Kitchen',
      message: 'Your order will arrive in 20mins',
      date: 'JUN 21, 2024'
    },
  ];

  const notificationsYesterday = [
    {
      name: 'Jason Fredrick',
      time: '2:00PM',
      title: 'Techie Kitchen',
      message: 'Your order will arrive in 20mins',
      date: 'JUN 21, 2024'
    }, 
  ];

  return (
    <div className='w-full flex relative z-1'>
      <div className='sm:pl-[18rem] sm:px-[2rem] px-5 w-full sm:py-[7rem] py-[2rem] pt-[9rem]'>
        <h1 className='sm:text-[28.5px] text-xl font-semibold text-[#0C513F] py-[1rem]'>Notifications</h1>
        <NotificationSection title="Today" notifications={notificationsToday} />
        <NotificationSection title="Yesterday" notifications={notificationsYesterday} />
      </div>
      <Cart />
    </div>
  );
};

export default Notification;
