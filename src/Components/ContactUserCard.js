

const ContactUserCard = ({ picture, full_name, description, role }) => {
  return (
      <div
      style={{
        display: "flex",
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
        marginTop: "10px",
      }}
    >
      <img
        src={picture}
        style={{ objectFit: "cover", width: "130px", borderRadius: "5px" }}
        alt={full_name}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "10px"
        }}
      >
        <h4 style={{ paddingTop: "15px"}}>
          {full_name}
        </h4>
        <h6>
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


