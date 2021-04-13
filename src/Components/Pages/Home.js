import React from 'react';
import ChooseUs from '../LandingPage/ChooseUs/ChooseUs.js'
import ContactUs from '../LandingPage/ContactUs/ContactUs';
import Destination from '../LandingPage/Destination/Destination';
import Gallery from '../LandingPage/Gallery/Gallery';
import GoogleMap from '../Shared/GoogleMap/GoogleMap';
import Header from '../Shared/Header/Header';
import HomeSlider from '../LandingPage/HomeSlider/HomeSlider';
import OurBlog from '../LandingPage/OurBlog/OurBlog';
import Packages from '../LandingPage/Packages/Packages';
import ScrollTop from '../LandingPage/ScrollTop/ScrollTop.js';
import Services from '../LandingPage/Services/Services';
import BookingForm from '../Shared/BookingForm.js';

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