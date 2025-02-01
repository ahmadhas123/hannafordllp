import React from "react";
import Header from "../components/Header";
import SectionAboutUs from "../components/SectionAboutUs";
import SectionBenefits from "../components/SectionBenefits";
import SectionCTA from "../components/SectionCTA";
import SectionOptions from "../components/SectionOptions";
import SectionUnderstanding from "../components/SectionUnderstanding";
import Testimonials from "../components/Testimonials";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import SectionHero from "../components/SectionHero";
import Div from "../components/Div";

export default function LandingPage() {
  return (
    <>
      <Div className="hero">
        <Header />
        <SectionHero />
      </Div>
      <SectionAboutUs />
      <SectionBenefits />
      <SectionCTA />
      <SectionOptions />
      <SectionUnderstanding />
      <Testimonials />
      <Accordion />
      <Footer />
    </>
  );
}
