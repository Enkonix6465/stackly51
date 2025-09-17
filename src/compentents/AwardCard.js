import React from "react";
import { motion } from "framer-motion";

const AwardCard = ({ award, isActive, onHover, onLeave }) => {
  return (
    <motion.div
      className={`rounded-xl shadow-lg p-6 bg-white dark:bg-[#181818] border-2 transition-all duration-300 ${isActive ? "border-[#25be85]" : "border-transparent"}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-[#25be85] mb-2">{award.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">{award.year} &mdash; {award.category}</p>
      <p className="text-gray-700 dark:text-gray-200 mb-2">{award.description}</p>
      <p className="text-xs text-gray-400 dark:text-gray-400 mb-2">Presented by: {award.presentedBy}</p>
      {isActive && (
        <div className="mt-2 p-2 bg-[#e6fff5] dark:bg-[#222] rounded text-[#25be85] text-sm">
          {award.hoverDescription}
        </div>
      )}
    </motion.div>
  );
};

export default AwardCard;
