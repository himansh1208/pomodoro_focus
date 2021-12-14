import React from "react";
import { Link } from "react-router-dom";

const TabBox = ({ color, setActiveTab, setTimer }) => {
  
  const tabOne = () => {
    setActiveTab("pomodoro");
    setTimer(1500);
  };
  const tabTwo = () => {
    setActiveTab("short-break");
    setTimer(300);
  };

  const tabThree = () => {
    setActiveTab("long-break");
    setTimer(900);
  };

  return (
    <div className="tabbable">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item ">
          <Link
            to=""
            style={{ color }}
            className="nav-link active  "
            data-toggle="tab"
            onClick={() => tabOne()}
          >
            Pomodoro
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to=""
            style={{ color }}
            className="nav-link "
            data-toggle="tab"
            onClick={() => tabTwo()}
          >
            Short Break
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to=""
            style={{ color }}
            className="nav-link "
            data-toggle="tab"
            onClick={() => tabThree()}
          >
            Long Break
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TabBox;
