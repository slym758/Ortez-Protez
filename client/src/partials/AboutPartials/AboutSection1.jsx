import img from "../../assets/about_img1.jpg";
function AboutSection1() {
  return (
    <div className="AboutSection1">
      <div className="AboutSection1_content container">
        <h3>Biz Kimiz ?</h3>
        <div className="AboutSection1_inner">
          <div className="AboutSection1_inner_row1">
            <p>
              Sertifikalı çalışanlarımız, özel ihtiyaçlarınıza ve <br />
              hedeflerinize göre hangi prostetik cihazın sizin için en iyi
              <br />
              olduğunu belirleyecektir. Ekibimiz protezlerinizi değerlendirip
              <br />
              tasarlar ve özel cihazınızı kendi tesisimizde imal etmek için{" "}
              <br />
              çalışmaya başlarız. <br />
              <br /> İyileşmeye doğru ilerlemenizi sağlamak için sizinle,
              doktorunuzla, hemşirenizle ve fiziksel ve mesleki
              terapistlerinizle işbirliği yaparak sizin için en iyi sonuca
              ulaşmak için çalışıyoruz.
            </p>
          </div>
          <div className="AboutSection1_inner_row2">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection1;
