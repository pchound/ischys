'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState } from "react"


const ContactForm = () => {


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
    });

    const [formSuccess, setFormSuccess] = useState(false)
    const [formSuccessMessage, setFormSuccessMessage] = useState("")

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = (e) => {
        // We don't want the page to refresh
        e.preventDefault()

        const formURL = e.target.action
        const data = new FormData()

        // Turn our formData state into data we can use with a form submission
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        })

        // POST the data to the URL of the form
        fetch(formURL, {
            method: "POST",
            body: data,
            headers: {
                'accept': 'application/json',
            },
        }).then((response) => response.json())
            .then((data) => {
                setFormData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    message: ""
                })

                setFormSuccess(true)
                setFormSuccessMessage(data.submission_text)
            })
    }

    useEffect(() => {
        const link = document.createElement('link');
        link.href =
            'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200;1,8..60,200&display=swap" rel="stylesheet';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <div className='md:max-w-8xl mx-auto items-center'>

            <h1 className='text-[#1d130a]text - center text - 3xl pb - 5'
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 300
                }
                }
            >
                General Inquiries
            </h1 >

            {
                formSuccess ?
                    <div>{formSuccessMessage}</div>
                    :
                    <form
                        method="POST"
                        action="https://www.formbackend.com/f/664decaabbf1c319"
                        onSubmit={submitForm}
                        className="text-amber-950 w-full max-w-3xl mx-auto ml-3 mr-3"
                    >
                        {/* First and Last Name */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    onChange={handleInput}
                                    value={formData.firstName}
                                    className="bg-[#fff2df] rounded-2xl p-2 w-full border border-transparent focus:border-[#59433b] focus:ring-2 focus:ring-[#59433b] outline-none"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    onChange={handleInput}
                                    value={formData.lastName}
                                    className="bg-[#fff2df] rounded-2xl p-2 w-full border border-transparent focus:border-[#59433b] focus:ring-2 focus:ring-[#59433b] outline-none"
                                />
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                            <div className="md:col-span-2 flex justify-center">
                                <div className="w-full max-w-md">
                                    <label>Phone<br /></label>
                                    <input
                                        type="text"
                                        name="phone"
                                        onChange={handleInput}
                                        value={formData.phone}
                                        className="bg-[#fff2df] rounded-2xl p-2 w-full border border-transparent focus:border-[#59433b] focus:ring-2 focus:ring-[#59433b] outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                            <div className="md:col-span-2 flex justify-center">
                                <div className="w-full md:max-w-md">
                                    <label>Email<br /></label>
                                    <input
                                        type="text"
                                        name="email"
                                        onChange={handleInput}
                                        value={formData.email}
                                        className="bg-[#fff2df] rounded-2xl p-2 w-full border border-transparent focus:border-[#59433b] focus:ring-2 focus:ring-[#59433b] outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                            <div className="md:col-span-2 flex justify-center">
                                <div className="w-full max-w-xl">
                                    <label>Message<br /></label>
                                    <textarea
                                        name="message"
                                        onChange={handleInput}
                                        value={formData.message}
                                        className="bg-[#fff2df] rounded-2xl p-2 w-full h-40 border border-transparent focus:border-[#59433b] focus:ring-2 focus:ring-[#59433b] outline-none"
                                    ></textarea>
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                            <div className="md:col-span-2 flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-[#bda28c] rounded-2xl px-6 py-3 cursor-pointer hover:bg-[#8b6d55] text-white w-full max-w-l mt-4"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
            }
        </div >
    );
}

export default ContactForm;
