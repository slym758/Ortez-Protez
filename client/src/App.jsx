import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Galery from "./components/Galery";
import Admin from "./components/Admin";
import Detail from "./components/Detail";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Navbar />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="galery" element={<Galery />} />
          <Route path="product" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
