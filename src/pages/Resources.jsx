import React from "react";
import Button from "../components/Button";

const Resources = () => {
    const resources = [
        {
            category: "Guides",
            items: [
                { title: "Getting Started with DFinance", type: "PDF" },
                { title: "Advanced Analytics Guide", type: "PDF" },
                { title: "Security Best Practices", type: "PDF" },
            ],
        },
        {
            category: "Videos",
            items: [
                { title: "Platform Tutorial", type: "Video" },
                { title: "Feature Walkthrough", type: "Video" },
                { title: "Case Studies", type: "Video" },
            ],
        },
        {
            category: "Documentation",
            items: [
                { title: "API Documentation", type: "Doc" },
                { title: "Integration Guide", type: "Doc" },
                { title: "Technical Specifications", type: "Doc" },
            ],
        },
    ];

    return (
        <div className="w-full py-32 px-4">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white">Resources</h2>
                    <p className="text-[#00df9a] font-bold text-xl mt-4">
                        Everything you need to succeed
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {resources.map((section, index) => (
                        <div key={index} className="bg-white rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-6">{section.category}</h3>
                            <div className="space-y-4">
                                {section.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                                    >
                                        <h4 className="font-bold mb-2">{item.title}</h4>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-500">{item.type}</span>
                                            <Button
                                                text="Download"
                                                bgColor="#00df9a"
                                                textColor="black"
                                                theme="primary"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;