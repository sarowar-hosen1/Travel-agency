import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import './Header.css';

const Header = () => {

    const [sticky, setSticky] = useState(false);
    const [bar, setBar] = useState(true);

    const handleScroll = () => {
        if (window.pageYOffset > 150) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    window.addEventListener('scroll', handleScroll);

    return (
        <header className={sticky ? "sticky-top" : "hello"}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid container">
                    <Link className="navbar-brand" href="#">
                        <img src="https://cdn.worldvectorlogo.com/logos/trivago.svg" alt="" />
                    </Link>
                    <button onClick={() => setBar(!bar)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {
                            bar ? 
                            <i><FaBars /></i>
                            :
                            <i><FaWindowClose /></i>
                        }
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="carouselExampleCaptions" smooth={true} duration={200} >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="services" smooth={true} duration={200} >Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="destination" smooth={true} duration={200} >Destination</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="package" smooth={true} duration={200} >Packages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="gallery" smooth={true} duration={200} >Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="blogs" smooth={true} duration={200} >Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact" smooth={true} duration={200} >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;