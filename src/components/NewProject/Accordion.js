import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Accordion({ data, setActive, active }) {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    setHidden(!hidden);
  };
  return (
    <div className="flex justify-around items-start w-auto p-5 mb-5 ">
      <motion.div
        transition={{ type: "spring", stiffness: 100, duration: 1 }}
        className={`w-[150px] p-5 border-solid border-[#015668] border-l-2 border-t-2 ${
          data.id === active ? "bg-[#015668]" : ""
        }`}
      >
        <img
          onClick={() => setActive(data.id)}
          className="rounded-full mr-5"
          src={data.images[0]}
          alt="project img"
        />
      </motion.div>
      <motion.div
        transition={{ type: "spring", stiffness: 100, duration: 1 }}
        className="w-1/2 flex justify-center items-center flex-col border-solid border-[#015668] border-b-2 border-r-2 p-5"
      >
        <div className="pt-5 flex justify-between items-center">
          <span>{data.brief}</span>
          <button onClick={handleClick}>
            <FontAwesomeIcon className="w-4 ml-8" icon={faCaretDown} />
          </button>
        </div>
        <p className={`p-3 ${hidden ? "hidden" : ""}`}>{data.desc}</p>
      </motion.div>
    </div>
  );
}
