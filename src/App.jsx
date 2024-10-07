import React, { useState } from "react";
import spider from "./image/spider.png";
import { motion } from "framer-motion";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const App = () => {
  const [isDark, setIsDark] = useState(true)
  return (
    <div className={`pt-5 sm:mt-0 relative flex flex-col items-center w-full h-full ${isDark? "bg-[#000510] text-gray-200" : "bg-white text-black"} transition-colors duration-200`}>
    <div className="fixed z-40 top-2 right-4">
      <button name="switch-theme" onClick={() => setIsDark(prev => !prev)} className="text-3xl">{isDark ? <MdLightMode className="text-white"/> : <MdDarkMode />}</button>
    </div>
      <div className="flex w-full h-full">
        <div className="hidden w-72 h-1/2 sm:block">
          <motion.img
            initial={{ y: -250, scale: 0.5 }}
            animate={{ y: -150, scale: 0.8 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            src={spider}
            alt=""
            className="object-cover w-full opacity-60"
          />
        </div>
        <div className="flex flex-col justify-center px-4 sm:ml-28">
          <div>
            <div>
              <h2 className="text-3xl">Sudhir Rai</h2>
            </div>
            <div className="sm:w-96 ">
              <h2 className="text-4xl font-semibold ">
                Web
                <span className="text-red-500 animate-typing"> Developer</span>
              </h2>
            </div>
          </div>

          <div className="mt-8 overflow-hidden sm:w-96">
            <p className="text-[18px]">
              Hi there I am{" "}
              <span className="tracking-wider text-red-500 font-Fira Sans Condensed">Sudhir</span>
              <span className="br"></span> I am a full stack{" "}
              <span className="tracking-wider text-red-500">Web Developer</span>
              . <br />
              <span className="text-xl font-semibold tracking-wider text-green-600 font-Briem-Hand">
                Rendering dreams on the Web.
              </span>
              <br />
              Specializing in creating responsive and dynamic web solutions that
              delight users and drive business success.
            </p>
          </div>

          <div className="mt-8">
            <button className="mr-8">
              <div href="#"
                className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-100 text-black inline-block"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-red-600 "><a href="#contact">Hire me</a></span>
              </div>
            </button>

            <button className="">
              <a
                href="#_"
                className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-red-50 text-red-600 inline-block"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
                <a href="/RESUME00.pdf" download={"resume.pdf"} className="relative group-hover:text-white">Download cv</a>
              </a>
            </button>
          </div>
        </div>
      </div>
      <hr className="h-[3px] rounded-lg sm:mt-0 mt-10 sm:w-4/5  w-[90%] border-none   bg-gray-600" />
      <Skills />
      <hr className="h-[3px] rounded-lg sm:mt-0 mt-10 sm:w-4/5  w-[90%] border-none   bg-gray-600" />
      <Projects theme={isDark}/>
      <hr className="h-[3px] rounded-lg sm:mt-0 mt-10 sm:w-4/5  w-[90%] border-none   bg-gray-600" />
      <Contact theme={isDark}/>
      <Footer />
    </div>
  );
};

export default App;
