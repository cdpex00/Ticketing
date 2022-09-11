import React from "react";
import image from "../assets/lanes.png";
import image1 from "../assets/logo.png";
import image2 from "../assets/head.png";
import image3 from "../assets/glass.png";
import image4 from "../assets/stats.png";
import image5 from "../assets/ticket.png";
import image6 from "../assets/question.png";

const NavBarCom = () => {
  return (
    <div className="n-div">
      <div>
        <img src={image} alt="dots" />
      </div>
      <div>
        <img src={image1} alt="logo" />
      </div>
      <div>
        <img src={image2} alt="head" />
      </div>
      <div>
        <img src={image3} alt="glass" />
      </div>
      <div>
        <img src={image4} alt="stats" />
      </div>
      <div>
        <img src={image5} alt="question" />
      </div>
      <div>
        <img src={image6} alt="head" />
      </div>
    </div>
  );
};

export default NavBarCom;
