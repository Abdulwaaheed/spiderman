import React from "react";
import "./css/footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="box">
            <ul className="list1">
                <li><a href="#">Explore </a></li>
                <li><a href="#">Redeem</a></li>
                <li><a href="#">My Movies</a></li>
            </ul>
          <ul className="list2">
            <li><a href="#">Help Center & Contact Us</a></li>
            <li><a href="#">Legal Notices</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Activate Your Device</a></li>
          </ul>
          <ul className="list3">
            <li><a href="#">Interest-Based Ads</a></li>
            <li><a href="#">Your California Privacy Rights</a></li>
            <li><a href="#">Do Not Sell My Personal Information</a></li>
            <li><a href="#">Closed Captioning Inquiries</a></li>
          </ul>
          </div>  
          <p className="text-center">© 2023 Movies Anywhere. All Rights Reserved.</p>
          <p className="text-center">Powered by <span>MARVEL</span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
