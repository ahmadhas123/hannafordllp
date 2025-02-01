import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Div from "../components/Div";
import NewsHeadline from "../components/NewsHeadline";
import NewsInformation from "../components/NewsInformation";

export default function NewsArticlePage() {
  return (
    <>
      <Div className="news-hero">
        <Header />
        <NewsHeadline />
      </Div>
      <NewsInformation />
      <Footer />
    </>
  );
}
