import React from "react";

export default function Awards({ awards }) {
  return (
    <div className="tab">
      <ul className="tab-list awards-list">
        {awards?.map((award) => (
          <li className="list-entry" key={award}>
            {award}
          </li>
        ))}
      </ul>
    </div>
  );
}
