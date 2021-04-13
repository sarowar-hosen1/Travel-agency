import 'aos/dist/aos.css';
import React from 'react';
import { useForm } from "react-hook-form";
import './ContactUs.css';

const ContactForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch("https://travel-agency00.herokuapp.com/send_mail", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Hello")
                }
            })
    };


    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)} data-aos="zoom-in" >

            <div className="form-group d-flex justify-content-between">
                <div className='w-100 mr-4'>
                    <input className="form-control" {...register("name", { required: true })} placeholder="Name" />
                    {errors.name && <span>Name is required</span>}
                </div>
                <div className="w-100">
                    <input className="form-control" type="email" {...register("email", { required: true })} placeholder="Email" />
                    {errors.email && <span>Email is required</span>}
                </div>
            </div>
            <div className="form-group">
                <input className="form-control"{...register("subject", { required: true })} placeholder="Subject" />
                {errors.subject && <span>Subject is required</span>}
            </div>
            <div className="form-group">
                <textarea cols="30" rows="5" className="form-control" {...register("message", { required: true })} placeholder="Message" style={{ resize: "none" }} ></textarea>
                {errors.message && <span>Message is required</span>}
            </div>

            <input type="submit" value="Send Message" class="btn-brand d-block ml-auto" />
        </form>
    );
};

export default ContactForm;