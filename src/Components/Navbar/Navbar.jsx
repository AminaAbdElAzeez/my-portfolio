import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbars = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="about" className='link'><i className="bi bi-person-vcard-fill"></i>about</Link>
            <Link to="resume" className='link'><i className="bi bi-file-earmark-medical-fill"></i>resume</Link>
            <Link to="works" className='link'><i className="bi bi-briefcase-fill"></i>works</Link>
            <Link to="contact" className='link'><i className="bi bi-phone-vibrate-fill"></i>contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars
