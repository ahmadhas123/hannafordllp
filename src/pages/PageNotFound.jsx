import React from "react";
import panic from "../img/panic.gif";

export default function PageNotFound() {
  return (
    <div className="not-found">
      <h1 className="heading-primary">Page Not Found</h1>
      <img src={panic} />
    </div>
  );
}
