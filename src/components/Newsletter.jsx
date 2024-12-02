import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <div className="bg-gray-900 w-full py-20 text-white">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join our newsletter for exclusive tips, industry insights, and optimization strategies delivered straight to your inbox.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              className="flex-1 px-6 py-3 h-[44px] rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
              type="email"
              placeholder="your@email.com"
            />
            <Button
              text="Subscribe Now"
              bgColor="#00df9a"
              textColor="black"
              className="whitespace-nowrap"
            />
          </div>

          <p className="text-sm text-gray-400 text-center mt-4">
            By subscribing, you agree to our{" "}
            <a href="/privacy" className="text-[#00df9a] hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-[#00df9a] hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
