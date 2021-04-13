import React, { useEffect } from 'react';
import { MdHotel, MdFlight, MdCake, MdHome} from 'react-icons/md'
import {FaTicketAlt, FaTrain } from 'react-icons/fa'
import aos from 'aos';
import 'aos/dist/aos.css';
import './Services.css';

const Services = () => {    

    useEffect(() => {
        aos.init({
            duration:300
        });
    })

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="servics-inner">
                    <div className="section-header">
                        <h1>Voyage Service</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service" data-aos="fade-up">
                                <i><MdHotel /></i>
                                <h5>Hotel Booking</h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service" data-aos="fade-up">
                                <i><MdFlight /></i>
                                <h5>Hotel Booking</h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service" data-aos="fade-up">
                                <i><FaTicketAlt /></i>
                                <h5>Hotel Booking</h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service" data-aos="fade-up">
                                <i><MdCake /></i>
                                <h5>Hotel Booking</h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service" data-aos="fade-up">
                                <i><FaTrain /></i>
                                <h5>Hotel Booking</h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service" data-aos="fade-up">
                                <i><MdHome /></i>
                                <h5>Hotel Booking</h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;