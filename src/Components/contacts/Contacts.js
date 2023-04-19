
import ContactUserCard from "./ContactUserCard";

import { developers } from "../../dummyData.js"

const Contacts = () => {
  return (
    <>
      <h1>Contacts</h1>
      {
        developers.map((user, index) => <ContactUserCard key={index} {...user} />)
      }
    </>
  );
};

export default Contacts;