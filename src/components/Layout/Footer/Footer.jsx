import React from "react";
import "./Footer.css";
import scan from "../../../images/logo_scan_footer.png";

const Footer = () => {

  return (
    <footer className="footer">
        <img className="logo" src={scan}  />
        <div className="footer_info">
            <p className="footer_info_item">г. Москва, Цветной б-р, 40</p>
            <a href="tel:+7(495)771-21-11" className="footer_info_item">+7 495 771 21 11</a>
            <a href="mailto:info@skan.ru" className="footer_info_item">info@skan.ru</a>
            <p className="footer_copy">Copyright. 2023</p>
        </div>
    </footer>
  )
}

export default Footer