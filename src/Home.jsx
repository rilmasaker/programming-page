import React from "react";
import MotionHoc from "./MotionHOC";

const Home = () => {
  return (
    <div className="m">
      <h1 className="shining-text title">
        <span className="green">Free programming school</span> for charities and
        orphanages in emerging countries
      </h1>
      <br />
      <h3 className="shining-text">
        If you have a group of young people of student age and you want to take
        care of their future but you do not have the resources to do so,
      </h3>
      <h3 className="shining-text">
        {" "}
        This course may be a <span className="green">solution</span> for you
      </h3>
      <h3 className="shining-text">
        Everything at school is <span className="green">100% free</span>. I
        provide computers and know how.
      </h3>
      <h3 className="shining-text">
        The training requires 4 to 6 months. Minimum 2h per day.
      </h3>
      <h3 className="shining-text">
        After the course, students will be ready to work as a{" "}
        <span className="green">Junior Frontend developer</span> in Javascript,
        HTML and CSS and React.js technologies.
      </h3>
    </div>
  );
};

export default MotionHoc(Home);
