import React from "react";
import Review from "./Review";

export default function Testimonials() {
  return (
    <div className="container grid grid-3--cols margin-btm-lg">
      <h2 className="heading-secondary heading-reviews">
        Client Reviews and Success Stories
      </h2>
      <Review name="Fernando Luiz" />
      <Review name="Bernandha Annie" />
    </div>
  );
}
