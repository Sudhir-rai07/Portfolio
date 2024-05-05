import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = ({theme}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const templateParams = {
    from_name: username,
    from_email: email,
    to_name: "Sudhir",
    message: message,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_73rb818",
        "template_keb76fe",
        templateParams,
        "p6CgCBee1X_KOMAiv"
      )
      .then((response) => {
        console.log("Success", response.status, response.text);
        setUsername('')
        setEmail('')
        setMessage('')
        toast.success("Message sent successfully")
      })
      .catch((err) => console.log("Failed...", err));
  };

  return (
    <motion.div
      id="contact"
      className={`relative flex flex-col items-center justify-center w-full h-full mt-8 mb-8 text-black  transition-colors duration-200 ${theme? "bg-[#000510] text-white" : "bg-white text-black"}`}
    >
      <div className="mb-6 text-3xl font-semibold">
        <h2>
          Lets <span className="tracking-wider text-red-500">Connect...</span>
        </h2>
      </div>
      <Toaster />
      <div className="flex flex-col items-center justify-center w-full sm:flex-row sm:w-4/5 h-4/5">
        <form
          className="relative flex flex-col items-center justify-center w-full h-full sm:w-1/2"
          onSubmit={handleSubmit}
        >
          <div className="w-[90%] px-4">
            <label htmlFor="username" className="text-[14px] font-semibold">
              Name
            </label>
            <input
              autoComplete="off"
              type="text"
              placeholder=""
              id="username"
              required
              className="w-full px-2 py-3 mt-1 border border-gray-200/[0.9] outline-none rounded-lg text-sm focus:outline-none focus:shadow-[0px_0px_2px_1px_#fbb6ce] focus:border-[#f687b3] hover:shadow-[0px_0px_3px_1px_red] transition-all duration-200 text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-[90%] px-4 mt-2">
            <label htmlFor="email" className="text-[14px] font-semibold">
              Email
            </label>
            <input
              autoComplete="off"
              type="email"
              placeholder=""
              id="email"
              required
              className="w-full text-black px-2 py-3 mt-1 border border-gray-200/[0.9] outline-none rounded-lg text-sm focus:outline-none focus:shadow-[0px_0px_2px_1px_#fbb6ce] focus:border-[#f687b3] hover:shadow-[0px_0px_3px_1px_red] transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-[90%] px-4 mt-2">
            <div className="flex justify-between">
              <label htmlFor="message" className="text-[14px] font-semibold">
                Message
              </label>
            </div>
            <input
              autoComplete="off"
              type="text"
              placeholder=""
              id="message"
              required
              className="w-full px-2 py-3 mt-1 border border-gray-300/[0.6] outline-none rounded-lg text-sm focus:outline-none focus:shadow-[0px_0px_2px_1px_#fbb6ce] focus:border-[#f687b3]/[0.8] hover:shadow-[0px_0px_3px_1px_red] transition-all duration-200"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-[90%] ">
            <button
              type="submit"
              className="w-4/5 px-4 py-3 mt-10 text-red-500 bg-black border-2 border-gray-200 rounded-full"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
