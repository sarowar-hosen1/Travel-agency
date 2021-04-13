import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { MdCardTravel } from 'react-icons/md'
import aos from 'aos';
import 'aos/dist/aos.css';
import './ChooseUs.css';

const ChooseUs = () => {

    useEffect(() => {
        aos.init({
            duration: 300
        })
    },[])

    return (
        <section className="choose-us">
            <div className="container">
                <div className="section-header">
                    <h1>Why Choose Us</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="choose-us-img">
                            <img src="https://i.ibb.co/6NWH25P/why-choose-us.jpg" alt="" />
                            <img className='tumb-1' src="https://i.ibb.co/gMmvvCv/thumb.jpg" alt="" />
                            <img className='tumb-2' src="https://i.ibb.co/n1HNW58/thumb-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="choose-us-card" data-aos="fade-up">
                                    <i><FaStar /></i>
                                    <h5>Handpick Hotels</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="choose-us-card" data-aos="fade-up">
                                    <i><BiWorld /></i>
                                    <h5>World Class Services</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="choose-us-card" data-aos="fade-up">
                                    <i><AiFillLike /></i>
                                    <h5>Best Price Guarantee</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="choose-us-card" data-aos="fade-up">
                                    <i><MdCardTravel /></i>
                                    <h5>Secure Travel</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;