import { AnimatePresence, motion } from "framer-motion";

import { logo } from "../assets/assets";

import { useState } from "react";
import Button from "./Button";

const menuVars = {
   initial: {
      opacity: 0,
   },

   animate: {
      opacity: 1,
      transition: {
         duration: 1,
         staggerChildren: 0.35,
      },
   },

   exit: {
      opacity: 0,
      transition: {
         duration: 0.5, // Adjust the exit animation duration as needed
      },
   },
};

const navVars = {
   initial: {
      opacity: 0,
      // y: 50,
   },

   animate: {
      opacity: 1,
      // y: 0,
      transition: {
         duration: 0.5,
      },
   },

   exit: {
      opacity: 0,
      transition: {
         duration: 0.5, // Adjust the exit animation duration as needed
      },
   },
};

const Header = () => {
   const navs = [
      {
         title: "About",
         link: "#about",
      },

      {
         title: "Services",
         link: "#services",
      },

      {
         title: "Pricing",
         link: "#pricing",
      },

      {
         title: "Contact",
         link: "#contact",
      },
   ];

   const [isOpen, setIsOpen] = useState(false);

   const handleMenuOpen = () => {
      setIsOpen((prev) => !prev);
   };

   return (
      <AnimatePresence>
         {" "}
         {isOpen && ( // Render the motion component conditionally
            <motion.div
               key="menu" // Make sure to specify a unique key
               variants={menuVars}
               initial="initial"
               animate="animate"
               exit="exit"
               className="flex menu md:hidden flex-col items-center justify-center overflow-hidden bg-white fixed inset-0 w-full h-[70vh] "
            >
               {" "}
               {navs.map((nav, index) => {
                  return (
                     <motion.a
                        className="text-black hover:text-opacity-60 duration-200 text-lg overflow-hidden"
                        variants={navVars}
                        key={index}
                        href={nav.link}
                     >
                        {" "}
                        {nav.title}
                     </motion.a>
                  );
               })}
            </motion.div>
         )}
         <div className="flex w-full justify-between items-center my-20">
            {" "}
            <div>
               {" "}
               <img src={logo} alt="" />{" "}
            </div>{" "}
            <nav className="hidden md:flex gap-4">
               {" "}
               {navs.map((nav, index) => {
                  return (
                     <a href={nav.link} key={index}>
                        {" "}
                        {nav.title}
                     </a>
                  );
               })}
            </nav>{" "}
            <Button
               className="flex md:hidden z-40"
               style={{
                  color: isOpen ? "black" : "white",
               }}
               onClick={handleMenuOpen}
            >
               {" "}
               menu button{" "}
            </Button>{" "}
         </div>{" "}
      </AnimatePresence>
   );
};

export default Header;
