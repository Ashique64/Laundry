import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import HowItWork from "../components/HowItWork/HowItWork";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Service />
            <HowItWork />
        </>
    );
};

export default Home;
