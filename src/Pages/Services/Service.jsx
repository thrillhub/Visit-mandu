import React from 'react'
import './Service.css'

function Service() {
  return (
    <>
    <section>
    <div class="container-fluid p-0">
        <div class="hero-section">
            <div class="overlay">
                <div class="text-center text-white">
                    <h1 class="display-4">Services 1</h1>
                    <p class="breadcrumb-text"><a href="#" class="text-warning">Home</a> / Services 1</p>
                </div>
            </div>
        </div>
    </div>
    </section>

    <section className="amenities" >
      <div className="container">
        <div className="row row_title">
          <div className="col-lg-12 text-center align-items-center">
            <h2>EXPLORE <span className="text-danger">AMENITIES</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae qui dignissimos architecto officia voluptatum? Provident nam ex fugiat voluptates, ratione consequuntur, harum fuga saepe accusantium alias delectus sit quo est?</p>
          </div>
        </div>
        <div className="row card_row align-items-center justify-content-center">
        <div className="col-lg-3">
          <div className="item text-center align-items-center">
            <a href=""><i class="bi bi-trophy-fill animi_icon"></i></a>
            <p>PRIVATE BAR</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="item text-center align-items-center">
            <a href=""><i class="bi bi-car-front animi_icon"></i></a>
            <p>TRANSPORT</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="item text-center align-items-center">
            <a href=""><i class="bi bi-wifi animi_icon"></i></a>
            <p>FREE WIFI</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="item text-center align-items-center">
            <a href=""><i class="fa-solid fa-bath animi_icon"></i></a>
            <p>LAUNDARY SERVICES</p>
          </div>
        </div>
             
              
        </div>

        <div className="row card_row align-items-center justify-content-center">
        <div className="col-lg-3">
          <div className="item text-center align-items-center">
            <a href=""><i class="bi bi-gear-fill animi_icon"></i></a>
            <p>QUICK SERVICE</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="item text-center align-items-center">
            <a href=""><i class="bi bi-geo-alt-fill animi_icon"></i></a>
            <p>CITY MAP</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="item text-center align-items-center">
            <a href=""><i class="fa fa-life-ring animi_icon"></i></a>
            <p>SWIMMING POOl</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="item text-center align-items-center">
            <a href=""><i class="fa fa-bolt animi_icon"></i></a>
            <p>SMOKING FREE</p>
          </div>
        </div>
             
              
        </div>
      </div>
    </section>
      
    </>
  )
}

export default Service
