import React from "react";
import { Link } from "react-router-dom";

const TabBox = () => {
  return (
    <div className="tabbable">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <Link to="" className="nav-link active" data-toggle="tab">
            Pomodoro
          </Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link" data-toggle="tab">
            Short Break
          </Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link" data-toggle="tab">
            Long Break
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TabBox;
