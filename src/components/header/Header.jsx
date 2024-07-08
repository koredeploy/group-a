import { CiSearch } from "react-icons/ci";
// import { header } from "../../lib/consts/header";
import cart from '../../assets/cart.svg'
import bell from '../../assets/bell.svg'
import photo from '../../assets/photo.svg'
import arrow from '../../assets/arrow.svg'

const inputClass = 'w-[62rem] outline-none px-8 bg-[#F7FAFC] border border-[#0000005a]  rounded-lg py-2'
const iconClass = 'w-10 rounded-full border py-2 px-2 bg-[#E6ECEB] hover:bg-[#FF7834] hover:no-underline active:bg-[#FF7834]'
const counter = 'absolute -top-3 rounded-full -right-1 border text-[10px] px-2 bg-[#BD3826] border-[#BD3826] text-white py-1'


const Header = () => {
  return (
    <div className="border-b-[1px] w-screen p-[1.2rem] text-black bg-white pb-[1rem]">
        <div className="w-full flex gap-10 items-center">
            <h1 className="font-semibold">Welcome Back</h1>

            <div className="relative flex items-center w-[66rem]">
                <CiSearch className="absolute px-2" fontSize={35}/>
                <input type="text" placeholder="Search" className={inputClass}/>
            </div>

            <div className="flex gap-5 rounded-full">
                {/* {header.map((item) =>(
                    <div key={item.key} className="border rounded-full py-2 px-2">
                        <div>{item.icon}</div>
                    </div>
                ))} */}
                <img src={cart} alt="" className={iconClass}/>
                <div className="relative">
                    <img src={bell} alt="" className={iconClass}/>
                    <span className={counter}>0</span>
                </div>
                <img src={photo} alt="" className="w-10 "/>
                <div className="flex items-center gap-3">
                    <span>Eden</span>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header


// function header ({ item }){
//     return (
//         <Link to={item.path} className={linkClasses}>
//             <img src={item.image} alt="" />
//             {item.label}
//         </Link>
//     )
// }
