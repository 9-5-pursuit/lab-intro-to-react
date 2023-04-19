import React from "react";

import ContactUserCard from "./ContactUserCard";

function Contacts() {
  return (
    <div className="contacts">
      <h4>Contacts</h4>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
}

export default Contacts;
