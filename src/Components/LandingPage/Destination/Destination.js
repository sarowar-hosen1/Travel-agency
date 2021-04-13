import aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ScaleLoader from 'react-spinners/ScaleLoader';
import './Destination.css';

const Destination = () => {
    const [destination, setDestination] = useState([])
    const history = useHistory();

    useEffect(() => {
        fetch("https://travel-agency00.herokuapp.com/destinations")
            .then(res => res.json())
            .then(result => setDestination(result))
        aos.init({
            duration: 300
        })
    }, [])

    return (
        <section className="destination py-4">
            <div className="container">
                <div className="section-header">
                    <h1>Popular Destinations</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                </div>
                <div className="row">
                    {
                        destination.length ?
                            destination.map(dtn =>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="destination-card" data-aos="fade-up">
                                        <img src={dtn.image} alt="" />
                                        <h5>{dtn.name}</h5>
                                        <button className="btn-brand" data-toggle="modal" data-target="#modal">Booking Now</button>
                                    </div>
                                </div>
                            )
                            :
                            <div className="d-flex justify-content-center align-items-center">
                                <ScaleLoader color="#ff552f"></ScaleLoader>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Destination;