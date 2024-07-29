import { Outlet } from "react-router-dom";
import SidebarInternal from "../components/sidebarInternal/SidebarInternal";
import Header from "../components/header/Header";
import { AuthProvider } from "../context/AuthContext";
// import RouteGuard from "../utils/RouteGuard";

const LayoutInternal = () => {
  
  return (
    <AuthProvider>
    <div className='flex flex-row bg-[#EDF5FA] h-full w-full'>
        <SidebarInternal/>
        <div className='bg-[#EDF5FA] w-full'>
            <Header />
            <div>{<Outlet/>}</div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default LayoutInternal;
