import { NavLink } from "react-router-dom";

function HomeSection() {
  return (
    <div className="home_section">
      <div className="home_section_content">
        <div className="hoome_section_row1">
          <div className="home_section_text">
            <div className="section_text">HİZMETTEN DAHA FAZLASI</div>
            <h2>SERKAN POLAT PROTEZ & ORTEZ</h2>
            <p>
              Polat protez ortez yapım ve uygulama merkezi olarak biz her şeyi
              hallederiz. Sektör uzmanları olarak, hastalarımıza en yüksek
              kalitede özel ortez ve protez ürünleri ve hizmeti sunmaktayız,
              yaşam boyu kendi şartlarınıza göre yaşamanızı sağlamak için azami
              özen göstermekteyiz.
            </p>
          </div>
        </div>
        <div className="hoome_section_row2">
          <div className="section_row2_img1">
            <NavLink className="section_row2_title">Protez</NavLink>
            <div className="section_row2_kutu"></div>
          </div>
          <div className="section_row2_img2">
            <NavLink className="section_row2_title">Ortez</NavLink>
            <div className="section_row2_kutu"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
