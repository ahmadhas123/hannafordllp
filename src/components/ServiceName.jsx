import React from "react";

export default function ServiceName({ pageName }) {
  return (
    <div className="service">
      <h2 className="service-heading">Service</h2>
      <h1 className="page-heading">{pageName}</h1>
    </div>
  );
}
