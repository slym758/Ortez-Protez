import "../css/footer.css";
import logo from "../assets/logo.png";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_inner container">
        <div className="footer_inner_one">
          <div className="footer_img">
            <img src={logo} alt="" />
          </div>
          <div className="footer_contact">
            <h3>İletişim</h3>

            <div className="footer_contact_text">
              <div className="footer_contact_text_phone">
                <p>Telefon</p>
                <p> (0358) 212 47 63</p>
              </div>
              <div className="footer_contact_text_social">
                <p>Sosyal</p>
                <div className="footer_icon">
                  <AiOutlineInstagram />
                  <AiOutlineFacebook />
                </div>
              </div>
              <div className="footer_contact_text_adress">
                <p>Adres</p>
                <p>
                  Kirazlıdere, Dilara Sk. No:3/A, 05200 Amasya Merkez/Amasya
                </p>
              </div>
              <div className="footer_contact_text_mail">
                <p>Mail</p>
                <p>serkanpolatortopedi@hotmail.com </p>
              </div>
            </div>
          </div>
          <div className="footer_güm">
            <h3>Çalışma Günleri</h3>
            <div className="footer_day">
              <p>Pazartesi</p>
              <p>Salı</p>
              <p>Çarşamba</p>
              <p>Perşembe</p>
              <p>Cuma</p>
              <p>Cumartesi</p>
            </div>
          </div>
        </div>
      </div>
      <p className="copy"> Copyright © 2023 - Tüm hakları saklıdır.</p>
    </div>
  );
}

export default Footer;
