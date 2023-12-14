import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function Header() {
    return (
      <>
    <div className="NavigationBar">
  <nav className="navbar navbar-expand-sm">
    <div className="container-fluid">

      <ul className="navbar-nav">
        <li className="nav-item">
          <img className="nav-icon" src="images/enactus.png" alt=""/>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">ABOUT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/blog">BLOGS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/projects">PROJECTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">CONTACT US</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
<div className="contents">
  <div className="triangle-left"></div>
  <h1 className="header-h1">ENACTUS MSI</h1>
  <p className="header-p">Doing our bit to shape lives and create a better, more sustainable world through
    entrepreneurial
    actions.</p>
  <a href="/projects" style={{textDecoration: "none", color:"white"}} className="btn">PROJECTS</a>
  <img className="header-img" src="images/haeder2.jpg" alt=""/>
</div>
</>

    )
}

export default Header ;