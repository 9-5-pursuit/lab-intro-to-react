import { Row, Col, Container } from "react-bootstrap";
import NavBar from "./Components/navbar/NavBar";
import UserProfile from "./Components/user/UserProfile";
import Posts from "./Components/posts/Posts";
import Contacts from "./Components/contacts/Contacts";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App () {
  return (
    <div>
      <NavBar />
      <Container className="container-fluid">
        <Row xs={1} md={2} className=" my-2  gy-2 h-100">
          <Col md={8}>
            <UserProfile />
            <Col
              className="p-4 my-2 gy-2 bg-light rounded-circle">
              <Posts />
            </Col>
          </Col>
          <Col md={4}>
            <Contacts />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
