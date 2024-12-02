import React from "react";
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Newsletter from "../components/Newsletter";
import CardsContainer from "../components/CardsContainer";
import Features from "../components/Features";

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Analytics />
            <Newsletter />
            <CardsContainer />
        </>
    );
};

export default Home;