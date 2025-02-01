import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import ContactUsPage from "../pages/ContactUsPage";
import LandingPage from "../pages/LandingPage";
import TeamPage from "../pages/TeamPage";
import ProfilePage from "../pages/ProfilePage";
import ServicesPage from "../pages/ServicesPage";
import NewsArticlePage from "../pages/NewsArticlePage";
import PageNotFound from "../pages/PageNotFound";

import emily from "../img/emily.png";
import cristian from "../img/cristian.png";
import mark from "../img/mark.png";
import stewart from "../img/stewart.png";

import containership from "../img/containership.jpeg";
import repair from "../img/repair.jpg";
import shipsale from "../img/shipsale.jpg";
import yatchsale from "../img/yatchsale.jpeg";
import yatch from "../img/yatch.jpeg";
import structuring from "../img/structuring.jpeg";
import aircraft from "../img/aircraft.jpg";
import yatchdesign from "../img/yatchdesign.jpg";
import employment from "../img/employment.jpg";
import dispute from "../img/dispute.webp";

const servicesData = [
  { name: "Shipbuilding", bg: containership },
  { name: "Refit Repair and Construction", bg: repair },
  { name: "Sale and Purchase", bg: shipsale },
  { name: "Ship Finance", bg: yatchsale },
  { name: "Superyatchs", bg: yatch },
  { name: "Structuring and Restructuring", bg: structuring },
  { name: "Aviation", bg: aircraft },
  { name: "Operations", bg: yatchdesign },
  { name: "Management and Employment", bg: employment },
  { name: "Dispute Resolution", bg: dispute },
];

