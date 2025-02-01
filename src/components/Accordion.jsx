import React, { useState } from "react";
import Question from "./Question";

const accordionData = [
  {
    question: "What is the role of an attorney in legal matters?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates culpa provident est at ullam! Dignissimos fugiat nesciunt perspiciatis aperiam illo fuga molestiae omnis natus molestias iure, in facilis nam sunt!",
  },
  {
    question: "How can i find the right attorney for my case?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis",
  },
  {
    question:
      "How can i protect my assets for the future with estate planning?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis",
  },
  {
    question: "What are the different types of legal specialties?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis",
  },
  {
    question: "How does the repair process work, and what should I expect?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis",
  },
];

export default function Accordion() {
  const [open, setOpen] = useState(null);

  return (
    <div className="container margin-btm-lg" id="accordion">
      <h2 className="heading-secondary faqs-title">
        Understanding Your Rights
        <br />
        Common Legal Questions Answered
      </h2>
      {accordionData.map((faq, i) => (
        <Question
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
          index={i}
          currentlyOpen={i === open ? true : false}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
}
