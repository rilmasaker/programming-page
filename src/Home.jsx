import React from "react";
import MotionHoc from "./MotionHOC";

const Home = () => {
  return <h1 className="shining-text">A lot of text for lorem impsum</h1>;
};

export default MotionHoc(Home);
