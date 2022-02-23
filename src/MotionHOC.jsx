import React from "react";
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
  class AnimatedComponent extends React.Component {
    static async getInitialProps(ctx) {
      let isMobileView = (
        ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent
      ).match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      );

      //Returning the isMobileView as a prop to the component for further use.
      return {
        isMobileView: Boolean(isMobileView),
      };
    }
    render() {
      return !this.props.isMobileView ? (
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
      ) : (
        <Component />
      );
    }
  }

  return AnimatedComponent;
};

export default MotionHoc;
