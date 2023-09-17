import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Test from "./components/Test";
import Booking from "./components/Booking";

const Home = () => {
   return (
      <div>
         <Hero />
         <Services />
         <About />
         <Test />
         <Booking />
      </div>
   );
};

export default Home;
