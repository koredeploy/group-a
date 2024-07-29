import React from "react";
import Cart from "../../../../components/Cart/Cart";

const Terms = () => {
  return (
    <div className="flex">
      <div className="text-black pl-[33.3rem] w-full py-[11.75rem]">
        <div className="border bg-white text-black rounded-md px-[1.2rem] h-full w-full py-6">
          <h1 className="py-[2rem] text-[28.5px] font-semibold text-[#0C513F]">
            Terms of Service
          </h1>
          <h1 className="text-base font-bold">
            Introduction:{" "}
            <span className="font-normal text-[12.98px]">
              Welcome to Tedible! These Terms of Service govern your use of our
              website, mobile application, and any related services provided by
              Tech Studio. By accessing or using our services, you agree to be
              bound by these Terms. If you do not agree to these Terms, please
              deregister your account.
            </span>
          </h1>
          <p className="mt-4 font-normal text-[12.98px]">
            2.Login Details: You are responsible for safeguarding your password
            and agree not to disclose it to any third party
          </p>
          <p className="mt-4 text-[12.98px]">
            3.Placing Orders: When you place an order through our app, you are
            making an offer to purchase products or services. We reserve the
            right to accept or reject your order at our discretion.
          </p>
          <p className="text-[12.98px] mt-4">
            4.Payment: All prices are listed in [Currency]. Payments for orders
            must be made through the payment methods provided in the app. You
            agree to pay all applicable fees and taxes.
          </p>
          <p className="text-[12.98px] mt-4">
            5.Order Cancellation: You may cancel your order within a specific
            timeframe as outlined in our cancellation policy. Once the
            cancellation period has expired, orders cannot be canceled. Please
            review our Cancellation Policy for more details
          </p>
          <p className="text-[12.98px] mt-4">6.Refunds: Refunds are issued at our discretion and in accordance with our refund policy. Please review our Refund Policy for more details.</p>
          <p className="mt-5 text-[12.98px]">7.Delivery Times: Estimated delivery times are provided for informational purposes and are not guaranteed. Delays may occur due to factors beyond our control.</p>
          <p className="mt-5 text-[12.98px]">8.Intellectual Property: All content, trademarks, logos, and other intellectual property included in our services are the property of Tech Studio or its licensors. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of our services without our express written permission.</p>
          <p className="mt-5 text-[12.98px]">9.Limitation of Liability: To the maximum extent permitted by law, <b>Tedible</b> and its affiliates, officers, employees, agents, and partners will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses10.Indemnification: You agree to indemnify, defend, and hold harmless Tech Studio, its affiliates, officers, directors, employees, agents, and partners from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees that such parties may incur as a result of or arising from your use of our services or your violation of these Terms.</p>
          <p className="mt-5 text-[12.98px]">11.Changes to These Terms: We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting the revised Terms. Your continued use of our services following the posting of changes constitutes your acceptance of such changes.</p>
          <p className="mt-5 text-[12.98px]">12.Contact Us: If you have any questions about these Terms, please contact us.</p>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Terms;
