import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import { Ri24HoursFill } from "react-icons/ri";
import { Alert, Space } from "antd";
import { useForm, ValidationError } from "@formspree/react";

import "../css/contact.css";
import Footer from "../components/Footer.jsx";

function Contact() {
  const [state, handleSubmit] = useForm("mrgwlzkq");

  if (state.succeeded) {
    return (
      <Space direction="vertical" style={{ width: "100%" }}>
        <Alert message="Mesajınız Gönderildi" type="success" showIcon />
      </Space>
    );
  }
  return (
    <div className="contact">
      <div className="Product_Heading">
        <div className="header_title">
          <h1>İletişim</h1>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367.5483707193156!2d35.84824452956662!3d40.66191818134377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40876e32a68fa685%3A0x708e49adecdb150e!2sKirazl%C4%B1dere%2C%20Caner%20Sk.%20No%3A3%2C%2005200%20Amasya%20Merkez%2FAmasya!5e0!3m2!1sen!2str!4v1694165600434!5m2!1sen!2str"
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          className="iframe"
        ></iframe>
      </div>

      <div className="contact_info ">
        <div className="container">
          <Row>
            <Col className="contact_col_left" md={6}>
              <div className="contact_title">
                <h2>İletişim Bilgileri</h2>
                <p>
                  Telefon ve mail ile ulabilirsiniz. Adresimiz ve çalışma
                  saatlerimiz aşağıda yazmaktadır.
                </p>
              </div>

              <div className="grid_main">
                <div className="contact_grid">
                  <span className="contact_grid_icon">
                    <FaPhone />
                  </span>
                  <h6>TELEFON NUMARASI</h6>
                  <p>(0358) 212 47 63</p>
                </div>
                <div className="contact_grid">
                  <span className="contact_grid_icon">
                    <GrMail />
                  </span>
                  <h6>mail adresi</h6>
                  <p>serkanpolatortopedi@hotmail.com </p>
                </div>
                <div className="contact_grid">
                  <span className="contact_grid_icon">
                    <ImLocation />
                  </span>
                  <h6>Adres</h6>
                  <p>
                    Kirazlıdere, Dilara Sk. No:3/A, 05200 Amasya Merkez/Amasya{" "}
                  </p>
                </div>
                <div className="contact_grid">
                  <span className="contact_grid_icon">
                    <Ri24HoursFill />
                  </span>
                  <h6>çalışma saatleri</h6>
                  <p>Sabah 8:30 - Akşam 18:00 arası çalışmaktayız.</p>
                </div>
              </div>
            </Col>
            <Col className="contact_col_right" md={6}>
              <div className="contact_title">
                <h2>Bize ulaşın</h2>
                <p>
                  Adınızı ve numaranızı yazarak bize mail atın size geri
                  dönelim.
                </p>
              </div>

              <div className="contact_form">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Adınız ve Soyadınız</label>
                  <input id="name" type="name" name="name" />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />

                  <label htmlFor="email">Email Addresi</label>
                  <input id="email" type="email" name="email" />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />

                  <label htmlFor="phone">Telefoon Numarası</label>
                  <input id="phone" type="phone" name="phone" />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />

                  <label htmlFor="message">Konu ve Açıklama</label>
                  <textarea id="message" name="message" />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <button
                    className="button"
                    type="submit"
                    disabled={state.submitting}
                  >
                    Gönder
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
