import React from "react";
import "../pages/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="main-privacy">
      <div className="privacy">
        <h1>Privacy And Security</h1>
        <p>
          At Tedible, we are committed to protecting your privacy and security.
          we offer the following features to safeguard your information and
          maintain your peace of mind.
        </p>
      </div>
      <div className="privacy-info">
        <p>
          <span>Account Security</span>: Set a strong password and enable
          two-factor authentication for added protection.
        </p>
        <p>
          <span> Order History</span>: Review, edit, or delete your order
          history at any time.
        </p>
        <p>
          <span> Data Removal</span>: If you decide to delete your account, we
          will promptly delete all your personal data.
        </p>
        <p>
          <span> Data Transparency</span>: You can always view our Privacy
          Policy or contact our Support Team for more information about how we
          handle your data.
        </p>
        <p>
          <span>Access Control</span>: You can manage which devices have access
          to your account and immediately disable access if you suspect
          unauthorized activity.
        </p>
        <p>
          <span>Responsible Data Practices</span>: We collect only the data
          necessary to provide you with the best possible experience, and we
          will never sell or share your data without your consent.
        </p>
        <p>
          <span>Fraud Prevention</span>: We employ advanced anti-fraud measure
          to protect your financial information and prevent unauthorized
          transactions.
        </p>
      </div>
      <p className="thank-you">
        Thank you for trusting us with your information. We value your privacy
        and will continue to maintain the highest standards of security and
        transparency.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
