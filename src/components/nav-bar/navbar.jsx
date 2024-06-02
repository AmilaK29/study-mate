import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar() {

  const navigate = useNavigate();  
  const hangleNameClick = () => {
    navigate("/profile",{state : {name : "Amila"}})
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Study Mate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto custom-nav">
              {" "}
              {/* Added custom-nav class */}
              <Nav.Link href="/home" className="me-3">
                Home
              </Nav.Link>{" "}
              {/* Added me-3 class */}
              <Nav.Link href="/members">Members</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <Nav.Link onClick={hangleNameClick}>Amila</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
