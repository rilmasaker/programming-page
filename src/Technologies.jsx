import { isMobile } from "react-device-detect";
import React, { useEffect, useState } from "react";
import MotionHoc from "./MotionHOC";

const Technologies = () => {
  const [_isMobile, setMobile] = useState();
  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <h2 className="react">React</h2>
            <h4 className="react">
              is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components.
            </h4>
          </div>
        </div>
        <div className="face face2"></div>
      </div>

      <div className="card">
        <div className="face face1">
          <div className="content">
            <h2 className="javascript">JavaScript</h2>
            <h4 className="javascript">
              JavaScript is a dynamic programming language that's used for web
              development, in web applications, for game development, and lots
              more. It allows you to implement dynamic features on web pages
              that cannot be done with only HTML and CSS.
            </h4>
          </div>
        </div>
        <div className="face face2"></div>
      </div>

      <div className="card">
        <div className="face face1">
          <div className="content">
            <h2 className="html">HTML / CSS</h2>
            <h4 className="html">
              HTML (the Hypertext Markup Language) and CSS (Cascading Style
              Sheets) are two of the core technologies for building Web pages.
              HTML provides the structure of the page, CSS the (visual and
              aural) layout, for a variety of devices.
              {_isMobile
                ? ""
                : "Along with graphics and scripting, HTML and CSS are the basis of building Web pages and Web Applications"}
            </h4>
          </div>
        </div>
        <div className="face face2"></div>
      </div>
    </div>
  );
};

export default MotionHoc(Technologies, "tech");
