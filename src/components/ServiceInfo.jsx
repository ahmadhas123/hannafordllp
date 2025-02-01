import React from "react";
import { Link } from "react-router-dom";

export default function ServiceInfo() {
  return (
    <>
      <div className="service-info container">
        <p>
          We have acted in many ship sale & purchase and shipbuilding cases over
          the years. At the negotiation stage, we advise clients on the wording
          of shipbuilding contracts and assist with the discussions on their
          terms.
        </p>
        <div className="midline"></div>
        <div className="service-details">
          <p>
            We also act in relation to disputes concerning MOAs and shipbuilding
            contracts. In the context of the NSF form, examples of the types of
            disputes in which we have acted are:
          </p>
          <ul>
            <li>
              Issues concerning whether parties are contractually bound to an
              S&P deal
            </li>
            <li>
              The seller's remedies for a buyer's failure to pay the deposit or
              take delivery
            </li>
            <li>
              The buyer's rights as regards the condition of the vessel on
              delivery
            </li>
          </ul>
          <p>
            As regards shipbuilding contracts, we have represented clients in
            many arbitrations over the years involving issues concerning
          </p>
          <ul>
            <li>
              Issues concerning whether parties are contractually bound to an
              S&P deal
            </li>
            <li>
              The seller's remedies for a buyer's failure to pay the deposit or
              take delivery
            </li>
            <li>
              The buyer's rights as regards the condition of the vessel on
              delivery
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-linkbox">
        <Link to="/contactus" className="link-contact">
          Contact Us
        </Link>
      </div>
    </>
  );
}
