import React from "react";
import ContactUserCard from "./ContactUserCard";

function Contacts() {
  return (
    <div className="contacts-card">
      <p>Contacts</p>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
}

export default Contacts;
