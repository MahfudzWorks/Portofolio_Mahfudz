// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ProjectCard({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50,
        scale: inView ? 1 : 0.9,
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="will-change-transform overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

export default ProjectCard;
