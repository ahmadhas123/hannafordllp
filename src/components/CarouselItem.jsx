import React from "react";

export default function CarouselItem({ index, active, setActive }) {
  const isActive = index === active;
  const styles = isActive
    ? { backgroundColor: "#fff" }
    : { backgroundColor: "rgb(74, 74, 74)" };
  return (
    <>
      <button
        style={styles}
        className="btn-carousel"
        onClick={() => setActive(index)}
      ></button>
    </>
  );
}
