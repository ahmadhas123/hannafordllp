import React from "react";

export default function Academic({ academic, name }) {
  return (
    <div className="tab tab-grid">
      <h2 className="heading-secondary">
        {name} -<br />
        Academic
      </h2>
      <ul className="tab-list">
        {academic?.map((entry) => (
          <li className="list-entry" key={entry}>
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
}
