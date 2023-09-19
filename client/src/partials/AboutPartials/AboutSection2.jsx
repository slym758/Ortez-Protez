import "../../css/about.css";
import img from "../../assets/about_img2.jpg";
function AboutSection2() {
  return (
    <div className="AboutSection2">
      <div className="AboutSection2_foto">
        <img src={img} alt="" />
      </div>

      <div className="AboutSection2_content">
        <h3>NEDEN POLAT ORTEZ PROTEZ ?</h3>
        <div className="AboutSection2_text">
          <ul>
            <li>Hızlı, profesyonel ve güler yüzlü hizmet</li>
            <li>Son derece uzmanlaşmış ve bireyselleştirilmiş bakım</li>
            <li>
              Amputasyon öncesi ve ampütasyon sonrası ücretsiz konsültasyonlar
            </li>
            <li>Aynı gün protez dökümü ve uygulamaları</li>
            <li>Yürüyüş analizi terapi spor salonu</li>
            <li>
              Yılların deneyimine ve başarılı olmanıza yardımcı olma tutkusuna
              sahip diz üstü ve diz altı protez uzmanı
            </li>
            <li>
              Kısmi el, dirsek altı ve dirsek üstü protez parçaları konusunda
              uzmanlaşmış üst ekstremite protez uzmanı
            </li>
            <li>
              Kendini hastalarının gelişmesine yardımcı olmaya adamış ve tutkulu
              bir uzman
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutSection2;
