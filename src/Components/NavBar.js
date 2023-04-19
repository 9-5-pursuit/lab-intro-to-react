
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../favicon.jpeg";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={Logo}
              style={{ width: "40", borderRadius: "5px" }}
              className="d-inline-block"
            /><span className="mx-3">Pursuit</span>
          </Navbar.Brand>
          <Button variant="success">Login</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar