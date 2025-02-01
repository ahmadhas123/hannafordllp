import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import ProfileTabs from "../components/ProfileTabs";
import { useEffect } from "react";

export default function ProfilePage({ teamData, profile }) {
  useEffect(function () {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, profile);

  const data = profile ?? JSON.parse(localStorage.getItem("profile"));
  const member = teamData[data];

  return (
    <>
      <Header />
      <ProfileCard member={member} />
      <ProfileTabs member={member} />
      <Footer />
    </>
  );
}
