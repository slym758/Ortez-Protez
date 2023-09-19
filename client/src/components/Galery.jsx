import { Tabs, Pagination } from "antd";
import "../css/galery.css";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function Galery() {
  const [galery, setGalery] = useState([]);
  const [model, setModel] = useState(false);
  const [tempimg, setTemlimg] = useState([]);
  const [page, setPage] = useState(1);
  const [PostPerPage] = useState(12);
  const [categoryTitle, setCategoryTitle] = useState("tümü");
  const [filtered, setFiltered] = useState([]);
  const [total, setTotal] = useState("");

  const indexOfLastPage = page * PostPerPage;
  const indexOfFirstPage = indexOfLastPage - PostPerPage;

  useEffect(() => {
    const getGalery = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/galery/get-galery-all`
        );
        const data = await res.json();
        setGalery(data);
        setTotal(data.length);
      } catch (error) {
        console.log(error);
      }
    };
    getGalery();
  }, []);

  useEffect(() => {
    if (categoryTitle === "tümü") {
      setFiltered(galery);
    } else {
      setFiltered(
        galery.filter((item) => item.title.toLowerCase() === categoryTitle)
      );
    }
  }, [galery, setFiltered, categoryTitle]);

  const getImg = (img) => {
    setTemlimg(img);
    setModel(true);
  };

  const items = [
    {
      key: "1",
      label: (
        <div>
          <h2 onClick={() => setCategoryTitle("tümü")}>Tümü</h2>
        </div>
      ),
      children: (
        <>
          <div className={model ? "model_open" : "model"}>
            <img src={tempimg} />
            <CloseIcon onClick={() => setModel(false)} />
          </div>
          <div className="gallery">
            {filtered
              .slice(indexOfFirstPage, indexOfLastPage)
              .map((item, index) => {
                return (
                  <div
                    className="pics"
                    key={index}
                    onClick={() => getImg(item.img)}
                  >
                    <img src={item.img}></img>
                    <div className="pics_title">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="Pagination">
            <Pagination
              onChange={(value) => setPage(value)}
              pageSize={PostPerPage}
              total={total}
              current={page}
              className="pagination"
              disabled={filtered.length < 9}
            ></Pagination>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: (
        <div>
          <h2 onClick={() => setCategoryTitle("ortez")}>Ortez</h2>
        </div>
      ),
      children: (
        <>
          <div className={model ? "model_open" : "model"}>
            <img src={tempimg} />
            <CloseIcon onClick={() => setModel(false)} />
          </div>
          <div className="gallery">
            {filtered
              .slice(indexOfFirstPage, indexOfLastPage)
              .map((item, index) => {
                return (
                  <div
                    className="pics"
                    key={index}
                    onClick={() => getImg(item.img)}
                  >
                    <img src={item.img}></img>
                    <div className="pics_title">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="Pagination">
            <Pagination
              onChange={(value) => setPage(value)}
              pageSize={PostPerPage}
              total={total}
              current={page}
              className="pagination"
              disabled={filtered.length < 9}
            ></Pagination>
          </div>
        </>
      ),
    },
    {
      key: "3",
      label: (
        <div>
          <h2 onClick={() => setCategoryTitle("protez")}>Protez</h2>
        </div>
      ),
      children: (
        <>
          <div className={model ? "model_open" : "model"}>
            <img src={tempimg} />
            <CloseIcon onClick={() => setModel(false)} />
          </div>
          <div className="gallery">
            {filtered
              .slice(indexOfFirstPage, indexOfLastPage)
              .map((item, index) => {
                return (
                  <div
                    className="pics"
                    key={index}
                    onClick={() => getImg(item.img)}
                  >
                    <img src={item.img}></img>
                    <div className="pics_title">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="Pagination">
            <Pagination
              onChange={(value) => setPage(value)}
              pageSize={PostPerPage}
              total={total}
              current={page}
              className="pagination"
              disabled={filtered.length < 9}
            ></Pagination>
          </div>
        </>
      ),
    },
    {
      key: "4",
      label: (
        <div>
          <h2 onClick={() => setCategoryTitle("tabanlık")}>Tabanlık</h2>
        </div>
      ),
      children: (
        <>
          <div className={model ? "model_open" : "model"}>
            <img src={tempimg} />
            <CloseIcon onClick={() => setModel(false)} />
          </div>
          <div className="gallery">
            {filtered
              .slice(indexOfFirstPage, indexOfLastPage)
              .map((item, index) => {
                return (
                  <div
                    className="pics"
                    key={index}
                    onClick={() => getImg(item.img)}
                  >
                    <img src={item.img}></img>
                    <div className="pics_title">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="Pagination">
            <Pagination
              onChange={(value) => setPage(value)}
              pageSize={PostPerPage}
              total={total}
              current={page}
              className="pagination"
              disabled={filtered.length < 9}
            ></Pagination>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="galery">
      <div className="header_title">
        <h1>Fotoğraflar</h1>
      </div>

      <div className="gallery_tabs container">
        <Tabs defaultActiveKey="1" items={items} style={{ width: "100%" }} />
      </div>

      <Footer />
    </div>
  );
}

export default Galery;
