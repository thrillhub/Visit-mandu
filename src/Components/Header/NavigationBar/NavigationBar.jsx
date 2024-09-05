import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import Logo from "../../../assets/images/logo.png";


function NavigationBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      setIsLocked(true);
    } else {
      // Scrolling up
      setIsLocked(false);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isLocked ? 'locked' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#/">
          <img className="w-100" src={Logo} alt="Logo" /></a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar} // Toggle sidebar on click
            aria-controls="navbarNav"
            aria-expanded={sidebarOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container">
            <div className="row w-100 align-items-center justify-content-center">
              <div className="col-lg-10 col-md-9 col-sm-8">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                  <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">HOME</a></li>
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">ROOMS </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#"> Room List</a></li>
                      <li><a className="dropdown-item" href="#">Room Book</a></li>
                      <li> <hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#"> Room details</a></li>
                    </ul>
                    </li>

                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">PAGES </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/services"> SERVICES</a></li>
                      <li><a className="dropdown-item" href="/about">ABOUT US</a></li>
                      <li> <hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="/gallery"> GALLERY</a></li>
                    </ul>
                    </li>

                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">RESTAURANT </a>
                    <ul className="dropdown-menu list-unstyled">
                      <li><a className="dropdown-item" href="/"> HOME</a></li>
                      <li><a className="dropdown-item" href="/about">ABOUT US</a></li>
                      <li> <hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#"> MENU</a></li>
                    </ul>
                    </li>

                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">FLIGHTS</a>
                    <ul className="dropdown-menu list-unstyled">
                      <li><a className="dropdown-item" href="/"> HOME</a></li>
                      <li><a className="dropdown-item" href="/about">ABOUT US</a></li>
                      <li> <hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#"> MENU</a></li>
                    </ul>
                    </li>

                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">SHOP </a>
                    <ul className="dropdown-menu list-unstyled  ">
                      <li><a className="dropdown-item" href="/"> HOME</a></li>
                      <li><a className="dropdown-item" href="/about">ABOUT US</a></li>
                      <li> <hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#"> MENU</a></li>
                    </ul>
                    </li>

                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">BLOG </a>
                    <ul className="dropdown-menu list-unstyled">
                      <li><a className="dropdown-item" href="/"> HOME</a></li>
                      <li><a className="dropdown-item" href="/about">ABOUT US</a></li>
                      <li> <hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#"> MENU</a></li>
                    </ul>
                    </li>

                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">DASHBOARD</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/"> HOME</a></li>
                      <li><a className="dropdown-item" href="#">ABOUT US</a></li>
                      <li> <hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#"> MENU</a></li>
                    </ul>
                    </li>
                    <li><a href=""><i class="bi bi-cart-fill text-dark me-2 ms-2"></i></a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-4 d-flex align-items-center justify-content-end">
                <button className="btn btn-warning ml-2" type="button">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>


 {/* Sidebar Component */}
 <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
 <ul className="sidebar-nav">
   <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
   <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
   <li className="nav-item"><a className="nav-link" href="/menu">Menu</a></li>
   <li className="nav-item"><a className="nav-link" href="/contact">Contact US</a></li>
   <li className="nav-item"><a className="nav-link active" href="/">Services</a></li>
   <li className="nav-item"><a className="nav-link" href="/">Room</a></li>
   <li className="nav-item"><a className="nav-link" href="/">Flight</a></li>
   <li className="nav-item"><a className="nav-link" href="/">Blog</a></li>
   <li className="nav-item"><a className="nav-link active" href="/">Pages</a></li>


 </ul>
</div>
</>
  );
}

export default NavigationBar;
