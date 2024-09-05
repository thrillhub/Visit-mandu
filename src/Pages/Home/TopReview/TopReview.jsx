import React from 'react'
import './TopReview.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review1 from '../../../assets/images/review1.jpg';
import Review2 from '../../../assets/images/review2.jpg';

function TopReview() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrow: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
  return (
    <>
     <section class="top_review">
        <div class="container align-items-center">
            <h2>TOP CLIENT <span className="text-danger">REVIEWS</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit alias, velit non aut, nostrum cum dolorem <br /> iure iusto dolores impedit ipsum cumque.</p>
        </div>

        <div className="container topreview_slider">
        <Slider {...settings}>
          <div className="review d-flex align-items-center justify-content-center">
            <img src={Review1} alt="Client 1" className="review-img" />
            <blockquote>
              <p><span className="quote-icon">“</span>
                Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion consectetur elit.
              </p>
              <footer>
                <strong>MICHAEL CLORDY</strong><br />
                Germany
              </footer>
            </blockquote>
          </div>
          <div className="review d-flex align-items-center justify-content-center">
            <img src={Review2} alt="Client 1" className="review-img" />
            <blockquote>
              <p><span className="quote-icon">“</span>
                Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion consectetur elit.
              </p>
              <footer>
                <strong>KETTY PERRY</strong><br />
                Australia
              </footer>
            </blockquote>
          </div>

          {/* Add more reviews as needed */}
        </Slider>
      </div>
    </section>
      
    </>
  )
}

export default TopReview
