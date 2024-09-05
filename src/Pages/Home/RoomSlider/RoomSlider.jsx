import React from 'react';
import './RoomSlider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Room1 from '../../../assets/images/room-b1.jpg';
import Room2 from '../../../assets/images/room-b2.jpg';
import Room3 from '../../../assets/images/room-b3.jpg';
import Room4 from '../../../assets/images/room-b4.jpg';


const RoomSlider = () => {
    const settings = {
        dots: false,
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
        <section className='room_slider'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 explore-rooms">
                    <h5>DISCOVER OUR ROOMS</h5>
                    <h2>EXPLORE <span>ROOMS & SUITES</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis.</p>
                    <p>To start the day in the best way, enjoying the extraordinary buffet breakfast in the quiet of our courtyard caressed by the...</p>
                    <button className="btn btn-dark">EXPLORE MORE ROOMS</button>
                </div>

                <div className="col-lg-8 col-md-12">
                    <Slider className='room_slider1' {...settings}>
                        {/* Slide 1 */}
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-lg-6">
                            <div className="room-card">
                            <img className='room_img' src={Room1} alt="Royal Deluxe" />
                            <div className="room-card-body">
                                <h3 className="room-title">ROYAL DELUXE</h3>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="room-price">$2010 / per Night</span>
                                    <div className="rating">
                                        <span>★★★★★</span>
                                    </div>
                                </div>
                                <ul className="room-features">
                                    <li><i className="bi bi-door-open"></i>3 Bedrooms</li>
                                    <li><i className="bi bi-wifi"></i>Wifi</li>
                                </ul>
                                <div className="d-flex justify-content-between mt-3">
                                    <button className="btn btn-dark">VIEW DETAILS</button>
                                    <button className="btn btn-warning text-white">BOOK NOW</button>
                                </div>
                            </div>
                        </div>

                        </div>
                        <div className="col-lg-6">
                        <div className="room-card">
                            <img className='room_img' src={Room2} alt="Royal Deluxe" />
                            <div className="room-card-body">
                                <h3 className="room-title">ROYAL DELUXE</h3>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="room-price">$2010 / per Night</span>
                                    <div className="rating">
                                        <span>★★★★★</span>
                                    </div>
                                </div>
                                <ul className="room-features">
                                    <li><i className="bi bi-door-open"></i>3 Bedrooms</li>
                                    <li><i className="bi bi-wifi"></i>Wifi</li>
                                </ul>
                                <div className="d-flex justify-content-between mt-3">
                                    <button className="btn btn-dark">VIEW DETAILS</button>
                                    <button className="btn btn-warning text-white">BOOK NOW</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        

                        

                        

                        {/* Slide 2 */}
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-lg-6">
                            <div className="room-card">
                            <img className='room_img' src={Room3} alt="Royal Deluxe" />
                            <div className="room-card-body">
                                <h3 className="room-title">ROYAL DELUXE</h3>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="room-price">$2010 / per Night</span>
                                    <div className="rating">
                                        <span>★★★★★</span>
                                    </div>
                                </div>
                                <ul className="room-features">
                                    <li><i className="bi bi-door-open"></i>3 Bedrooms</li>
                                    <li><i className="bi bi-wifi"></i>Wifi</li>
                                </ul>
                                <div className="d-flex justify-content-between mt-3">
                                    <button className="btn btn-dark">VIEW DETAILS</button>
                                    <button className="btn btn-warning text-white">BOOK NOW</button>
                                </div>
                            </div>
                        </div>

                        </div>
                        <div className="col-lg-6">
                        <div className="room-card">
                            <img className='room_img' src={Room4} alt="Royal Deluxe" />
                            <div className="room-card-body">
                                <h3 className="room-title">ROYAL DELUXE</h3>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="room-price">$2010 / per Night</span>
                                    <div className="rating">
                                        <span>★★★★★</span>
                                    </div>
                                </div>
                                <ul className="room-features">
                                    <li><i className="bi bi-door-open"></i>3 Bedrooms</li>
                                    <li><i className="bi bi-wifi"></i>Wifi</li>
                                </ul>
                                <div className="d-flex justify-content-between mt-3">
                                    <button className="btn btn-dark">VIEW DETAILS</button>
                                    <button className="btn btn-warning text-white">BOOK NOW</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
        </section>
        </>
    );
};

export default RoomSlider;
