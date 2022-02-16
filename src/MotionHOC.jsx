import { AnimatePresence, motion } from "framer-motion";

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
  damping: 11,
  ease: "anticipate",
  duration: 2.5,
};

const pageStyle = {
  position: "absolute",
};

const MotionHoc = (Component) => {
  const AnimatedComponent = () => (
    <motion.div
      style={pageStyle}
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
