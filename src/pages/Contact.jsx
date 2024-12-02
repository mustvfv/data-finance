import React, { useState } from "react";
import Button from "../components/Button";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="w-full py-32 px-4">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white">Contact Us</h2>
                    <p className="text-[#00df9a] font-bold text-xl mt-4">
                        Get in touch with our team
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="bg-white rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold">Address</h4>
                                <p className="text-gray-600">123 Finance Street, NY 10001</p>
                            </div>
                            <div>
                                <h4 className="font-bold">Email</h4>
                                <p className="text-gray-600">contact@dfinance.com</p>
                            </div>
                            <div>
                                <h4 className="font-bold">Phone</h4>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                            </div>
                            <div>
                                <h4 className="font-bold">Hours</h4>
                                <p className="text-gray-600">Monday - Friday: 9am - 5pm EST</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <Button
                                text="Send Message"
                                bgColor="#00df9a"
                                textColor="black"
                                theme="primary"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact