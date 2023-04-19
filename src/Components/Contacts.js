import ContactUserCard from "./ContactUserCard";
import React from "react";

const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Contacts</h1>
      <ContactUserCard></ContactUserCard>
      <ContactUserCard></ContactUserCard>
      <ContactUserCard></ContactUserCard>
    </div>
  );
};
export default Contacts;
