import React from "react";
import "./Home.css";
import Slider from "react-slick";
import Slide1 from "../../assets/images/slider1.jpg";
import Slide2 from "../../assets/images/slider2.jpg";
import Slide3 from "../../assets/images/slider3.jpg";
import About1 from '../../assets/images/about1.jpg';
import About2 from '../../assets/images/about2.jpg';
import RoomSlider from "./RoomSlider/RoomSlider";
import CalltoAction from '../../assets/images/calltoaction.jpg';
import Gallery from "../Gallery/Gallery";
import TopReview from "./TopReview/TopReview";
import News1 from '../../assets/images/news1.jpg';
import News2 from '../../assets/images/news2.jpg';
import News3 from '../../assets/images/news3.jpg';

function Home() {

  const destinations = [
    { image: 'https://htmldesigntemplates.com/html/gautama/images/dt-1.jpg', title: 'MALDIVES', hotels: '40 Hotels' },
    { image: 'https://htmldesigntemplates.com/html/gautama/images/dt-2.jpg', title: 'AFRICA', hotels: '40 Hotels' },
    { image: 'https://htmldesigntemplates.com/html/gautama/images/dt-3.jpg', title: 'EGYPT', hotels: ' 40 Hotels' },
    { image: 'https://htmldesigntemplates.com/html/gautama/images/dt-4.jpg', title: 'AFRICA', hotels: ' 40 Hotels' },
];


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <section className="homeslider">
        <div className="container-fluid position-relative topslider ">
          <Slider {...settings} className="home_slider_Main">
            <div className="item">
              <img src={Slide1} className=" w-100" alt="" />
              <div className="info center-content">
                <p>ROOM AVAILABILITY CHECKER & BOOKING</p>
                <h2 className="mb-4">
                  BOOK EARLY <span>SAVE</span> MORE
                </h2>
                <button type="button" class="btn btn-warning">
                  EXPLORE OUR ROOMS
                </button>
              </div>
            </div>

            <div className="item">
              <img src={Slide2} className=" w-100" alt="" />
              <div className="info center-content">
                <p>THE LAP OF LUXURY</p>
                <h2 className="mb-4">
                  QUALITY <span>HOLIDAY</span> WITH US
                </h2>
                <button type="button" class="btn btn-warning">
                  BOOK A ROOMS NOW
                </button>
              </div>
            </div>

            <div className="item">
              <img src={Slide3} className=" w-100" alt="" />
              <div className="info center-content">
                <p>AS WE LIKE TO KEEP IT THAT WAY</p>
                <h2 className="mb-4">
                  A <span>FIVE STAR</span> HOTEL
                </h2>
                <button type="button" class="btn btn-warning">
                  EXPLORE OUR ROOMS
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </section>


<section className="chechin_form">
  <form className="container my-4">
    <div className="form-row align-items-center justify-content-center flex-md-row d-md-flex">
      <div className="col-sm-6 col-md-3 mb-2">
        <label htmlFor="checkIn">CHECK IN</label>
        <input
          type="date"
          className="form-control"
          id="checkIn"
          placeholder="yyyy-mm-dd"
        />
      </div>
      <div className="col-sm-6 col-md-3 mb-2">
        <label htmlFor="checkOut">CHECK OUT</label>
        <input
          type="date"
          className="form-control"
          id="checkOut"
          placeholder="yyyy-mm-dd"
        />
      </div>
      <div className="col-sm-6 col-md-2 mb-2">
        <label htmlFor="guests">GUESTS</label>
        <select className="form-control" id="guests">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="col-sm-6 col-md-2 mb-2">
        <label htmlFor="nights">NIGHTS</label>
        <select className="form-control" id="nights">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="col-sm-12 col-md-2 mb-2">
        <button type="submit" className="btn btn-warning btn-block p-2">
          CHECK AVAILABILITY
        </button>
      </div>
    </div>
  </form>
</section>


<section className="features">
  <div className="container">
    <div className="row d-flex align-items-center text-center justify-content-between">
      <div className="col-lg-4 feature-item">
        <i className="bi bi-tags-fill feature-icon"></i>
        <h3>Competitive Pricing</h3>
        <p>With 500+ suppliers and the purchasing power of 300 million members</p>
      </div>
      <div className="col-lg-4 feature-item">
      <i class="bi bi-award-fill feature-icon"></i>
        <h3>Award Winning Service</h3>
        <p>Travel worry free knowing that we're here if you need us, 24 hours a day</p>
      </div>
      <div className="col-lg-4 feature-item">
      <i class="bi bi-globe feature-icon"></i>
        <h3>Worldwide Coverage</h3>
        <p>Over 1,200,000 hotels in more than 200 countries and regions.</p>
      </div>
    </div>
  </div>
</section>



<section className="quote ">
  <div className="container">
    <div className="row align-items-center ">
      <div className="col-lg-6">
        <h2>REDEFINES THE <span className="text-warning">LUXURY HOSPITALITY</span> EXPERIENCE.</h2>
        <p>This charming private 19th century mansion, which originally belonged to the family, has been completely renovated with care & passion while respecting the spirit of place.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quia amet ab, ut incidunt rem doloremque accusantium similique fuga modi nesciunt, dignissimos odio ad dolorum laboriosam expedita nobis. Vitae, nesciunt.</p>
        <button className="btn btn-warning">
          KNOW MORE ABOUT US <span><i class="bi bi-arrow-right-short"></i></span>
        </button>
      </div>
      <div className="col-lg-6">
  <div className="row align-items-center justify-content-center  ">
    <div className="col-lg-3 position-absolute" style={{ zIndex: 2, top: '15px'}}>
      <img 
        src={About1} 
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
        src={About2} 
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


  <RoomSlider />



  <section className="top_hotel">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <h2>TOP <span className="text-warning"> HOTELS</span> </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla odio porro ipsa qui consectetur aliquid ipsum ratione impedit quibusdam, voluptatibus tempore modi distinctio eligendi vitae aspernatur. Incidunt, quasi quia.</p>
        </div>
        <div className="col-lg-3">
         <button className="btn btn-warning">EXPLORE HOTELS</button>
        </div>
      </div>

      <div className="row top_room">
                {destinations.map((destination, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card travel-card">
                            <img src={destination.image} className="card-img-top" alt={destination.title} />
                            <div className="card-img-overlay d-flex flex-column justify-content-end">
                                <h5 className="card-title text-white">{destination.title}</h5>
                                {destination.hotels && (
                                    <div className="hotels-info d-flex justify-content-between align-items-center">
                                        <span className="text-warning">{destination.hotels}</span>
                                        <button className="btn btn-warning btn-circle">&#8250;</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </div>
    
  </section>



  <section className="action">
  <div className="container-fluid position-relative topslider">
    <div className="item">
      <img src={CalltoAction} className="w-100" alt="Call to Action" />
      <div className="info center-content position-absolute text-center w-100 d-flex justify-content-center align-items-center flex-column">
        <h1>Voted <span className="highlight">"Top 100 Hotels in <br /> the World 2019"</span> by Hotel <br /> Association</h1>
        <div className="youtube-icon-container">
          <a href="#" className="youtube-icon">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  </section>

  <section class="stats-section ">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 stat-item">
                    <h1>264</h1>
                    <h5>ROOMS</h5>
                    <div class="underline"></div>
                </div>
                <div class="col-md-3 col-sm-6 stat-item">
                    <h1>576</h1>
                    <h5>STAFFS</h5>
                    <div class="underline"></div>
                </div>
                <div class="col-md-3 col-sm-6 stat-item">
                    <h1>487</h1>
                    <h5>RESTAURANT</h5>
                    <div class="underline"></div>
                </div>
                <div class="col-md-3 col-sm-6 stat-item">
                    <h1>320</h1>
                    <h5>AWARDS</h5>
                    <div class="underline"></div>
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
    <Gallery/>
    <TopReview/>


    <section className="top_news ">
      <div className="container">
        <div className="row news-row align-items-center justify-content-center ">
          <div className="col-lg-3 news_item">
            <div className="info">
              <img className="news-img" src={News1} alt="" />
            </div>
            <div className="item">
              <p>16 DECEMBER 2019</p>
              <h2>WHY CHOOSE GAUTAMA <br /> HOTEL TO TRAVEL THIS <br /> SUMMER</h2>
              <span>----------------------------------------------</span>
              <div className="icons d-flex gap-3 pb-2">
                <a href=""><i class="bi bi-person-fill me-2 ms-2 top_icon"></i>By Jack Daniels</a>
                <a href=""><i class="bi bi-chat-fill me-2 ms-2 top_icon"> </i>3 comments</a>
              </div>
              <span>----------------------------------------------</span>
              <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla</h6>
              <button className="btn custom-btn">READ MORE <i className="fa-solid fa-angles-right"></i></button>
            </div>
          </div>
          <div className="col-lg-3 news_item">
            <div className="item">
              <p>16 DECEMBER 2019</p>
              <h2>WHY CHOOSE GAUTAMA <br /> HOTEL TO TRAVEL THIS <br /> SUMMER</h2>
              <span>----------------------------------------------</span>
              <div className="icons d-flex gap-3 pb-2">
                <a href=""><i class="bi bi-person-fill me-2 ms-2 top_icon"></i>By Jack Daniels</a>
                <a href=""><i class="bi bi-chat-fill me-2 ms-2 top_icon"> </i>3 comments</a>
              </div>
              <span>----------------------------------------------</span>
              <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla</h6>
              <button className="btn custom-btn">READ MORE <i className="fa-solid fa-angles-right"></i></button>
            </div>
            <div className="info">
              <img className="w-100" src={News2} alt="" />
            </div>
          </div>
          <div className="col-lg-3 news_item">
            <div className="info">
              <img className="w-100" src={News3} alt="" />
            </div>
            <div className="item">
              <p>16 DECEMBER 2019</p>
              <h2>WHY CHOOSE GAUTAMA <br /> HOTEL TO TRAVEL THIS <br /> SUMMER</h2>
              <span>----------------------------------------------</span>
              <div className="icons d-flex gap-3 pb-2">
                <a href=""><i class="bi bi-person-fill me-2 ms-2 top_icon"></i>By Jack Daniels</a>
                <a href=""><i class="bi bi-chat-fill me-2 ms-2 top_icon"> </i>3 comments</a>
              </div>
              <span>----------------------------------------------</span>
              <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla</h6>
              <button className="btn custom-btn">READ MORE <i className="fa-solid fa-angles-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="newsletter">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7">
            <h2>SUBSCRIBE TO OUR <span className="text-danger">NEWSLETTER</span> </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis</p>
          </div>
          <div className="col-lg-5">
          <div className="input-group">
            <input type="text" placeholder="ENTER YOUR EMAIL" className="form-control" />
            <button className="btn btn-primary" type="button">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}

export default Home;
