import React from "react";

export default function Question({
  question,
  answer,
  index,
  currentlyOpen,
  setOpen,
}) {
  const styles = currentlyOpen
    ? {
        backgroundColor: "#add7fc33",
        paddingLeft: "4rem",
        paddingRight: "4rem",
        paddingBottom: "4rem",
        marginLeft: "-4rem",
        marginRight: "-4rem",
        border: "none",
      }
    : {};

  function handleClick() {
    currentlyOpen ? setOpen(null) : setOpen(index);
  }

  return (
    <div style={styles} className="faq" onClick={handleClick}>
      <div className="question-box">
        <p className="question">{question}</p>
        <button className="btn">
          {currentlyOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </button>
      </div>
      {currentlyOpen && <p className="small-text">{answer}</p>}
    </div>
  );
}
