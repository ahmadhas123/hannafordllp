import React from "react";
import { HashLink } from "react-router-hash-link";

export default function SectionAboutUs() {
  return (
    <div className="section-aboutus" id="history">
      <div className="grid-aboutus container">
        <div className="headings-aboutus">
          <h2 className="heading-secondary">We are lawyers.</h2>
          <h2 className="heading-secondary">We are specialists.</h2>
        </div>
        <div className="textbox-aboutus">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            molestiae repudiandae suscipit expedita esse.
          </p>
          <p>
            Tenetur possimus doloremque vitae neque inventore facilis ut tempora
            minima consequuntur explicabo, perspiciatis enim. Illo, ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            molestiae repudiandae suscipit expedita esse.
          </p>
          <HashLink smooth to="/#expertise" className="link">
            See Details
          </HashLink>
        </div>
      </div>
    </div>
  );
}
