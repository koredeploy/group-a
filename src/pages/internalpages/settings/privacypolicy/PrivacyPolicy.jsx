import React from "react";
import Cart from "../../../../components/Cart/Cart";

const PrivacyPolicyInternal = () => {
  return (
    <div className="flex">
      <div className="text-black pl-[33.3rem] w-full py-[11.75rem]">
        <div className="border bg-white text-black rounded-md px-[1.2rem] h-[40rem] w-full">
          <h1 className="py-[2rem] text-[28.5px] font-semibold text-[#0C513F]">
            Privacy Policy
          </h1>
          <div>
            <h2 className="text-base font-bold">
              Account Security: 
              <span className="text-[12.98px] font-normal"> Set a strong password and enable two-factor authentification for added protection.</span>
            </h2>
            <h3 className="text-base font-bold mt-4">Order History: <span className="font-normal text-[12.98px]"> Review, edit, or delete your history at any time.</span></h3>
            <h4 className="text-base font-bold mt-4">Data Removal: <span className="font-normal text-[12.98px]">If you decide your account, we will promptly delete all your personal data.</span></h4>
            <h5 className="text-base font-bold mt-4">Data Transparency: <span className="text-[12.98px] font-normal">You can always view our Privacy Policy or contact our Support Team for more information about how we handle your data. </span></h5>
            <h1 className="text-base font-bold mt-4">Access Control: <span className="text-[12.98px] font-normal">You can manage which devices have access to your account and immediately disable access if you suspect unauthorized activity. </span></h1>
            <h2 className="text-base font-bold mt-4">Responsible Data Practices: <span className="text-[12.98px] font-normal">We collect only the data necessary to provide you with the best possible experience, and we will never sell or share your data without your consent.</span></h2>
            <h3 className="text-base font-bold mt-4">Fraud Prevention: <span className="text-[12.98px] font-normal">We employ advanced anti-fraud measure to protect your financial information and prevent unauthorized transactions. </span></h3>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default PrivacyPolicyInternal;
