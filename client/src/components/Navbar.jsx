import { NavLink, Outlet } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "../css/navbar.css";
import { AiOutlineUser } from "react-icons/ai";

import logo from "../assets/logo.png";

function navbar() {
  const activeLink = `$#fff`;
  const nomalLink = "";
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg">
        <div className="navbar_container">
          <Navbar.Brand href="/">
            <img className="logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav_menu">
              <NavLink
                className="nav_item"
                style={({ isActive }) => ({
                  color: isActive ? activeLink : nomalLink,
                })}
                to="/"
              >
                Anasayfa
              </NavLink>

              <NavLink
                className="nav_item"
                style={({ isActive }) => ({
                  color: isActive ? activeLink : nomalLink,
                })}
                to="/product"
              >
                Kategoriler
              </NavLink>

              <NavLink
                className="nav_item"
                style={({ isActive }) => ({
                  color: isActive ? activeLink : nomalLink,
                })}
                to="/galery"
              >
                Galeri
              </NavLink>

              <NavLink
                className="nav_item"
                style={({ isActive }) => ({
                  color: isActive ? activeLink : nomalLink,
                })}
                to="/about"
              >
                Hakkımızda
              </NavLink>

              <NavLink
                className="nav_item"
                style={({ isActive }) => ({
                  color: isActive ? activeLink : nomalLink,
                })}
                to="/contact"
              >
                İletişim
              </NavLink>

              <NavLink
                className="nav_item_admin nav_item  "
                style={({ isActive }) => ({
                  color: isActive ? activeLink : nomalLink,
                })}
                to="/admin"
              >
                <i>
                  <AiOutlineUser />
                </i>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default navbar;
