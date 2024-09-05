import React from 'react'
import './Gallery.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery1 from '../../assets/images/gallery1.jpg';
import Gallery2 from '../../assets/images/gallery2.jpg';
import Gallery3 from '../../assets/images/gallery3.jpg';
import Gallery4 from '../../assets/images/gallery4.jpg';
import Gallery5 from '../../assets/images/gallery5.jpg';
import Gallery6 from '../../assets/images/gallery6.jpg';


function Gallery() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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
      <section class="gallery-section ">
        <div class="container align-items-center">
            <h2>OUR GALLERY</h2>
            <h1>BEAUTIFUL VIEW OF GAUTAMA HOTEL</h1>
        </div>
    </section>


    <section className="image-slider">
        <div className="container-fluid gallery_slider">
          <Slider {...settings}>
            <div>
              <img src={Gallery1} alt="Gallery Image 1" />
            </div>
            <div>
              <img src={Gallery2} alt="Gallery Image 2" />
            </div>
            <div>
              <img src={Gallery3} alt="Gallery Image 3" />
            </div>
            <div>
              <img src={Gallery4} alt="Gallery Image 4" />
            </div>
            <div>
              <img src={Gallery5} alt="Gallery Image 5" />
            </div>
            <div>
              <img src={Gallery6} alt="Gallery Image 6" />
            </div>
          </Slider>
        </div>
      </section>
      
    </>
  )
}

export default Gallery;
