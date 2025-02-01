import React from "react";

export default function ProBono({ probonos, name }) {
  return (
    <div className="tab tab-grid">
      <h2 className="heading-secondary">
        {name} -<br />
        Pro Bono
      </h2>
      <ul className="tab-list">
        {probonos?.map((entry) => (
          <li className="list-entry" key={entry}>
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
}
