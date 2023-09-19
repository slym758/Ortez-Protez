import { Collapse, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

function AboutSection3() {
  return (
    <div className="AboutSection3">
      <div className="AboutSection3_content">
        <h3>SIK SORULAN SORULAR</h3>
        <div className="AboutSection3_text">
          <Collapse
            className="section3_collapse"
            accordion={true}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
          >
            <Collapse.Panel header="Protez Nedir ?">
              <Typography.Text>
                <p>
                  Eksik olan vücut uzuvlarının işlevini yerine getiren ürünlere
                  verilen genel addır. Kol protezi, diz altı protezi, parmak
                  protezi, diş protezi v.b.
                </p>
              </Typography.Text>
            </Collapse.Panel>
            <Collapse.Panel header="Ortez Nedir ?">
              <Typography.Text>
                <p>
                  İşlevini kısmen veya tamamen kaybetmiş uzuvların fonksiyonunu
                  arttırmak ve daha fazla kullanılabilir hale getirmek amacıyla
                  vücuda takılan yardımcı cihazlardır. Örneğin; Korse, Dizlik,
                  Afo, Uzun Yürüme Cihazı, Kısa Yürüme Ortezi v.b.
                </p>
              </Typography.Text>
            </Collapse.Panel>
            <Collapse.Panel header="Amputasyon Nedemek ?">
              <Typography.Text>
                <p>
                  Vücudun çıkıntı biçimindeki herhangi bir organının, özellikle
                  de kol ve bacakların tamamen ya da kısmen cerrahi yöntemlerle
                  kesilip alınması. Kol ya da bacakların biri ya da her ikisi
                  doğuştan eksik olan kişiler için de doğuştan gelme
                  (konjenital) ampütasyon terimi kullanılır.
                </p>
              </Typography.Text>
            </Collapse.Panel>
            <Collapse.Panel header="Protezimi Her Akşam Çıkarmalı mıyım ?">
              <Typography.Text>
                <p>
                  Evet protezinizi akşam uyumadan önce çıkarıp temizliğini
                  yapmalısınız, sabah giymelisiniz.
                </p>
              </Typography.Text>
            </Collapse.Panel>
            <Collapse.Panel header="Her Yaşa Uygun Tabanlık Üretilebiliyor mu ?">
              <Typography.Text>
                <p>Merkezimizde her yaşa uygun tabanlık üretilebilmektedir.</p>
              </Typography.Text>
            </Collapse.Panel>
            <Collapse.Panel header="Protez ile Duş Alınabilir mi, Denize Girilebilir mi ?">
              <Typography.Text>
                <p>
                  Proteziniz özellikle bu amaçla üretilmedi ise hayır. Bu tarz
                  protezler suya dayanıklı materyallerden özel olarak
                  üretilmektedir.
                </p>
              </Typography.Text>
            </Collapse.Panel>
            <Collapse.Panel header="Tabanlık Kullanımı Sonrası Ağrılarım Hemen Geçecek mi ?">
              <Typography.Text>
                <p>
                  Tabanlıklara adaptasyon yaklaşık bir kaç haftayı
                  bulabilmektedir. Bu nedenle tabanlığın kullanımı gün
                  içerisinde devamlılık gerektirmekte ve tedaviye yanıt süresini
                  etkilemektedir.
                </p>
              </Typography.Text>
            </Collapse.Panel>
            <Collapse.Panel header="Kaç Yaşına Kadar Korse Kullanmak Zorundayız?">
              <Typography.Text>
                <p>
                  Skolyozda önemli etkenlerden biride büyüme plaklarının açık
                  olup olmamasıyla alakalıdır. Eğer adölesan idiopatik skolyoz
                  ise hastanın tedavi süreci doktoru tarafından kontrol edilip
                  büyüme süreci bitimiyle korse kullanımı son bulur.
                </p>
              </Typography.Text>
            </Collapse.Panel>
            <Collapse.Panel header="Skolyoz ameliyatı olmalımıyım olmamalımıyım?">
              <Typography.Text>
                <p>
                  Öncelikle skolyozunuzun derecesi ve yaş skalanızın uygunluğu
                  önemlidir. Ameliyat için gerekli skoloz eğrilik derecesi
                  minimum 45 derecedir. Eğer bu derecenin üzerinde iseniz bu
                  alanda uzman hekimler ile iletişime geçebilirsiniz.
                </p>
              </Typography.Text>
            </Collapse.Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default AboutSection3;
