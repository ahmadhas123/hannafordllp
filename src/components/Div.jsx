import React from "react";

export default function Div({ children, className, background = null }) {
  return (
    <div
      style={
        background && {
          backgroundImage: `linear-gradient(to bottom, #0b112500, 60%, #0b1125),url(${background})`,
        }
      }
      className={className}
    >
      {children}
    </div>
  );
}
