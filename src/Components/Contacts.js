import React from "react";

import ContactUserCard from "./ContactUserCard";

function Contacts() {
  return (
    <div className="Contacts">
      <h3>Contacts</h3>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
}

export default Contacts;
