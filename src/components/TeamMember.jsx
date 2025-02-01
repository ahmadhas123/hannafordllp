import React from "react";
import linkedin from "../img/linkedin2.svg";
import { Link } from "react-router-dom";

export default function TeamMember({ member, index, setProfile }) {
  return (
    <div>
      <div className="team-member">
        <Link to="/profile">
          <img
            src={member.img}
            alt={member.name}
            className="member-img"
            onClick={() => setProfile(index)}
          />
        </Link>
      </div>
      <div className="member-box">
        <Link to="/profile">
          <h3 className="member-name" onClick={() => setProfile(index)}>
            {member.name.split(" ")[0]}
          </h3>
        </Link>
        <p className="member-intro">{member.intro}</p>
        <a href="#">
          <img src={linkedin} alt="LinkedinIn link" className="linkedin-logo" />
        </a>
      </div>
    </div>
  );
}
