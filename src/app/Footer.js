import React from "react";
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'

const Footer = () => {
const { id } = useParams()
console.log("id is ", id)

  return (
    <div className="footer_sec">
    <div className="row align-items-center footer-row">
      <div className="col-md-7 p-0">
        <h6>© 2021 Pomodoro Focus. All rights reserved</h6>
      </div>
      <div className="col-md-5 p-0">
        <ul className="d-flex justify-content-end">
          <li className="nav-item">
            <Link to="/privacy" className="nav-link mr-3">
              Privacy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Footer;
