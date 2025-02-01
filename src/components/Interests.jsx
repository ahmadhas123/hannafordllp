import React from "react";

export default function Interests({ interests, name }) {
  return (
    <div className="tab tab-grid">
      <h2 className="heading-secondary">
        {name} -<br />
        Interests
      </h2>
      <ul className="tab-list">
        <li className="entry interests-category">Maritime Interests:</li>
        <li className="entry">{interests?.at(0)}</li>
        <li className="entry">{interests?.at(1)}</li>
        <li className="entry interests-category">
          Hobbies and Personal Interests:
        </li>
        <li className="entry">{interests?.at(2)}</li>
      </ul>
    </div>
  );
}
