import React from "react";
import Article from "./Article";
import ship1 from "../img/ship1.jpg";
import ship2 from "../img/ship2.jpeg";

export default function Insights() {
  return (
    <div className="container">
      <div className="grid grid-2--cols margin-btm-lg">
        <Article image={ship1} title="Understanding What is Legal Law?" />
        <Article
          image={ship2}
          title="Understanding the Basics of Contract Law"
        />
      </div>
    </div>
  );
}
