import "./contacts.css"

const ContactUserCard = ({ picture, full_name, description, role }) => {
  return (
      <div className="contacts">
      <img 
        className="contacts-image"
        src={picture}
        alt={full_name}
      />
      <div className="contacts-info">
        <h4 className="contacts-info__name">
          {full_name}
        </h4>
        <h6 className="contacts-info__role">
          {role}
        </h6>
        <p>
          {description}
        </p>
      </div>
    </div> 
    
  );
};

export default ContactUserCard;


