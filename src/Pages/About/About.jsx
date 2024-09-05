import React from 'react'
import './About.css'
import about1 from '../../assets/images/about1.jpg';
import about2 from '../../assets/images/about2.jpg';

function About() {
  return (
    <>
    <section>
    <div class="container-fluid p-0">
        <div class="hero-section">
            <div class="overlay">
                <div class="text-center text-white">
                    <h1 class="display-4">ABOUT US 1</h1>
                    <p class="breadcrumb-text"><a href="#" class="text-warning">Home</a> / About Us 1</p>
                </div>
            </div>
        </div>
    </div>
    </section>


    <section className="quote ">
  <div className="container">
    <div className="row align-items-center ">
      <div className="col-lg-6">
        <h2>EXPLORE MORE ABOUT US</h2>
        <p>This charming private 19th century mansion, which originally belonged to the family, has been completely renovated with care & passion while respecting the spirit of place.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quia amet ab, ut incidunt rem doloremque accusantium similique fuga modi nesciunt, dignissimos odio ad dolorum laboriosam expedita nobis. Vitae, nesciunt.</p>
        <button className="btn btn-warning">
          KNOW MORE ABOUT US <span><i class="bi bi-arrow-right-short"></i></span>
        </button>
      </div>
      <div className="col-lg-6">
  <div className="row align-items-center justify-content-center  ">
    <div className="col-lg-3 position-absolute" style={{ zIndex: 2, top: '12px'}}>
      <img 
        src={about1} 
        className="img-fluid" 
        alt="Pool" 
        style={{
          border: '5px solid #fff',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
          width: '90%', // Adjust width as needed
        }} 
      />
    </div>
    <div className="col-lg-3 position-absolute" style={{ right: '0', zIndex: 1, }}>
      <img 
        src={about2} 
        className="img-fluid" 
        alt="City" 
        style={{
          border: '5px solid #ffff',
          
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
          width: '90%', // Adjust width as needed
        }} 
      />
    </div>
  </div>
</div>

    </div>
  </div>
</section>

<section>
    <div class="container-fluid p-0">
        <div class="stat-section">
            <div class="overlay">
                <div class="text-white">
                <div class="row text-center stats_row">
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="stat-item">
                            <i class="fas fa-suitcase fa-3x text-white"></i>
                            <h2 class="text-white">264</h2>
                            <p class="text-white">ROOMS</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="stat-item">
                            <i class="fas fa-users fa-3x text-white"></i>
                            <h2 class="text-white">576</h2>
                            <p class="text-white">STAFFS</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="stat-item">
                            <i class="fas fa-glass-cheers fa-3x text-white"></i>
                            <h2 class="text-white">487</h2>
                            <p class="text-white">RESTAURANTS & BARS</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="stat-item">
                            <i class="fas fa-trophy fa-3x text-white"></i>
                            <h2 class="text-white">320</h2>
                            <p class="text-white">AWARDS</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>


      
    </>
  )
}

export default About
