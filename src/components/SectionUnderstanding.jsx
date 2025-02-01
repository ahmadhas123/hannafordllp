import React from "react";
import Article from "./Article";
import plane from "../img/plane.jpg";
import ship1 from "../img/ship1.jpg";
import ship2 from "../img/ship2.jpeg";
import hammer from "../img/hammer.jpg";
import signing from "../img/signing.jpg";

export default function SectionUnderstanding() {
  return (
    <div className="container" id="section-news">
      <div className="grid grid-2--cols">
        <h2 className="heading-secondary margin-btm heading-understanding">
          Legal news and updates in maritime affairs
        </h2>
      </div>
      <div className="grid grid-2--cols margin-btm">
        <Article image={ship1} title="Understanding What is Legal Law?" />
        <Article
          image={ship2}
          title="Understanding the Basics of Contract Law"
        />
      </div>
      <div className="grid grid-3--cols margin-btm-lg">
        <Article image={plane} title="The Role of a Lawyer..." />
        <Article image={hammer} title="Types of Legal Systems..." />
        <Article image={signing} title="Types of Legal Systems..." />
      </div>
    </div>
  );
}
