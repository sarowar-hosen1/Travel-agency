import React, { useState } from 'react';
import {BiUpArrow} from 'react-icons/bi';
import { Link } from 'react-scroll';
import './ScrollTop.css';

const ScrollTop = () => {
    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setScroll(true)
        }else{
            setScroll(false)
        }
    }

    window.addEventListener('scroll', handleScroll)
    return (
        <div className="scroll-top">
            {
                scroll && 
                <Link to="carouselExampleCaptions" smooth={true} duration={200}><i><BiUpArrow /></i></Link>
            }
        </div>
    );
};

export default ScrollTop;