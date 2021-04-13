import aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import './OurBlog.css';

const OurBlog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("https://travel-agency00.herokuapp.com/posts")
            .then(res => res.json())
            .then(result => setBlogs(result))
        aos.init({
            duration: 300
        })
    }, [])

    return (
        <section id="blogs" className="our-blog pb-5">
            <div className="container">
                <div className="section-header">
                    <h1>Our Blog</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                </div>
                <div className="row">
                    {
                        blogs.length ?
                            blogs.map(blog =>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="blog" data-aos="fade-up">
                                        <div className="blog-head">
                                            <img src={blog.pic} alt="" />
                                            <h6>{new Date().toDateString()}</h6>
                                        </div>
                                        <div className="content">
                                            <h5>{blog.title}</h5>
                                            <p>{blog.desc}</p>
                                        </div>
                                    </div>
                                </div>)
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

export default OurBlog;