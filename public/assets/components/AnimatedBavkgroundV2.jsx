// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function AnimatedBackgroundV2() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-72 h-72 bg-blue-700 rounded-full filter blur-3xl opacity-30"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "15%" }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-30"
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 90, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "40%", left: "50%" }}
      />

      <motion.div
        className="absolute w-64 h-64 bg-green-600 rounded-full filter blur-3xl opacity-30"
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -60, 60, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "10%", left: "30%" }}
      />
    </div>
  );
}

export default AnimatedBackgroundV2;
