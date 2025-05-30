import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const glowColors = ['#ff9a9e', '#fad0c4', '#a1c4fd', '#c2e9fb', '#d4fc79'];

export default function AnimatedSection() {
  const [currentGlowColor, setCurrentGlowColor] = useState(glowColors[0]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGlowColor(glowColors[Math.floor(Math.random() * glowColors.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="bg-zinc-900 rounded-xl p-8 mt-10 mx-auto max-w-2xl text-center border-2 border-transparent"
      animate={{
        y: [0, -5, 0],
        rotate: [-1, 1, -1],
        boxShadow: [`0 0 20px ${currentGlowColor}`, `0 0 30px ${currentGlowColor}`],
      }}
      whileHover={{
        scale: 1.02,
        borderColor: "#a855f7", // purple-500
        boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.3)"
      }}
      transition={{
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        boxShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" },
        borderColor: { duration: 0.3 }
      }}
    >
      <motion.p
        className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 text-2xl font-bold italic"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        Code, Fail, Learn, Repeat – The only cycle that truly matters.
      </motion.p>
    </motion.section>
  );
}