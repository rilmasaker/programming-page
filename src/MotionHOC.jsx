import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

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


  const AnimatedComponent = () => {
    const [_isMobile, setMobile] = useState();

    useEffect(() => {
        setMobile(isMobile);
    }, [setMobile]);
    return _isMobile ? (
      <div className={`motion ${className}`}>
        <Component />
      </div>
    ) : (
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
  };

  return AnimatedComponent;
};

export default MotionHoc;
