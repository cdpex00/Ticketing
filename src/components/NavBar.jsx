import React from "react";
import lanes from "../assets/menu/lanes.svg";
import logo from "../assets/menu/logo.svg";
import square from "../assets/menu/squares.svg";
import studies from "../assets/menu/studies.svg";
import glass from "../assets/menu/glass.svg";
import stats from "../assets/menu/stats.svg";
import ticket from "../assets/menu/ticket.svg";
import question from "../assets/menu/question.svg";
import "./NavBar.css";
import { Button } from "antd";

const NavBarCom = () => {
  return (
    <>
      <div className="content-menu">
        <div className="content-menu-up">
          <Button type="link">
            {" "}
            <img src={lanes} alt="lanes" />{" "}
          </Button>

          <Button type="link">
            <img src={logo} alt="logo" />
          </Button>
        </div>

        <div className="content-menu-down">
          <Button type="link">
            <img src={square} alt="square" />
          </Button>

          <Button type="link">
            <img src={studies} alt="studies" />
          </Button>

          <Button type="link">
            <img src={glass} alt="glass" />
          </Button>

          <Button type="link" className="stats-imagen">
            <img src={stats} alt="ticket" />
          </Button>

          <Button type="link">
            <img src={ticket} alt="ticket" />
          </Button>

          <Button type="link">
            <img src={question} alt="question" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavBarCom;
