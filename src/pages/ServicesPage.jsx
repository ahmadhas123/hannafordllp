import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Div from "../components/Div";
import ServiceName from "../components/ServiceName";
import ServiceInfo from "../components/ServiceInfo";

export default function ServicesPage({ pageName, background }) {
  return (
    <>
      <Div className="services-hero" background={background}>
        <Header />
        <ServiceName pageName={pageName} />
      </Div>
      <ServiceInfo />
      <Footer />
    </>
  );
}
