import React from "react";
import logo from "../img/logo.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container">
      <div className="footer">
        <div className="footer-row">
          <img src={logo} />
          <p className="small-text">sum lorem ipsum connoisseur</p>
        </div>
        <div className="footer-row services">
          <h5>Services</h5>
          <Link to="/services/shipbuilding">Shipbuilding</Link>
          <Link to="/services/refit">Refit, Repair & Construction</Link>
          <Link to="/services/sale">Sale & Purchase</Link>
          <Link to="/services/ship">Ship Finance</Link>
          <Link to="/services/superyatchs">Superyatchs</Link>
          <Link to="/services/structuring">Structuring & Restructuring</Link>
          <Link to="/services/aviation">Aviation</Link>
          <Link to="/services/operations">Operations</Link>
          <Link to="/services/management">Management & Employment</Link>
          <Link to="/services/dispute">Dispute Resolution</Link>
        </div>
        <div className="footer-row">
          <h5>About Us</h5>
          <HashLink smooth to="/#history">
            Our History
          </HashLink>
          <Link to="/teampage">Our Team</Link>
          <HashLink smooth to="/#accordion">
            Blog
          </HashLink>
          <Link to="/contactus">Careers</Link>
        </div>
        <div className="footer-row">
          <h5>Law</h5>
          <HashLink smooth to="/#expertise">
            Expertise & Approach
          </HashLink>
          <HashLink smooth to="/#benefits">
            Corporate Social Responsibility
          </HashLink>
          <HashLink smooth to="/#consultancy">
            Consultancy
          </HashLink>
          <HashLink smooth to="/#section-news">
            News, Publications & Awards
          </HashLink>
        </div>
        <div className="footer-row footer-contactus">
          <h5>Contact Us</h5>
          <div className="contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <p className="small-text">0312 3456789</p>
          </div>
          <div className="contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="small-text">6th floor hilly billy residence texas</p>
          </div>
          <div className="contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <p className="small-text">blehbleh123@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="copyright-textbox">
        <p className="small-text">
          Copyright 2024 @ Hannaford Turner all rights reserved
        </p>
        <div className="tnc-texbox">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}
