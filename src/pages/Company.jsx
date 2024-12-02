import React from "react";
import { FaUsers, FaChartLine, FaBullseye, FaHandshake } from "react-icons/fa";

const Company = () => {
    const stats = [
        { icon: <FaUsers />, number: "500+", label: "Clients Worldwide" },
        { icon: <FaChartLine />, number: "95%", label: "Growth Rate" },
        { icon: <FaBullseye />, number: "10+", label: "Years Experience" },
        { icon: <FaHandshake />, number: "24/7", label: "Support" },
    ];

    return (
        <div className="w-full py-32 px-4">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white">Our Company</h2>
                    <p className="text-[#00df9a] font-bold text-xl mt-4">
                        Leading The Financial Revolution
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 text-center">
                            <div className="text-[#00df9a] text-3xl mb-4 flex justify-center">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Company Values */}
                <div className="bg-white rounded-lg p-8 mb-16">
                    <h3 className="text-2xl font-bold mb-6">Our Values</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border-l-4 border-[#00df9a] pl-4">
                            <h4 className="font-bold mb-2">Innovation</h4>
                            <p className="text-gray-600">
                                Pushing boundaries in financial technology and services
                            </p>
                        </div>
                        <div className="border-l-4 border-[#00df9a] pl-4">
                            <h4 className="font-bold mb-2">Integrity</h4>
                            <p className="text-gray-600">
                                Maintaining the highest standards of trust and transparency
                            </p>
                        </div>
                        <div className="border-l-4 border-[#00df9a] pl-4">
                            <h4 className="font-bold mb-2">Impact</h4>
                            <p className="text-gray-600">
                                Creating meaningful change in the financial industry
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;