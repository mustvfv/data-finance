import React from 'react'

const Features = () => {
    return (
        <div className="relative z-10">
            <div className="w-full py-16 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700"
                        >
                            <div className="text-[#00df9a] text-3xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features

// Features data
const features = [
    {
        icon: "🚀",
        title: "Fast Transactions",
        description: "Lightning-fast processing with advanced blockchain technology"
    },
    {
        icon: "🔒",
        title: "Secure Platform",
        description: "Enterprise-grade security for your peace of mind"
    },
    {
        icon: "💡",
        title: "Smart Analytics",
        description: "AI-powered insights to optimize your investments"
    }
];