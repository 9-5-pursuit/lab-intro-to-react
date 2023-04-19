
import ContactUserCard from "./ContactUserCard";

import data from "../dummyData.js"

const Contacts = () => {
  // console.log(data)
  return (
    <>
      <h1>Contacts</h1>
      {
        data.map((user, index) => <ContactUserCard key={index} {...user} />)
      }
    </>
  );
};

export default Contacts;