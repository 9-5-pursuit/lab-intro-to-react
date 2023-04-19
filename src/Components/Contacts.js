import React from "react";
import ContactUserCard from "./ContactUserCard";
import Profile1 from "./profile.png";
import Profile2 from "./profile.png";
import Profile3 from "./profile.png";
import Profile4 from "./profile.png";
function Contacts() {
  return (
    <div>
      <ContactUserCard
        imageUrl={Profile1}
        name="Jordan Walke"
        jobTitle="React Creator"
      />
      <ContactUserCard
        imageUrl={Profile2}
        name="Jordan Walke"
        jobTitle="React Creator"
      />
      <ContactUserCard
        imageUrl={Profile3}
        name="Jordan Walke"
        jobTitle="React Creator"
      />
      <ContactUserCard
        imageUrl={Profile4}
        name="Jordan Walke"
        jobTitle="React Creator"
      />
    </div>
  );
}

export default Contacts;
