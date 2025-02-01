import React from "react";

export default function Article({ image, title }) {
  return (
    <div>
      <img src={image} alt={title} className="article-image" />
      <div className="article-textbox">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
          className="icon-md"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
        <div className="article-text">
          <h4 className="heading-fourth">{title}</h4>
          <p className="small-text">Lorem ipsum skibidi doo doo</p>
        </div>
      </div>
    </div>
  );
}
