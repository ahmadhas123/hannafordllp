import React from "react";

export default function Benefit({ title, subtext, icon }) {
  return (
    <div className="benefit">
      <div className="icon-lg">{icon}</div>
      <div className="benefit-textbox">
        <h3 className="benefit-title">{title}</h3>
        <p className="benefit-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <p className="benefit-subtext">{subtext}</p>
    </div>
  );
}
