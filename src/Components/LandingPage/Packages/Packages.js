import React from 'react';
import Package from '../../Shared/Package';




//import internel css
import './Packages.css';




const Packages = () => {
    

    return (
        <section id="packages" className="packages py-4">
            <div className="container">
                <div className="section-header">
                    <h1>Popular Tour Package</h1>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </div>
                <div>
                    <Package />
                </div>
            </div>
        </section>
    );
};

export default Packages;