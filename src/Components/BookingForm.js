import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const BookingForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch("https://travel-agency00.herokuapp.com/booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...data, data: startDate })
        })
            .then(result => {
                if (result) {
                    swal({
                        title: "Booking added successfully",
                        icon: "success",
                        button: "OK",
                    });
                }
            })
            .then(() => {
                window.location.reload();
            })
    };

    return (
        <>
            <div className="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title w-100 text-center" id="exampleModalScrollableTitle">Booking Form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="fomr-group">
                                    <input className="form-control" {...register("name", { required: true })} placeholder="Name" />
                                    {errors.name && <span>Name is required</span>}
                                </div>
                                <div className="fomr-group">
                                    <input type="email" className="form-control" {...register("email", { required: true })} placeholder="Email" />
                                    {errors.email && <span>Email is required</span>}
                                </div>
                                <div className="fomr-group">
                                    <input type="number" className="form-control" {...register("phone", { required: true })} placeholder="Phone" />
                                    {errors.phone && <span>Phone number is required</span>}
                                </div>
                                <div className="fomr-group">
                                    <DatePicker style={{ width: '100%' }} className="form-control" selected={startDate} onChange={date => setStartDate(date)} />
                                </div>
                                <div className="fomr-group">
                                    <input type="number" className="form-control" {...register("person", { required: true })} placeholder="Number of Person" />
                                    {errors.person && <span>Person is required</span>}
                                </div>
                                <input class="btn-brand d-block ml-auto mt-3" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};
export default BookingForm;