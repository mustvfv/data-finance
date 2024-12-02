import React from "react";

const About = () => {
    return (
        <div className="w-full py-32 px-4">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center">
                    <h2 className="text-5xl font-bold text-white">About Us</h2>
                    <p className="text-[#00df9a] font-bold text-xl mt-4">
                        Our Story & Mission
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus quia explicabo nemo assumenda...
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus quia explicabo nemo assumenda...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;