const teamData = [
  {
    name: "Emily Rainey KC",
    intro: "Strong legal knowledge, experience, and cost-effectiveness",
    description:
      "lorem ipsum dum dum scooby dooby doo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates culpa provident est at ullam! Dignissimos fugiat nesciunt perspiciatis aperiam illo fuga molestiae omnis natus molestias iure, in facilis nam sunt!",
    img: emily,
    academic: [
      "Distinct in this that circa 1976 meow meow ugabuga",
      "BA first class honors ooga booga HMS",
    ],
    awards: [
      "Succesfully did this",
      "Learned how to spell sucessfuly",
      "Sucesfuly did that",
      "Did this and that in a slightly different environment an got another award",
    ],
    probonos: [
      "helped old lady cross the street",
      "fought for my sovereign right of being allowed to park on road",
    ],
    languages: [
      "Language Proficiency: Fluent in English and Spanglish",
      "Multilingual Team: Our firm comprises lawyers proficient in a variety of languages, including Siraiki, French, and Chinese, to assist clients with international maritime legal matters.",
    ],
    interests: [
      "Specializes in Admiralty Law, with a focus on collision and salvage cases.",
      "Expertise in Marine Insurance and has successfully handled numerous claims for international shipping companies.",
      "Enthusiastic sailor and member of the local Yacht Club. Passion for marine conservation and regularly volunteers for beach clean-up initiatives.",
    ],
    news: "no insights available",
    details: [
      "1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
    ],
  },
  {
    name: "Cristian A",
    intro: "Strong legal knowledge, experience, and cost-effectiveness",
    description:
      "lorem ipsum dum dum scooby dooby doo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates culpa provident est at ullam! Dignissimos fugiat nesciunt perspiciatis aperiam illo fuga molestiae omnis natus molestias iure, in facilis nam sunt!",
    img: cristian,
    academic: [
      "Distinct in this that circa 1976 meow meow ugabuga",
      "BA first class honors ooga booga HMS",
    ],
    awards: [
      "Succesfully did this",
      "Learned how to spell sucessfuly",
      "Sucesfuly did that",
      "Did this and that in a slightly different environment an got another award",
    ],
    probonos: [
      "helped old lady cross the street",
      "fought for my sovereign right of being allowed to park on road",
    ],
    languages: [
      "Language Proficiency: Fluent in English and Spanglish",
      "Multilingual Team: Our firm comprises lawyers proficient in a variety of languages, including Siraiki, French, and Chinese, to assist clients with international maritime legal matters.",
    ],
    interests: [
      "Specializes in Admiralty Law, with a focus on collision and salvage cases.",
      "Expertise in Marine Insurance and has successfully handled numerous claims for international shipping companies.",
      "Enthusiastic sailor and member of the local Yacht Club. Passion for marine conservation and regularly volunteers for beach clean-up initiatives.",
    ],
    news: "no insights available",
    details: [
      "1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
    ],
  },
  {
    name: "Mark A",
    intro: "Strong legal knowledge, experience, and cost-effectiveness",
    description:
      "lorem ipsum dum dum scooby dooby doo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates culpa provident est at ullam! Dignissimos fugiat nesciunt perspiciatis aperiam illo fuga molestiae omnis natus molestias iure, in facilis nam sunt!",
    img: mark,
    academic: [
      "Distinct in this that circa 1976 meow meow ugabuga",
      "BA first class honors ooga booga HMS",
    ],
    awards: [
      "Succesfully did this",
      "Learned how to spell sucessfuly",
      "Sucesfuly did that",
      "Did this and that in a slightly different environment an got another award",
    ],
    probonos: [
      "helped old lady cross the street",
      "fought for my sovereign right of being allowed to park on road",
    ],
    languages: [
      "Language Proficiency: Fluent in English and Spanglish",
      "Multilingual Team: Our firm comprises lawyers proficient in a variety of languages, including Siraiki, French, and Chinese, to assist clients with international maritime legal matters.",
    ],
    interests: [
      "Specializes in Admiralty Law, with a focus on collision and salvage cases.",
      "Expertise in Marine Insurance and has successfully handled numerous claims for international shipping companies.",
      "Enthusiastic sailor and member of the local Yacht Club. Passion for marine conservation and regularly volunteers for beach clean-up initiatives.",
    ],
    news: "no insights available",
    details: [
      "1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
    ],
  },
  {
    name: "Stewart A",
    intro: "Strong legal knowledge, experience, and cost-effectiveness",
    description:
      "lorem ipsum dum dum scooby dooby doo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates culpa provident est at ullam! Dignissimos fugiat nesciunt perspiciatis aperiam illo fuga molestiae omnis natus molestias iure, in facilis nam sunt!",
    img: stewart,
    academic: [
      "Distinct in this that circa 1976 meow meow ugabuga",
      "BA first class honors ooga booga HMS",
    ],
    awards: [
      "Succesfully did this",
      "Learned how to spell sucessfuly",
      "Sucesfuly did that",
      "Did this and that in a slightly different environment an got another award",
    ],
    probonos: [
      "helped old lady cross the street",
      "fought for my sovereign right of being allowed to park on road",
    ],
    languages: [
      "Language Proficiency: Fluent in English and Spanglish",
      "Multilingual Team: Our firm comprises lawyers proficient in a variety of languages, including Siraiki, French, and Chinese, to assist clients with international maritime legal matters.",
    ],
    interests: [
      "Specializes in Admiralty Law, with a focus on collision and salvage cases.",
      "Expertise in Marine Insurance and has successfully handled numerous claims for international shipping companies.",
      "Enthusiastic sailor and member of the local Yacht Club. Passion for marine conservation and regularly volunteers for beach clean-up initiatives.",
    ],
    news: "no insights available",
    details: [
      "1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
    ],
  },
  {
    name: "Emily B",
    intro: "Strong legal knowledge, experience, and cost-effectiveness",
    description:
      "lorem ipsum dum dum scooby dooby doo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates culpa provident est at ullam! Dignissimos fugiat nesciunt perspiciatis aperiam illo fuga molestiae omnis natus molestias iure, in facilis nam sunt!",
    img: emily,
    academic: [
      "Distinct in this that circa 1976 meow meow ugabuga",
      "BA first class honors ooga booga HMS",
    ],
    awards: [
      "Succesfully did this",
      "Learned how to spell sucessfuly",
      "Sucesfuly did that",
      "Did this and that in a slightly different environment an got another award",
    ],
    probonos: [
      "helped old lady cross the street",
      "fought for my sovereign right of being allowed to park on road",
    ],
    languages: [
      "Language Proficiency: Fluent in English and Spanglish",
      "Multilingual Team: Our firm comprises lawyers proficient in a variety of languages, including Siraiki, French, and Chinese, to assist clients with international maritime legal matters.",
    ],
    interests: [
      "Specializes in Admiralty Law, with a focus on collision and salvage cases.",
      "Expertise in Marine Insurance and has successfully handled numerous claims for international shipping companies.",
      "Enthusiastic sailor and member of the local Yacht Club. Passion for marine conservation and regularly volunteers for beach clean-up initiatives.",
    ],
    news: "no insights available",
    details: [
      "1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
    ],
  },
  {
    name: "Cristian B",
    intro: "Strong legal knowledge, experience, and cost-effectiveness",
    description:
      "lorem ipsum dum dum scooby dooby doo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates culpa provident est at ullam! Dignissimos fugiat nesciunt perspiciatis aperiam illo fuga molestiae omnis natus molestias iure, in facilis nam sunt!",
    img: cristian,
    academic: [
      "Distinct in this that circa 1976 meow meow ugabuga",
      "BA first class honors ooga booga HMS",
    ],
    awards: [
      "Succesfully did this",
      "Learned how to spell sucessfuly",
      "Sucesfuly did that",
      "Did this and that in a slightly different environment an got another award",
    ],
    probonos: [
      "helped old lady cross the street",
      "fought for my sovereign right of being allowed to park on road",
    ],
    languages: [
      "Language Proficiency: Fluent in English and Spanglish",
      "Multilingual Team: Our firm comprises lawyers proficient in a variety of languages, including Siraiki, French, and Chinese, to assist clients with international maritime legal matters.",
    ],
    interests: [
      "Specializes in Admiralty Law, with a focus on collision and salvage cases.",
      "Expertise in Marine Insurance and has successfully handled numerous claims for international shipping companies.",
      "Enthusiastic sailor and member of the local Yacht Club. Passion for marine conservation and regularly volunteers for beach clean-up initiatives.",
    ],
    news: "no insights available",
    details: [
      "1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
    ],
  },
  {
    name: "Mark B",
    intro: "Strong legal knowledge, experience, and cost-effectiveness",
    description:
      "lorem ipsum dum dum scooby dooby doo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates culpa provident est at ullam! Dignissimos fugiat nesciunt perspiciatis aperiam illo fuga molestiae omnis natus molestias iure, in facilis nam sunt!",
    img: mark,
    academic: [
      "Distinct in this that circa 1976 meow meow ugabuga",
      "BA first class honors ooga booga HMS",
    ],
    awards: [
      "Succesfully did this",
      "Learned how to spell sucessfuly",
      "Sucesfuly did that",
      "Did this and that in a slightly different environment an got another award",
    ],
    probonos: [
      "helped old lady cross the street",
      "fought for my sovereign right of being allowed to park on road",
    ],
    languages: [
      "Language Proficiency: Fluent in English and Spanglish",
      "Multilingual Team: Our firm comprises lawyers proficient in a variety of languages, including Siraiki, French, and Chinese, to assist clients with international maritime legal matters.",
    ],
    interests: [
      "Specializes in Admiralty Law, with a focus on collision and salvage cases.",
      "Expertise in Marine Insurance and has successfully handled numerous claims for international shipping companies.",
      "Enthusiastic sailor and member of the local Yacht Club. Passion for marine conservation and regularly volunteers for beach clean-up initiatives.",
    ],
    news: "no insights available",
    details: [
      "1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
    ],
  },
  {
    name: "Stewart B",
    intro: "Strong legal knowledge, experience, and cost-effectiveness",
    description:
      "lorem ipsum dum dum scooby dooby doo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates culpa provident est at ullam! Dignissimos fugiat nesciunt perspiciatis aperiam illo fuga molestiae omnis natus molestias iure, in facilis nam sunt!",
    img: stewart,
    academic: [
      "Distinct in this that circa 1976 meow meow ugabuga",
      "BA first class honors ooga booga HMS",
    ],
    awards: [
      "Succesfully did this",
      "Learned how to spell sucessfuly",
      "Sucesfuly did that",
      "Did this and that in a slightly different environment an got another award",
    ],
    probonos: [
      "helped old lady cross the street",
      "fought for my sovereign right of being allowed to park on road",
    ],
    languages: [
      "Language Proficiency: Fluent in English and Spanglish",
      "Multilingual Team: Our firm comprises lawyers proficient in a variety of languages, including Siraiki, French, and Chinese, to assist clients with international maritime legal matters.",
    ],
    interests: [
      "Specializes in Admiralty Law, with a focus on collision and salvage cases.",
      "Expertise in Marine Insurance and has successfully handled numerous claims for international shipping companies.",
      "Enthusiastic sailor and member of the local Yacht Club. Passion for marine conservation and regularly volunteers for beach clean-up initiatives.",
    ],
    news: "no insights available",
    details: [
      "1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
    ],
  },
  {
    name: "Emily B",
    intro: "Strong legal knowledge, experience, and cost-effectiveness",
    description:
      "lorem ipsum dum dum scooby dooby doo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates culpa provident est at ullam! Dignissimos fugiat nesciunt perspiciatis aperiam illo fuga molestiae omnis natus molestias iure, in facilis nam sunt!",
    img: emily,
    academic: [
      "Distinct in this that circa 1976 meow meow ugabuga",
      "BA first class honors ooga booga HMS",
    ],
    awards: [
      "Succesfully did this",
      "Learned how to spell sucessfuly",
      "Sucesfuly did that",
      "Did this and that in a slightly different environment an got another award",
    ],
    probonos: [
      "helped old lady cross the street",
      "fought for my sovereign right of being allowed to park on road",
    ],
    languages: [
      "Language Proficiency: Fluent in English and Spanglish",
      "Multilingual Team: Our firm comprises lawyers proficient in a variety of languages, including Siraiki, French, and Chinese, to assist clients with international maritime legal matters.",
    ],
    interests: [
      "Specializes in Admiralty Law, with a focus on collision and salvage cases.",
      "Expertise in Marine Insurance and has successfully handled numerous claims for international shipping companies.",
      "Enthusiastic sailor and member of the local Yacht Club. Passion for marine conservation and regularly volunteers for beach clean-up initiatives.",
    ],
    news: "no insights available",
    details: [
      "1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
    ],
  },
  {
    name: "Cristian B",
    intro: "Strong legal knowledge, experience, and cost-effectiveness",
    description:
      "lorem ipsum dum dum scooby dooby doo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates culpa provident est at ullam! Dignissimos fugiat nesciunt perspiciatis aperiam illo fuga molestiae omnis natus molestias iure, in facilis nam sunt!",
    img: cristian,
    academic: [
      "Distinct in this that circa 1976 meow meow ugabuga",
      "BA first class honors ooga booga HMS",
    ],
    awards: [
      "Succesfully did this",
      "Learned how to spell sucessfuly",
      "Sucesfuly did that",
      "Did this and that in a slightly different environment an got another award",
    ],
    probonos: [
      "helped old lady cross the street",
      "fought for my sovereign right of being allowed to park on road",
    ],
    languages: [
      "Language Proficiency: Fluent in English and Spanglish",
      "Multilingual Team: Our firm comprises lawyers proficient in a variety of languages, including Siraiki, French, and Chinese, to assist clients with international maritime legal matters.",
    ],
    interests: [
      "Specializes in Admiralty Law, with a focus on collision and salvage cases.",
      "Expertise in Marine Insurance and has successfully handled numerous claims for international shipping companies.",
      "Enthusiastic sailor and member of the local Yacht Club. Passion for marine conservation and regularly volunteers for beach clean-up initiatives.",
    ],
    news: "no insights available",
    details: [
      "1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
    ],
  },
  {
    name: "Mark B",
    intro: "Strong legal knowledge, experience, and cost-effectiveness",
    description:
      "lorem ipsum dum dum scooby dooby doo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates culpa provident est at ullam! Dignissimos fugiat nesciunt perspiciatis aperiam illo fuga molestiae omnis natus molestias iure, in facilis nam sunt!",
    img: mark,
    academic: [
      "Distinct in this that circa 1976 meow meow ugabuga",
      "BA first class honors ooga booga HMS",
    ],
    awards: [
      "Succesfully did this",
      "Learned how to spell sucessfuly",
      "Sucesfuly did that",
      "Did this and that in a slightly different environment an got another award",
    ],
    probonos: [
      "helped old lady cross the street",
      "fought for my sovereign right of being allowed to park on road",
    ],
    languages: [
      "Language Proficiency: Fluent in English and Spanglish",
      "Multilingual Team: Our firm comprises lawyers proficient in a variety of languages, including Siraiki, French, and Chinese, to assist clients with international maritime legal matters.",
    ],
    interests: [
      "Specializes in Admiralty Law, with a focus on collision and salvage cases.",
      "Expertise in Marine Insurance and has successfully handled numerous claims for international shipping companies.",
      "Enthusiastic sailor and member of the local Yacht Club. Passion for marine conservation and regularly volunteers for beach clean-up initiatives.",
    ],
    news: "no insights available",
    details: [
      "1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
    ],
  },
  {
    name: "Stewart B",
    intro: "Strong legal knowledge, experience, and cost-effectiveness",
    description:
      "lorem ipsum dum dum scooby dooby doo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates culpa provident est at ullam! Dignissimos fugiat nesciunt perspiciatis aperiam illo fuga molestiae omnis natus molestias iure, in facilis nam sunt!",
    img: stewart,
    academic: [
      "Distinct in this that circa 1976 meow meow ugabuga",
      "BA first class honors ooga booga HMS",
    ],
    awards: [
      "Succesfully did this",
      "Learned how to spell sucessfuly",
      "Sucesfuly did that",
      "Did this and that in a slightly different environment an got another award",
    ],
    probonos: [
      "helped old lady cross the street",
      "fought for my sovereign right of being allowed to park on road",
    ],
    languages: [
      "Language Proficiency: Fluent in English and Spanglish",
      "Multilingual Team: Our firm comprises lawyers proficient in a variety of languages, including Siraiki, French, and Chinese, to assist clients with international maritime legal matters.",
    ],
    interests: [
      "Specializes in Admiralty Law, with a focus on collision and salvage cases.",
      "Expertise in Marine Insurance and has successfully handled numerous claims for international shipping companies.",
      "Enthusiastic sailor and member of the local Yacht Club. Passion for marine conservation and regularly volunteers for beach clean-up initiatives.",
    ],
    news: "no insights available",
    details: [
      "1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
      "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab error consequatur ea rem quos. Quasi dolores aliquam similique sequi eius voluptas suscipit tenetur obcaecati hic nihil? Quidem, non adipisci",
    ],
  },
];

function App() {
  const [profile, setProfile] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {servicesData.map((service) => (
          <Route
            path={`/services/${service.name
              .toLocaleLowerCase()
              .split(" ")
              .at(0)}`}
            element={
              <ServicesPage pageName={service.name} background={service.bg} />
            }
          />
        ))}

        <Route path="/contactus" element={<ContactUsPage />} />

        <Route
          path="/teampage"
          element={<TeamPage teamData={teamData} setProfile={setProfile} />}
        />

        <Route
          path="/profile"
          element={<ProfilePage teamData={teamData} profile={profile} />}
        />

        <Route path="/news" element={<NewsArticlePage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
