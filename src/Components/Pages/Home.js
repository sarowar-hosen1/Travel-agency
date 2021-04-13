import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs.js'
import ContactUs from '../ContactUs/ContactUs';
import Destination from '../Destination/Destination';
import Gallery from '../Gallery/Gallery';
import GoogleMap from '../GoogleMap/GoogleMap';
import Header from '../Header/Header';
import HomeSlider from '../HomeSlider/HomeSlider';
import OurBlog from '../OurBlog/OurBlog';
import Packages from '../Packages/Packages';
import ScrollTop from '../ScrollTop/ScrollTop.js';
import Services from '../Services/Services';
import BookingForm from '../BookingForm.js';

const Home = () => {
    return (
        <>
            <Header />
            <HomeSlider />
            <Services />
            <BookingForm />
            <ChooseUs />
            <Destination />
            <Packages />
            <Gallery />
            <OurBlog />
            <ContactUs />
            <GoogleMap />
            <ScrollTop />
        </>
    );
};

export default Home;