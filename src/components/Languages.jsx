import React from "react";

export default function Languages({ languages, name }) {
  return (
    <div className="tab tab-grid">
      <h2 className="heading-secondary">
        {name} -<br />
        Languages
      </h2>
      <ul className="tab-list">
        {languages?.map((entry) => (
          <li className="entry" key={entry}>
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
}
