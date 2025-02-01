import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Team from "../components/Team";

export default function TeamPage({ teamData, setProfile }) {
  return (
    <>
      <Header />
      <Team teamData={teamData} setProfile={setProfile} />
      <Footer />
    </>
  );
}
