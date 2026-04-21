// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function CenterBlurBackgroundV2({ size = 150, blur = 100, opacity = 0.5 }) {
  return (
    <div className="absolute inset-0 -z-10 flex justify-center items-center overflow-hidden">
      <motion.div
        className={`rounded-full`}
        style={{
          width: size,
          height: size,
          filter: `blur(${blur}px)`,
          opacity: opacity,
        }}
        animate={{
          scale: [1, 1.2, 1],
          background: [
            "radial-gradient(circle, #4285F4, #DB4437, #F4B400, #0F9D58)",
            "radial-gradient(circle, #DB4437, #F4B400, #0F9D58, #4285F4)",
            "radial-gradient(circle, #F4B400, #0F9D58, #4285F4, #DB4437)",
            "radial-gradient(circle, #0F9D58, #4285F4, #DB4437, #F4B400)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default CenterBlurBackgroundV2;
