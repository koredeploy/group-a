import "../Faq/Faq.Module.css";
import arrow from "../../assets/arrow.png";
import Accordion from "../../components/accordion/Accordion";

const Faq = () => {
  return (
    <div className="w-full">
      <div className="sm:block hidden faqBg">
        <h1 className="sm:text-[187px] px-[4rem] py-[2rem] text-[#ffffff] font-semibold">
          FAQ
        </h1>
      </div>

      <div className="sm:px-[5rem] w-full px-[2rem] flex flex-col items-start sm:gap-10 gap-5 py-[2rem] overflow-hidden">
        <div className="relative">
          <h1 className="text-[#0C513F] sm:text-[45px] text-[14px] font-bold ">
            Frequently Asked Questions
          </h1>
          <span className=" sm:border-b-2 border-b-[1px] border-[#0C513F] inline-block  sm:w-[40.5rem] w-[12.5rem] absolute sm:top-[3.8rem] top-[1rem]" />
        </div>

        <div className=" text-white  p-2 w-full text-2xl font-semibold">
          <Accordion title="How do i register as a vendor?" answer="To register as a vendor, please visit our website and fill out the vendor registration form." />
          <Accordion title="How do i add a new menu items?" answer="To add new menu items, please log in to your account and navigate to the Menu Page." />
          <Accordion
            title="How do i manage incoming orders?"
            answer="To manage incoming orders, please log in to yur account and navigate to the &quot;orders page&quot;"
          />
          <Accordion title="How do i edit my restaurant profile?" answer="To edit your restaurant profile, please log in yo your accou t and navigate to the &quot;Profile Page&quot;" />
          <Accordion title="How do i view my sales report?" answer="To view your sales report, please log in to yout account and navigate to the &quot;Analytics Page&quot;" />

        </div>
      </div>

      <div className="sm:px-[5rem] w-full px-[2rem] flex flex-col sm:gap-10 gap-5 py-[2rem] overflow-hidden">
        <div className="relative">
          <h1 className="text-[#0C513F] sm:text-[45px] text-[14px] font-bold ">
            Troubleshooting Guides
          </h1>
          <span className=" sm:border-b-2 border-b-[1px] border-[#0C513F] inline-block  sm:w-[34.5rem] w-[10.7rem] absolute sm:top-[3.8rem] top-[1rem]"></span>
        </div>
        <div className="w-full grid sm:gap-[2rem] gap-3">
          <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-sm text-[#ffffff]">
            <h1 className="font-bold sm:text-[24px] text-[10px]">
              If you can't find the order you're supposed to deliver, please
              contact our support team via email or phone.
            </h1>
          </div>
          <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-sm text-[#ffffff]">
            <h1 className="font-bold sm:text-[24px] text-[10px]">
              If you can't reach the customer for delivery, please contact our
              support team or the customer directly to arrange an alternative
              delivery time or address.
            </h1>
          </div>
          <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-sm text-[#ffffff]">
            <h1 className="font-bold sm:text-[24px] text-[10px]">
              If you encounter any technical issues while using the app, please
              restart the app or contact our support team for assistance.
            </h1>
          </div>
          <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-sm text-[#ffffff]">
            <h1 className="font-bold sm:text-[24px] text-[10px]">
              If you need to report a problem with a customer, please contact
              our support team with details of the incident.
            </h1>
          </div>
          <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-sm text-[#ffffff]">
            <h1 className="font-bold sm:text-[24px] text-[10px]">
              If you experience issues with order notification, please check
              your app settings and ensure that notification are enabled. if the
              issue persist, please contact our support team for assistance.{" "}
            </h1>
          </div>
          <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-sm text-[#ffffff]">
            <h1 className="font-bold sm:text-[24px] text-[10px]">
              If you encounter any issues with customer ratings or feedback,
              please review our vendor policies and guidelines or contact our
              support team for further clarification.{" "}
            </h1>
          </div>
          <div className="flex w-full  px-[.5rem] py-2 bg-[#0C513F] rounded-sm text-[#ffffff]">
            <h1 className="font-bold sm:text-[24px] text-[10px]">
              If you have any questions or concerns regarding our policies,
              payment terms, or delivery procedures, please review our vendor
              agreement or contact our support team for assistance.{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
