const UserProfile = () => {
  const senior = {
    full_name: 
    "John Williams",
    role: 
    "Senior Engineer",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMbz0BckyoAlS_RskMU5FWsqrWbqAEupUNlxJSHxmTNcGKF0yZOfiF40VKQ8Bbq1CBwg&usqp=CAU",
    description:
      "John is a highly experienced senior engineer with deep expertise in web development. He has a strong technical background in multiple programming languages, frameworks, and databases, and has a proven track record of leading and mentoring development teams.",
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
      }}
    >
      <img
        src={senior.picture}
        style={{ objectFit: "cover", borderRadius: "10px", width: 130, boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
        alt="profile"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 10,
        }}
      >
        <h4>
          {senior.full_name}
        </h4>
        <h6 className="jobTitle" style={{}}>
          {senior.role}
        </h6>
        <p>{senior.description}</p>
      </div>
    </div>
  );
};

export default UserProfile;
