import React from "react";
import image from "../assets/head.png";
import image1 from "../assets/glass.png";
import image2 from "../assets/stats.png";
import image3 from "../assets/ticket.png";
import image4 from "../assets/question.png";
import image5 from "../assets/logo.png";
import image6 from "../assets/lanes.png";

const NavBarCom= () => {
  return (
    <div className="n-div">
      <img src={image6} alt="head"/>
      <img src={image5} alt="head"/>
        <img src={image} alt="head"/>
        <img src={image1} alt="head"/>
        <img src={image2} alt="head"/>
        <img src={image3} alt="head"/>
        <img src={image4} alt="head"/>
    </div>
  );
};

export default NavBarCom;
