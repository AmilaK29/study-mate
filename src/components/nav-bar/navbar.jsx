import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import { Outlet,Link } from "react-router-dom";
import { useNavigate , useLocation} from "react-router-dom";
import { onAuthStateChanged , getAuth,signOut} from "firebase/auth";
import { app } from "../../config/firebase";
import { useEffect,useState } from "react";

function NavBar() {

  const location = useLocation();
//   const {email} = location.state || {};

  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('User signed out.');
        navigate('/login'); // Redirect to login page
      })
      .catch((error) => {
        // An error happened.
        console.error('Error signing out: ', error);
      });
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);


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
          {user ? null :<Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto custom-nav">
              <Nav.Link href="/register">Join</Nav.Link>
            </Nav>
          </Navbar.Collapse>}
          {user ? <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <Link to={`/profile/${user ? user.email : null}`} >{user ? user.email : null}</Link>
            </Navbar.Text>
            <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
          </Navbar.Collapse>:null}
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
