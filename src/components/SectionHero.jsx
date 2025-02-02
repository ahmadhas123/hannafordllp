import React from "react";
import { Link } from "react-router-dom";

export default function SectionHero() {
  return (
    <div>
      <div className="container section-hero">
        <h1 className="heading-primary heading-hero">
          Specialized assets law firm based in the heart of the city of London
        </h1>
        <Link to="/services/shipbuilding" className="link">
          Discover our services
        </Link>
      </div>
      <p className="text-hero">
        <button className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5"
            className="icon"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </p>
    </div>
  );
}
