import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Dashboard_Sidebar_Bottom_Links, Dashboard_Sidebar_Links } from '../../lib/consts/navigation'
import classNames from 'classnames'

const linkClasses = 'flex items-center gap-2 font-light px-3 py-3 hover:bg-[#FF7834] hover:no-underline active:bg-[#FF7834] rounded-md text-[14px]'

const SidebarInternal = () => {
  return (
    <div className='sm:flex hidden flex-col h-full w-60 p-3 bg-[#073126] gap-2 text-white fixed z-20'>

    {/* LOGO  */}

      <div className='flex justify-start px-2 py-4'>
        <Link to={'/internal/dashboard'}>
          <img src={logo} alt="this is the logo" className=''/>
        </Link>
      </div>
      <div className='border-b-[.1px] w-[12.5rem] ml-3 border-[#A9ACAF] bg-[#A9ACAF]'></div>

    {/* SIDE BAR LINKS FIRST PART  */}

      <div className='flex flex-col gap-5 pl-3 pt-5'>
       {Dashboard_Sidebar_Links.map((item) => (
            <SideBarLink key={item.key} item = {item} />
       ))} 
      </div>
    {/* SIDE BAR LINKS SECOND PART  */}
      <div className='flex flex-col gap-3 pl-3 pt-10'>
        {Dashboard_Sidebar_Bottom_Links.map((item) =>(
            <SideBarBottomLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  )
}

export default SidebarInternal

function SideBarLink ({ item }){

  const {pathname} = useLocation()
    return (
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-[#FF7834] text-white' : 'text-white', linkClasses)}>
            <img src={item.image} alt="" />
            {item.label}
        </Link>
    )
}

function SideBarBottomLink ({ item }){
    return (
        <Link to={item.path} className={linkClasses}>
            <img src={item.image} alt="" />
            {item.label}
        </Link>
    )
}