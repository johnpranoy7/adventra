"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const adventures = [
  { id: 1, name: "Scuba Diving", location: "Great Barrier Reef", image: "/scuba.jpg" },
  { id: 2, name: "Mountain Biking", location: "Rocky Mountains", image: "/biking.jpg" },
  { id: 3, name: "Safari", location: "Serengeti", image: "/safari.jpg" },
];

export default function AdventureSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const nextAdventure = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % adventures.length);
  };

  const prevAdventure = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? adventures.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-md mx-auto h-[500px] flex items-center justify-center overflow-hidden bg-black rounded-lg shadow-xl">
      <AnimatePresence custom={direction}>
        <motion.img
          key={adventures[currentIndex].id}
          src={adventures[currentIndex].image}
          alt={adventures[currentIndex].name}
          className="absolute w-full h-full object-cover rounded-lg"
          initial={{ x: direction * 300, opacity: 0 }} // Enter from the right/left
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -direction * 300, opacity: 0 }} // Exit to the left/right
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute bottom-4 flex justify-between w-full px-4">
        <button
          onClick={prevAdventure}
          className="bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg active:scale-90"
        >
          Pass
        </button>
        <button
          onClick={nextAdventure}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg active:scale-90"
        >
          Match
        </button>
      </div>
    </div>
  );
}