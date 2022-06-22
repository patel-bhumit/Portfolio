import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

function Header() {
    return (
       <div>
        <Navbar expand="lg">
  <div className="container-fluid bg-dark-theme fixed-top navbar-dark">
    <Navbar className="fw-bold h2"><div>Portfolio</div></Navbar>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to={'/'} className=" text-color  button-hover m-3">Home</Nav.Link>
        <Nav.Link as={Link} to={'/About'} className=" text-color  button-hover m-3">About</Nav.Link>
        <Nav.Link as={Link} to={'/Skills'} className=" text-color  button-hover m-3">Skills</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </div>
</Navbar>
       </div>
    );
}

export default Header;