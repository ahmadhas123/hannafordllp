import React from "react";
import { Link } from "react-router-dom";

export default function SectionCTA() {
  return (
    <div className="section-cta" id="consultancy">
      <h2 className="heading-secondary heading-cta">
        Reserve your time with our skilled lawyers to discuss
      </h2>
      <Link to="/contactus" className="link">
        Book an appointment
      </Link>
    </div>
  );
}
