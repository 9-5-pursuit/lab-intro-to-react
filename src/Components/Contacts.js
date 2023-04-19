import ContactUserCard from "./ContactUserCard";
import React from "react";

function Contacts() {
  return (
    <div className="Contacts">
      <h2>Contacts</h2>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
}

export default Contacts;
