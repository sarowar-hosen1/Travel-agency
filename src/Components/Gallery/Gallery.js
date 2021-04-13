import aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import ScaleLoader from 'react-spinners/ScaleLoader';
import './Gallery.css';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch('https://travel-agency00.herokuapp.com/gallery')
            .then(res => res.json())
            .then(data => setGallery(data.slice(0, 8)));
        aos.init({
            duration: 300
        })
    }, [])



    return (
        <section className="gallery py-4">
            <div className="section-header">
                <h1>Gallery</h1>
                <p className='w-50'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
            </div>
            <div className="gallery-inner">
                <div className="row">
                    {
                        gallery.length ?
                            gallery.map(gllry =>
                                <div className="col-md-3 col-sm-6 col-12">
                                    <div className="gallery-card" data-aos="fade-up">
                                        <img src={gllry.pic} alt="" />
                                        <h6>{gllry.location}</h6>
                                        <i><AiOutlinePlus /></i>
                                    </div>
                                </div>)
                            :
                            <div className="d-flex justify-content-center align-items-center">
                                <ScaleLoader color="#ff552f"></ScaleLoader>
                            </div>
                    }
                </div>
                <button className='btn btn-outline-warning d-block mx-auto mt-4'>All Gallery</button>
            </div>
        </section>
    );
};

export default Gallery;