import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "100vh",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "spring",
  damping: 21,
  ease: "anticipate",
  duration: 2.5,
};

const MotionHoc = (Component, className) => {
  const AnimatedComponent = () => (
    <motion.div
      className={`motion ${className}`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Component />
    </motion.div>
  );
  return AnimatedComponent;
};

export default MotionHoc;
