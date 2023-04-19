import ContactUserCard from "./ContactUserCard";

//This is the child element of App.js
function Contacts() {
  return (
    <>
      <h3>Contacts</h3>
      <div id="contacts">
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </div>
    </>
  );
}

export default Contacts;
