import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Div from "../components/Div";
import ContactUs from "../components/ContactUs";
import ContactForm from "../components/ContactForm";

export default function ContactUsPage() {
  return (
    <>
      <Div className="contactus-hero">
        <Header />
        <ContactUs />
      </Div>
      <ContactForm />
      <Footer />
    </>
  );
}
