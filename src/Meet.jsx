import React from "react";
import MotionHoc from "./MotionHOC";

const Meet = () => {
  return (
    <div className="m">
      <h1 className="shining-text title">
        <span className="green">marcin.wydra.dev@gmail.com</span>
      </h1>
      <br />
      <h3 className="shining-text">
        Write to me. We will try to find a convenient date together so that I
        can come to your country to do the training.
      </h3>
      <h3 className="shining-text">
        Alternatively, it is also possible to do online training
      </h3>
      <br />
      <br />
      <h3 className="shining-text">
        <span className="green">
          {" "}
          I got a life for free, I got a second life for free, I got education
          for free, I want to help for free.{" "}
        </span>
      </h3>
      <h3 className="shining-text">
        <span className="green">
          {" "}
          <i>Freely you have received, freely give.</i>
        </span>
      </h3>
    </div>
  );
};

export default MotionHoc(Meet, "meet");
