import React from "react";
import TeamMember from "./TeamMember";

export default function Team({ teamData, setProfile }) {
  return (
    <>
      <div className="team-textbox">
        <h2 className="heading-secondary">Meet Our Team</h2>
        <p className="team-subtext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          distinctio! Mollitia nobis ullam sequi rem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div className="team-grid">
        {teamData.map((member, i) => (
          <TeamMember
            key={i}
            member={member}
            index={i}
            setProfile={setProfile}
          />
        ))}
      </div>
    </>
  );
}
