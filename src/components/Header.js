import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import Home from "./../images/home.png";

function Header() {
    return (
       <div>
        <Navbar expand="lg">
  <Container>
    <Navbar className="fw-bold h2"><div>Portfolio</div></Navbar>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to={'/'} className=" text-color button button-hover">Home</Nav.Link>
        <Nav.Link as={Link} to={'/About'} className=" text-color button button-hover">About</Nav.Link>
        <Nav.Link as={Link} to={'/About'} className=" text-color button button-hover">Skills</Nav.Link>
        <Nav.Link as={Link} to={'/About'} className=" text-color button button-hover"></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
       </div>
    );
}

export default Header;