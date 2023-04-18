// ../ takes you back into the previous file, with ./ it was an error for cypress
import ContactUserCard from "../Components/ContactUserCard.js";
import "./Contact.css";

function Contacts() {
  return (
    <div id="contacts">
      <strong>Contacts</strong>
      <ContactUserCard />
    </div>
  );
}
export default Contacts;
