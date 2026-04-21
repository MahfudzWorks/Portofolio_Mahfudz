// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function FloatingBackground() {
  const circles = [
    "bg-blue-500 blur-3xl opacity-90 w-36 h-36",
    "bg-red-500 blur-2xl opacity-90 w-32 h-32",
    "bg-yellow-400 blur-2xl opacity-90 w-28 h-28",
    "bg-green-900 blur-xl opacity-90 w-24 h-24",
    "bg-blue-400 blur-lg opacity-40 w-20 h-20",
    "bg-red-500 blur-2xl opacity-40 w-32 h-32",
    "bg-yellow-400 blur-2xl opacity-40 w-28 h-28",
    "bg-green-500 blur-xl opacity-40 w-24 h-24",
  ];

  const [positions, setPositions] = useState(
    Array(circles.length).fill({ x: 0, y: 0 })
  );

  const randomPosition = () => ({
    x: Math.floor(Math.random() * 150) - 75,
    y: Math.floor(Math.random() * 150) - 75,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) => prev.map(() => randomPosition()));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute -inset-32 -z-10 overflow-hidden">
      {circles.map((style, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${style}`}
          animate={positions[i]}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
          style={{
            top: `${20 + i * 10}%`,
            left: `50%`,
            translateX: "-50%",
          }}
        />
      ))}
    </div>
  );
}

export default FloatingBackground;
