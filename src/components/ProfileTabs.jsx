import React from "react";
import { useState } from "react";
import Academic from "./Academic";
import Awards from "./Awards";
import ProBono from "./ProBono";
import Languages from "./Languages";
import Interests from "./Interests";
import Insights from "./Insights";

export default function ProfileTabs({ member }) {
  const [activeTab, setActiveTab] = useState("Academic");
  const tabs = [
    "Academic",
    "Awards",
    "Pro Bono",
    "Languages",
    "Interests",
    "Insights",
  ];
  return (
    <div className="container">
      <div className="profile-tabs">
        {tabs.map((entry) => (
          <button
            style={
              entry === activeTab
                ? {
                    borderBottom: "3px solid #fff",
                    color: "#fff",
                    fontWeight: "500",
                  }
                : {
                    borderBottom: "3px solid #0b1125",
                    color: "rgba(210, 210, 210, 1)",
                    fontWeight: "400",
                  }
            }
            onClick={() => setActiveTab(entry)}
            key={entry}
          >
            {entry}
          </button>
        ))}
      </div>

      {activeTab === "Academic" && (
        <Academic academic={member.academic} name={member.name} />
      )}
      {activeTab === "Awards" && <Awards awards={member.awards} />}
      {activeTab === "Pro Bono" && (
        <ProBono probonos={member.probonos} name={member.name} />
      )}
      {activeTab === "Languages" && (
        <Languages languages={member.languages} name={member.name} />
      )}
      {activeTab === "Interests" && (
        <Interests interests={member.interests} name={member.name} />
      )}
      {activeTab === "Insights" && <Insights />}
    </div>
  );
}
