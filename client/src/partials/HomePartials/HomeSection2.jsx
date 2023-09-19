import img from "../../assets/img.jpg";

function HomeSection2() {
  return (
    <div className="home_section2">
      <div className="home_section2_row1">
        <div className="home_section_row1_content">
          <h2>Neden Polat Protez Ortez?</h2>
          <p>
            Yıllarca protez ve ortez işinde çalışıyoruz ve bu konuda uzmanlaştık
            ve bununla tanınıyoruz. Hasta bakımına yönelik her şeyi kapsayan,
            eksiksiz hizmet yaklaşımımız her zaman hizmet verdiğimiz her bir
            hastanın yaşam kalitesini iyileştirmeye odaklanmıştır. Her
            hastamızla birebir özel olarak ilgilenmeye özen göstermeye önem
            vermekteyiz.
          </p>
          <h4>Polat Ortez Protez ile çalışarak şunları bekleyebilirsiniz:</h4>
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
      <div className="home_section2_row2">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default HomeSection2;
