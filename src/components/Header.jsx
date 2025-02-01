import React from "react";
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header>
      <nav className="header container">
        <Link to="/">
          <img src={logo} />
        </Link>
        <button
          className="btn btn-mobile-open"
          onClick={() => setMobileNavOpen(true)}
        >
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <ul className="navbar">
          <li className="search">
            <button
              className="btn"
              onClick={() => setSearchOpen((isOpen) => !isOpen)}
            >
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <form style={searchOpen ? {} : { display: "none" }}>
              <input
                type="text"
                placeholder="Search for Name, Article etc"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
              />
            </form>
          </li>
          <li>
            <NavLink to="/services/shipbuilding">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/teampage">Our Team</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
        </ul>
      </nav>
      <nav
        className="mobile-nav"
        style={mobileNavOpen ? {} : { display: "none" }}
      >
        <button
          className="btn btn-mobile-close"
          onClick={() => setMobileNavOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            className="icon-mobile-nav"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Link to="/">
          <img src={logo} />
        </Link>
        <form>
          <div className="mobile-search">
            <label for="search">
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search for Name, Article etc"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mobile-search-bar"
            />
          </div>
        </form>
        <ul>
          <li>
            <NavLink to="/services/shipbuilding">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/teampage">Our Team</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
