import "../Faq/Faq.Module.css"
import arrow from '../../assets/arrow.png'

const Faq = () => {
  return (
    <div className="w-full">
        <div className="faqBg py-[5rem] px-[4rem] md:block hidden">
            <h1 className="text-[187px] text-[#ffffff] font-semibold">FAQ</h1>
        </div>
      
        <div className="md:px-[5rem] w-full px-[2rem] flex flex-col items-start md:gap-10 gap-5 py-[2rem] overflow-hidden">
            <div className="relative">
                <h1 className="text-[#0C513F] md:text-[45px] text-[14px] font-bold ">Frequently Asked Questions</h1>
                <span className=" md:border-b-2 border-b-[1px] border-[#0C513F] inline-block  md:w-[40.5rem] w-[12.5rem] absolute md:top-[3.8rem] top-[1rem]"></span>
            </div>

            <div className="w-full grid md:gap-[2rem] gap-3">
                <div className="flex w-full justify-between items-center px-[1rem] py-1 bg-[#0C513F] rounded-md text-[#ffffff]">
                    <h1 className="font-semibold md:text-[24px] text-[10px]">How do i register as a vendor?</h1>
                    <div>
                        <img src={arrow} alt="" className="md:w-5 w-2"/>
                    </div>
                </div>
                <div className="flex w-full justify-between items-center px-[1rem] py-1 bg-[#0C513F] rounded-md text-[#ffffff]">
                    <h1 className="font-semibold md:text-[24px] text-[10px]">How do i add a new menu items?</h1>
                    <div>
                        <img src={arrow} alt="" className="md:w-5 w-2"/>
                    </div>
                </div>
                <div className="flex w-full justify-between items-center px-[1rem] py-1 bg-[#0C513F] rounded-md text-[#ffffff]">
                    <h1 className="font-semibold md:text-[24px] text-[10px]">How do i manage incoming orders?</h1>
                    <div>
                        <img src={arrow} alt="" className="md:w-5 w-2"/>
                    </div>
                </div>
                <div className="flex w-full justify-between items-center px-[1rem] py-1 bg-[#0C513F] rounded-md text-[#ffffff]">
                    <h1 className="font-semibold md:text-[24px] text-[10px]">How do i edit my restaurant profile?</h1>
                    <div>
                        <img src={arrow} alt="" className="md:w-5 w-2"/>
                    </div>
                </div>
                <div className="flex w-full justify-between items-center px-[1rem] py-1 bg-[#0C513F] rounded-md text-[#ffffff]">
                    <h1 className="font-semibold md:text-[24px] text-[10px]">How do i view my sales reports?</h1>
                    <div>
                        <img src={arrow} alt="" className="md:w-5 w-2"/>
                    </div>
                </div>
                <div className="flex w-full justify-between items-center px-[1rem] py-1 bg-[#0C513F] rounded-md text-[#ffffff]">
                    <h1 className="font-semibold md:text-[24px] text-[10px]">How do i add a new menu items?</h1>
                    <div>
                        <img src={arrow} alt="" className="md:w-5 w-2"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="md:px-[5rem] w-full px-[2rem] flex flex-col md:gap-10 gap-5 py-[2rem] overflow-hidden">
            <div className="relative">
                <h1 className="text-[#0C513F] md:text-[45px] text-[14px] font-bold ">Troubleshooting Guides</h1>
                <span className=" md:border-b-2 border-b-[1px] border-[#0C513F] inline-block  md:w-[34.5rem] w-[10.7rem] absolute md:top-[3.8rem] top-[1rem]"></span>
            </div>
            <div className="w-full grid md:gap-[2rem] gap-3">
                <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-md text-[#ffffff]">
                    <h1 className="font-bold md:text-[24px] text-[10px]">If you can't find the order you're supposed to deliver, please contact our support team via email or phone.</h1>
                </div>
                <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-md text-[#ffffff]">
                    <h1 className="font-bold md:text-[24px] text-[10px]">If you can't reach the customer for delivery, please contact our support team or the customer directly to arrange an alternative delivery time or address.</h1>
                </div>
                <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-md text-[#ffffff]">
                    <h1 className="font-bold md:text-[24px] text-[10px]">If you encounter any technical issues while using the app, please restart the app or contact our support team for assistance.</h1>
                </div>
                <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-md text-[#ffffff]">
                    <h1 className="font-bold md:text-[24px] text-[10px]">If you need to report a problem with a customer, please contact our support team with details of the incident.</h1>
                </div>
                <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-md text-[#ffffff]">
                    <h1 className="font-bold md:text-[24px] text-[10px]">If you experience issues with order notification, please check your app settings and ensure that notification are enabled. if the issue persist, please contact our support team for assistance. </h1>
                </div>
                <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-md text-[#ffffff]">
                    <h1 className="font-bold md:text-[24px] text-[10px]">If you encounter any issues with customer ratings or feedback, please review our vendor policies and guidelines or contact our support team for further clarification. </h1>
                </div>
                <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-md text-[#ffffff]">
                    <h1 className="font-bold md:text-[24px] text-[10px]">If you have any questions or concerns regarding our policies, payment terms, or delivery procedures, please review our vendor agreement or contact our support team for assistance. </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq
