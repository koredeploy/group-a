// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../../utils/axiosInstance'
// import MenuCard from './MenuCard';

// const Menu = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMenuItems = async () => {
//       try {
//         const response = await axiosInstance.get('/api/product'); // Adjust the endpoint as needed
//         setMenuItems(response.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenuItems();
//   }, []);

//   if (loading) return <p className='text-center'>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div className='py-[2rem]'>
//       <h1 className='text-5xl font-medium text-center'>Special Menu</h1>
//       <p className='text-lg mx-auto w-[37rem] text-center'>Discover our specially curated menu, designed to delight your taste buds with unique and seasonal dishes</p>
//       <div className='grid grid-cols-4 justify-  gap-[2rem] mt-10 px-[7rem]'>
//         {menuItems.map((item ,key) => 
//             <MenuCard key={key} data={item}/>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Menu;
