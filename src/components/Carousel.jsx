import React from "react";
import { useState } from "react";
import CarouselItem from "./CarouselItem";

export default function Carousel({ member }) {
  const [active, setActive] = useState(0);

  return (
    <div className="profile-textbox">
      <h2 className="profile-name">{member.name}</h2>
      <p className="profile-description">{member.intro}</p>

      <div className="carousel">
        {member.details?.map((_, i) => (
          <CarouselItem
            index={i}
            active={active}
            setActive={setActive}
            key={i}
          />
        ))}
      </div>

      <p className="details">{member.details?.at(active)}</p>
    </div>
  );
}
