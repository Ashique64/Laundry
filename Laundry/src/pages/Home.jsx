import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import HowItWork from "../components/HowItWork/HowItWork";

const Home = () => {
    return (
        <>
            <Hero />
            <About/>
            <Service/>
            <HowItWork/>
        </>
    );
};

export default Home;
