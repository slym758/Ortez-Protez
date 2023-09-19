import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/detail.css";

function Detail() {
  const [homeproduct, setHomeroduct] = useState([]);
  console.log(homeproduct);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/products/get-product-all`
        );
        const data = await res.json();
        setHomeroduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const params = useParams();

  return (
    <div className="detail">
      <Navbar />
      {homeproduct.map((item) =>
        item._id === params.id ? (
          <div className="header_title" key={item._id}>
            <h1>Ürünlerimiz</h1>
            <p>
              <Link className="Link" to="/">
                Anasayfa
              </Link>
              /{" "}
              <Link className="Link" to="/product">
                Ürünlerimiz
              </Link>{" "}
              / {item.category} / {item.title}
            </p>
          </div>
        ) : null
      )}

      {homeproduct.map((item) =>
        item._id === params.id ? (
          <div className="detail_product container " key={item._id}>
            <div className="detail_product_photo">
              <img src={item.img} alt="" />
            </div>

            <div className="detail_product_content">
              <h2>{item.title} Nedir?</h2>
              <div className="details">
                <div>{item.detail}</div>
                <div>{item.detail1}</div>
                <div>{item.detail2}</div>
                <div>{item.detail3}</div>
              </div>
            </div>
          </div>
        ) : null
      )}

      <Footer />
    </div>
  );
}

export default Detail;
