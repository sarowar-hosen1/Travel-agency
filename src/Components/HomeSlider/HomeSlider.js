import React from 'react';
import slider1 from '../../image/slide1.jpg';
import slider2 from '../../image/slide2.jpg';
import slider3 from '../../image/slide3.jpg';
import {Link } from 'react-scroll';
import './HomeSlider.css';

const HomeSlider = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide flex-viewport" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide "></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide "></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slider1} className="d-block w-100 img-fluid" alt="Carousel -1" />
                    <div className="carousel-caption" data-aos="zoom-in">
                        <h1 className="display-4">Welcome<span> To The Travel </span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam corrupti tempore quia molestiae at quod quibusdam accusantium culpa.</p>
                        <Link to="packages"><button className="btn-brand">Booking Now</button></Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider2} className="d-block w-100 img-fluid" alt="Corousel-2" />
                    <div className="carousel-caption" data-aos="zoom-in">
                        <h1 className="display-4">Choose <span>The Best Packages</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptates esse magnam ratione, provident fugit libero assumenda harum error.</p>
                        <Link to="packages"><button className="btn-brand">Booking Now</button></Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider3} className="d-block w-100 img-fluid" alt="Corousel-3" />
                    <div className="carousel-caption" data-aos="zoom-in">
                        <h1 className="display-4">Travel <span>The Beautiful Place</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis sit quod tempore dicta numquam amet, obcaecati</p>
                        <Link to="packages"><button className="btn-brand">Booking Now</button></Link>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HomeSlider;