import React from "react";
import dude from "../img/dude.webp";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

export default function Review({ name }) {
  const [rating, setRating] = useState(5);
  function ratingChanged(newRating) {
    setRating(newRating);
  }

  return (
    <div className="review">
      <div className="reviewer-info">
        <img src={dude} alt="Person Reviewing" className="client-pic" />
        <div className="info-box">
          <p className="client-name">{name}</p>
          <p className="client-designation">Vice President</p>
        </div>
      </div>
      <p className="small-text">
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
        incidunt nobis dolores, consequatur reiciendis veniam reprehenderit ut
        magnam vero corporis praesentium sed, sit harum doloribus quae
        necessitatibus vel sapiente accusantium?"
      </p>

      <div className="rating-box">
        <ReactStars
          onChange={ratingChanged}
          count={5}
          size={24}
          emptyIcon={<i className="fa fa-star"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#add7fc"
        />
        <span className="rating-value">{rating}/5</span>
      </div>
    </div>
  );
}
