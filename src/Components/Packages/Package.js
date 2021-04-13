import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ScaleLoader from 'react-spinners/ScaleLoader';
//import swiper
import SwiperCore, { A11y, Autoplay, Navigation, Scrollbar } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import BookingForm from '../BookingForm';




// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y, Autoplay]);

const Package = () => {
    const [packages, setPackage] = useState([]);

    useEffect(() => {
        fetch("https://travel-agency00.herokuapp.com/packages")
            .then(res => res.json())
            .then(result => setPackage(result))
    }, [])

    return (
        <Swiper
            observer={true}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 2000,
            }}
        >

            {
                packages.length ?
                    packages.map(pkg => (
                        <SwiperSlide>
                            <div className="package" data-aos="fade-up">
                                <div className="package-header">
                                    <img src={pkg.image} alt="" />
                                    <h6 className="price">$ {pkg.price}</h6>
                                    <button className="btn-brand" data-toggle="modal" data-target="#modal">Explore Now</button>
                                    <BookingForm></BookingForm>
                                </div>
                                <div className="package-content">
                                    <h5>{pkg.name}</h5>
                                    <div className="d-flex">
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                        <i><FaStar /></i>
                                    </div>
                                    <p className='mt-2'>5 Days - 4 Nights</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur diam tellus. Phasellus odio sem scelerisque</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                    :
                    <div className="d-flex justify-content-center align-items-center">
                        <ScaleLoader color="#ff552f"></ScaleLoader>
                    </div>
            }
        </Swiper>
    );
};

export default Package;