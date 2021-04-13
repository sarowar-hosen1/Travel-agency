import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdChat } from 'react-icons/md';
import ContactForm from './ContactForm';
import aos from 'aos';
import 'aos/dist/aos.css';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <section className="contact pb-5">
            <div className="container">
                <div className="contact-inner">
                    <div className="section-header">
                        <h1>Contact Us</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="contact-info" data-aos="fade-up">
                                <i><MdChat /></i>
                                <li>Comilla, Chittagong</li>
                                <li>Bangladesh</li>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="contact-info" data-aos="fade-up">
                                <i><FaPhone /></i>
                                <li>+8801735924138</li>
                                <li>+8801777924136</li>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="contact-info" data-aos="fade-up">
                                <i><FaEnvelope /></i>
                                <li>sarowarhosenakib2@gmail.com</li>
                                <li>sarowar.hosen02@gmail.com</li>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;