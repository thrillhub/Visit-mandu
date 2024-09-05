import React from 'react'
import './Header.css'
import NavigationBar from './NavigationBar/NavigationBar'

function Header() {
  return (
    <>
    <div className="text-white py-2 text-center header d-none d-lg-block">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 text-center text-md-left first_content">
            <ul className="list-unstyled d-flex align-items-center gap-4 m-0">
            <li><i className="bi bi-envelope-fill me-2 ms-2"></i>info@gautama.com</li>
            <li><i className="bi bi-telephone-fill me-2 ms-2"></i>977-222-333-444</li>
            </ul>
          </div>

          
          <div className="col-lg-4 text-center header_mid">
            <ul className="list-unstyled d-flex align-items-center gap-4 m-0">
                <li><div className="dropdown d-inline-block">
                <button className="btn btn-primary text-white dropdown-toggle "
                type="button"
                id="languageDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"> Eng </button>
              <div className="dropdown-menu bg-primary" aria-labelledby="languageDropdown">
                <a className="dropdown-item" href="#"> English </a>
                <a className="dropdown-item" href="#">Nepali</a>
                <a className="dropdown-item" href="#">Hindi</a>
              </div>
            </div></li>
            <li className="ml-3"><i className="bi bi-person me-2 ms-2"></i>Login</li>
            <li className="ml-3"><i className="bi bi-pencil-fill me-2 ms-2"></i> Register</li>
            </ul>
            
            
          </div>

          
          <div className="col-lg-4 text-center text-md-right header-icons">
            <ul className="list-unstyled d-flex align-items-center gap-4 justify-content-center justify-content-md-end m-0 ">
              <li><a href=""><i className="bi bi-facebook"></i></a></li>
              <li><a href=""><i className="bi bi-twitter"></i></a></li>
              <li><a href=""><i className="bi bi-instagram"></i></a></li>
              <li><a href=""><i className="bi bi-google"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>


    <NavigationBar   />
    </>
  )
}

export default Header
