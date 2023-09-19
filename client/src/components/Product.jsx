import { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Footer from "../components/Footer.jsx";
import "../css/product.css";
import protez from "../assets/protez2.jpg";
import ortez from "../assets/ortez2.jpg";
import skolyoz from "../assets/skolyoz.jpg";
import skolyoz2 from "../assets/skolyoz2.webp";
import kifoz from "../assets/kifoz.webp";
import ayak from "../assets/ayak.jpg";
import cranial from "../assets/cranial.webp";
import cranial2 from "../assets/cranial2.webp";

function Product() {
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  // const [categories, setCategories] = useState([]);
  // const [product, setProduct] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  // const [page, setPage] = useState(1);
  // const [PostPerPage] = useState(9);
  // const [search, setSearch] = useState("");

  // const [categoryTitle, setCategoryTitle] = useState("Tümü");
  // const [total, setTotal] = useState("");

  // console.log(categories);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await fetch(
  //         `${import.meta.env.VITE_APP_SERVER_URL}/api/products/get-product-all`
  //       );
  //       const data = await res.json();
  //       setProduct(data);
  //       setTotal(data.length);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getProducts();
  // }, []);

  // useEffect(() => {
  //   if (categoryTitle.toLowerCase() === "tümü") {
  //     setFiltered(product);
  //   } else {
  //     setFiltered(product.filter((item) => item.category === categoryTitle));
  //   }
  // }, [product, setFiltered, categoryTitle]);

  // useEffect(() => {
  //   const getCategories = async () => {
  //     try {
  //       const res = await fetch(
  //         `${
  //           import.meta.env.VITE_APP_SERVER_URL
  //         }/api/categories/get-category-all`
  //       );
  //       const data = await res.json();
  //       setCategories(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getCategories();
  // }, []);
  // const indexOfLastPage = page * PostPerPage;
  // const indexOfFirstPage = indexOfLastPage - PostPerPage;

  return (
    <div className="Product">
      <div className="header_title">
        <h1>Kategoriler</h1>
      </div>
      <MDBRow>
        <MDBCol size="2">
          <div className="col1_title">
            <h4>Kategoriler</h4>
          </div>
          <MDBTabs className="flex-column text-center">
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab1")}
                active={verticalActive === "tab1"}
              >
                Protez
              </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab2")}
                active={verticalActive === "tab2"}
              >
                Ortez
              </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab3")}
                active={verticalActive === "tab3"}
              >
                Skolyoz ve Kifoz
              </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab4")}
                active={verticalActive === "tab4"}
              >
                Ayak Sağlığı
              </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab5")}
                active={verticalActive === "tab5"}
              >
                Cranial Kask
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size="10">
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === "tab1"}>
              <div className="product_tab">
                <div className="Product_tab_title">
                  <h1>Protez Nedir?</h1>
                </div>
                <div className="product_tab_img">
                  <img src={protez} alt="" />
                </div>
                <p>
                  <span>Protez</span>, eksik olan vücut uzuvlarını taklit edecek
                  şekilde yapılmış diz altı-diz üstü ayak ve elektronik kol
                  protezi cihazların genel adıdır. Yaralanmalar, tümör
                  cerrahileri, kangren, iltihap ve benzeri organ hasarları
                  sonucu vücudun geri kalanının sağlığını korumak amacıyla hasar
                  gören uzuv çıkartılır (ampütasyon). Bu organın fonksiyonunu
                  taklit eden protezlere fonksiyonel, görüntüsünü ve hacimsel
                  eksikliğini gidermek amaçlı hazırlanan protezlere ise kozmetik
                  protezler denir. <br /> <br />
                  Kişi için uygun olan protezin belirlenmesinde bazı özellikler
                  değerlendirilir. Bunlar kişinin yaşı, çalışma ve aktivite
                  düzeyi ile güdük adı verilen vücuttaki kalan kısmın durumudur.
                  Elbette kişinin fiziksel ve psikolojik durumu da önemlidir.
                  Sosyal Güvenlik Kurumu hastalara uygun olan protezin bir
                  raporla belirlenmesi durumunda protez ödemelerini yapmaktadır.
                  Ayrıca kaza sonrası durumlarda iş kazalarında işveren veya
                  trafik kazasında trafik ve kasko sigortaları da protez
                  ödemelerini yapmaktadır. Kaybedilen bacak ve eklem seviyesine
                  göre protezler isimlendirilir. Kalça ekleminden olan
                  kayıplarda tüm bacak yoktur ve bunlarda kalça dezartikülasyon
                  protezleri kullanılır. Diz eklemi üzerindekilere dizüstü, diz
                  seviyesinden olanlara diz dezartikülasyonu, diz altından
                  olanlara dizaltı ve ayak seviyesinden olanlara da ayak
                  protezleri denilir.
                </p>
              </div>
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === "tab2"}>
              <div className="product_tab">
                <div className="Product_tab_title">
                  <h1>Ortez Nedir?</h1>
                </div>
                <div className="product_tab_img">
                  <img src={ortez} alt="" />
                </div>
                <p>
                  <span>Ortez</span>, vücutta destek sağlamak, hareketi kontrol
                  etmek, deformiteleri düzeltmek veya ağrıyı azaltmak amacıyla
                  kullanılan bir medikal cihaz veya aparatıdır. Ortezler,
                  genellikle ayak, bacak, kol, el, omurga veya boyun gibi vücut
                  bölgelerinde kullanılır.
                  <br /> <br />
                  Ortezler, bireylerin yaşam kalitesini artırmak ve fonksiyonel
                  bağımsızlıklarını korumak için tasarlanır. Bir ortez, bireyin
                  ihtiyaçlarına ve spesifik durumuna bağlı olarak farklı
                  malzemelerden (plastik, metal, kauçuk vb.) ve tasarımlardan
                  oluşabilir. <br />
                  <br />
                  Ortezlerin bazı yaygın kullanım alanları şunlardır: <br />
                  <br />
                  1. Ekstremite Ortezleri: Ayak bileği, diz, kalça, el bileği,
                  dirsek veya omuz gibi ekstremite bölgelerinde kullanılan
                  ortezlerdir. Örneğin, ayak bileği burkulması sonrasında
                  kullanılan ayak bileği destekleri veya diz osteoartriti olan
                  bir bireyin diz eklemine destek sağlamak amacıyla kullanılan
                  diz ortezleri. <br />
                  <br />
                  2. Omurga Ortezleri: Sırt veya bel bölgesindeki omurga
                  problemleri için kullanılan ortezlerdir. Örneğin, skolyoz
                  (omurga eğriliği) durumunda kullanılan omurga korsesi veya bel
                  fıtığı olan bir bireyin beline destek sağlamak amacıyla
                  kullanılan bel kuşakları. <br />
                  <br />
                  3. El Ortezleri: El ve bilek problemleri için kullanılan
                  ortezlerdir. Örneğin, karpal tünel sendromu olan bir bireyin
                  el bileğine destek sağlamak amacıyla kullanılan el bileği
                  splintleri veya felç sonrası el hareketlerini desteklemek için
                  kullanılan el atelleri. <br />
                  <br />
                  4. Pediyatrik Ortezler: Çocuklarda kullanılan ortezlerdir.
                  Örneğin, çocuklarda görülen yürüme problemleri için kullanılan
                  ayak bileği destekleri veya omurga deformitelerinin
                  düzeltilmesi için kullanılan korse ve plakalar.
                  <br />
                  <br />
                  Ortezler, bir sağlık profesyoneli tarafından bireyin
                  ihtiyaçlarına ve sağlık durumuna uygun olarak değerlendirilir
                  ve özel olarak tasarlanır. Bireylerin fonksiyonel
                  hareketliliklerini artırırken ağrıyı azaltma, deformiteyi
                  düzeltme veya koruma sağlama gibi amaçlarla kullanılır. Her
                  bireye özel olarak tasarlandığından, doğru kullanım ve takip
                  eden düzenli kontroller önemlidir. <br />
                  <br />
                  Kas iskelet sistemini destekler ve korurlar. Ortez ve
                  destekler, kas iskelet sisteminde oluşan rahatsızlıklar ve
                  yaralanmalarda doktorlar tarafından reçete edilen ve iyileşme
                  sürecine katkıda bulunan medikal cihazlardır. Amaç, insanların
                  mobilitesini artırmaya yardım etmektir. Ortezler, vücudun
                  etkilenen bölgelerini stabilize etmek, hareketsiz kılmak ve
                  rahatlatmak veya fizyolojik olarak doğru bir şekle getirme
                  amacıyla kullanılırlar.
                </p>
              </div>
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === "tab3"}>
              <div className="product_tab">
                <div className="Product_tab_title">
                  <h1>Skolyoz ve Kifoz Nedir?</h1>
                </div>
                <div className="product_tab_img">
                  <img src={skolyoz} alt="" />
                </div>
                <p>
                  <span>Skolyoz</span>, Normal ve sağlıklı insan omurgasına
                  arkadan bakıldığında baş, boyun, sırt ve bel bölgeleri düz bir
                  hat şeklinde uzanır. Ancak omurgaya yandan bakıldığında tam
                  düz değildir. Boyun ve bel bölgesinde hafif çukurluk, sırt
                  bölgesinde ise hafif bir kamburluk gözlenir.
                </p>
                <img src={skolyoz2} alt="" />
                <p>
                  <span>“Skolyoz”</span> adı verilen{" "}
                  <span>omurga eğriliği; </span> omurganın düz bir hat şeklinde
                  uzanan bu yapısının bozularak sağa ya da sola doğru
                  eğrilmesiyle karakterize bir rahatsızlıktır. Çoğunlukla büyüme
                  çağında tanısı konulan skolyozda omurlar sağa veya sola doğru
                  yer değiştirir ve aynı zamanda kendi eksenleri etrafında
                  dönerler. Omurgaya arkadan bakıldığında eğrilik bazen ayakta
                  dik durulduğunda çıplak gözle bile fark edilebilirken, bazen
                  de klinik değerlendirme ve radyolojik görüntüleme
                  yöntemleriyle anlaşılabilir. <br />
                  <br /> <span>Kifoz,</span> omurganın öne eğrilmesi durumudur.
                  Aslında omurga sırt bölgesinde zaten öne eğik (kifotik), bel
                  bölgesinde ise çukur (lordotik) bir görünümdedir. Sırttaki öne
                  eğikliğin normalin üzerine çıkması, beldeki çukurluğun
                  düzelmesi ( 15 derecenin altına inmesi ) ya da kaybolması
                  durumunda kifoz ortaya çıkmaktadır.
                </p>

                <img src={kifoz} alt="" />
              </div>
            </MDBTabsPane>

            <MDBTabsPane show={verticalActive === "tab4"}>
              <div className="product_tab">
                <div className="Product_tab_title">
                  <h1>Ayak Saağlığı Nedir?</h1>
                </div>
                <div className="product_tab_img">
                  <img src={ayak} alt="" />
                </div>
                <p>
                  <span>Ayak Sağlığında</span> 2 terim vardır pes planus ve pes
                  cavus bunlar ; <br />
                  <br />
                  <span>Pes Planus,</span> Düz tabanlık veya tıp literatüründeki
                  adıyla pes planus, ayak tabanının çöküp tamamen yere temas
                  etmesi anlamına gelir. Basit görünse de biyomekanik açıdan
                  olumsuz bir durumdur. Hareket kabiliyetini azaltarak yaşam
                  kalitesine kötü etki edebilen düz tabanlık, çocuklarda ve
                  yetişkinlerde görülebilir. <br />
                  <br />
                  <span>Pes Cavus,</span> ayaktaki kemerin çok yüksek olması
                  durumudur. Burada ayağın iç yayının fazla eğilimli ve dikliği
                  görülür. Pes Cavus, genetik olarak geçebileceği gibi,
                  nörolojik bazı hastalıklar sonucu da görülebilir.
                </p>
              </div>
            </MDBTabsPane>

            <MDBTabsPane show={verticalActive === "tab5"}>
              <div className="product_tab">
                <div className="Product_tab_title">
                  <h1>Cranial Kask Nedir?</h1>
                </div>
                <div className="product_tab_img">
                  <img src={cranial} alt="" />
                </div>
                <p>
                  <span>Cranial Kask</span>, CH-PRO (A) ve CH-PRO (P) kraniyal
                  ortez kasklar ile en yeni teknoloji kullanılarak
                  üretilmektedir. Kaskların hastaya özgü tam ve ideal ölçülerde
                  üretilebilmesi için yüksek hassasiyetli üç boyutlu dijital
                  CAD-CAM yazılımı kullanılarak ölçü alınmakta ve kaskların
                  dizaynı alınan dijital üç boyutlu görüntü örneği üzerinde
                  oluşturulmaktadır. <br />
                  <br />
                  Hastaya kullanılanacak olan kask sisteminin aktif (CH-PRO A)
                  veya pasif (CH-PRO P) olacağı uzman hekim tarafından
                  belirlenmekte ve buna bağlı olarak kaskın üretiminde
                  kullanılacak malzemenin kalınlığı, esneklik derecesi ve baskı
                  düzeyi bu tercihe göre yapılandırılmaktadır. <br />
                  <br />
                  Yüksek hassasiyetli CAD-CAM metodu ile alınan ölçüler
                  sayesinde kafatasındaki deformasyon veya düzeltilme/koruma
                  bölgelerine en uygun boşluk veya baskı alanları bilgisayar
                  yazılımı üzerinde hesaplanarak planlanır ve istenilen kask bu
                  veriler ışığında dizayn edilmektedir. Bu sayede hastanın kask
                  tedavisi sürecinin hekimin ön gördüğü ve istediği ölçüde ve en
                  az sorunla geçirilmesi mümkün olmaktadır.
                </p>
                <img className="cranial_img" src={cranial2} alt="" />
                <p>
                  Aktif veya pasif kask tedavisi sürecinde, hastalarımızın
                  kafatası deformasyonlarının düzeltilmesi, kafatası kemik
                  yapısının sağlıklı gelişiminin korunması ve desteklenmesi
                  sonucu beyin gelişiminin yaşına uygun sürdürülebilmesi ana
                  hedef olduğundan, kullanılan malzemelerin kalitesi son derece
                  önemlidir. <br />
                  <br />
                  Kafa derisi ve cilde zarar vermeyen en uygun malzemenin
                  seçilmesi ve hastanın ihtiyacına uygun şekilde yeniden
                  şekillendirilmesi veya düzeltilmesi işlemleri eğitimli
                  tekniker kadromuz tarafından özenle yapılmakta ve kontrol
                  edilmektedir. <br />
                  <br />
                  Bunun yanı sıra, kask tedavi sürecinde ortaya çıkabilecek tüm
                  sorunlar için hekim danışmanlığında her türlü düzeltme ve
                  rötuş işlemleri konusunda eğitimli teknik kadromuzla yanınızda
                  olmaktayız.
                </p>
              </div>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
        <Footer />
      </MDBRow>
      {/* <Row className="product_content ">
        <Col className="col1" xs={6} md={3}>
          <div className="col1_inner">
            <div className="col1_title">
              <h4>Kategoriler</h4>
            </div>
            <div className="col1_ul">
              <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                  {" "}
                  Kategoriler
                  <AiFillCaretDown />
                </Navbar.Toggle>
                <Navbar.Collapse
                  id="responsive-navbar-nav"
                  className="category_list"
                >
                  <ul>
                    {categories.map((item) => (
                      <li
                        key={item._id}
                        onClick={() =>
                          setCategoryTitle(item.title.toLowerCase())
                        }
                      >
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </Navbar.Collapse>
              </Navbar>
              <Outlet />
            </div>
          </div>
        </Col>
        <Col className="col2" xs={12} md={9}>
          <div className="col2_inner">
            <div className="col2_search">
              <Search
                placeholder="Ara"
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                enterButton
              />
            </div>

            <div className="Products">
              {filtered
                .filter((key) => key.title.toLowerCase().includes(search))
                .slice(indexOfFirstPage, indexOfLastPage)
                .map((item) => (
                  <div key={item._id} className="Products_card">
                    <div className="Products_card_img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="Products_card_details">
                      <h3 className="Products_card_title">{item.title}</h3>

                      <button className="Product_button">
                        <Link
                          className="Product_link"
                          to={`/detail/${item._id}`}
                        >
                          İncele
                        </Link>
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            <Pagination
              onChange={(value) => setPage(value)}
              pageSize={PostPerPage}
              total={total}
              current={page}
              className="pagination"
              disabled={filtered.length < 9}
            ></Pagination>
          </div>
        </Col>

        <Footer />
      </Row> */}
    </div>
  );
}

export default Product;
