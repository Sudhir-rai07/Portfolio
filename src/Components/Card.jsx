import { motion } from "framer-motion";

const Card = ({ url, title, description, tags, liveLink, github ,theme}) => {
  
  return (

      <motion.div
        className=""
      >
        <div className={`max-w-sm mt-8 overflow-hidden rounded shadow-sm ${theme ? "shadow-slate-100" : "shadow-slate-700 shadow-lg"}`}>
          <img className="w-full" src={url} alt={title} />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">{title}</div>
            <p className="text-base text-gray-500">{description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {tags &&
              tags.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1 mt-2 mr-2 text-sm font-semibold text-blue-600 bg-gray-300 rounded-full"
                >
                  #{item}
                </span>
              ))}
          </div>

          <div className="px-6 pt-1 pb-2">
            <a
              href={liveLink}
              target="_blank"
              className="inline-block px-4 py-2 mb-2 mr-2 text-sm font-semibold tracking-widest text-gray-800 transition-all duration-200 bg-green-400 rounded-full cursor-pointer hover:bg-black hover:text-red-600"
            >
              Live
            </a>
            <a
              href={github}
              target="_blank"
              className="inline-block px-4 py-2 mb-2 mr-2 text-sm font-semibold tracking-widest text-black transition-all duration-200 bg-red-400 rounded-full cursor-pointer hover:bg-red-600 hover:text-black"
            >
              Github
            </a>
          </div>
        </div>
      </motion.div>
   
  );
};

export default Card;
