import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { Children } from 'react';
import Genres from './Genres';


function NavBar() {
  const navigate = useNavigate()
  function goToHome(){
    navigate("/")
  }
  const goToTopPicksArtists = (genre) => {
    navigate(`/TopPicksArtists/${genre}`);
  };
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Home" id="basic-nav-dropdown" className="me-4">
              <NavDropdown.Item onClick={goToHome}>Home Page</NavDropdown.Item>
              <NavDropdown.Item onClick={() => goToTopPicksArtists('POP')}>Pop</NavDropdown.Item>
              <NavDropdown.Item onClick={() => goToTopPicksArtists('HIP_HOP_RAP')}>Hip-Hop</NavDropdown.Item>
              <NavDropdown.Item onClick={() => goToTopPicksArtists('ROCK')}>Rock</NavDropdown.Item>
              <NavDropdown.Item onClick={() => goToTopPicksArtists('ALTERNATIVE')}>Rhythm & Blues</NavDropdown.Item>
              <NavDropdown.Item onClick={() => goToTopPicksArtists('ALTERNATIVE')}>Soul</NavDropdown.Item>
              <NavDropdown.Item onClick={() => goToTopPicksArtists('REGGAE_DANCE_HAL')}>Reggae</NavDropdown.Item>
              <NavDropdown.Item onClick={() => goToTopPicksArtists('COUNTRY')}>Country</NavDropdown.Item>
              <NavDropdown.Item onClick={() => goToTopPicksArtists('HIP_HOP_RAP')}>Funk</NavDropdown.Item>
              <NavDropdown.Item onClick={() => goToTopPicksArtists('DANCE')}>Folk</NavDropdown.Item>
              <NavDropdown.Item onClick={() => goToTopPicksArtists('AFRO_BEATS')}>Jazz</NavDropdown.Item>
              <NavDropdown.Item onClick={() => goToTopPicksArtists('DANCE')}>Disco</NavDropdown.Item>
              <NavDropdown.Item onClick={() => goToTopPicksArtists('ELECTRONIC')}>Electronic</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://youthincmag.com/hidden-gems-exploring-emerging-music-genres-in-2023">
                Upcoming Genres 2024
              </NavDropdown.Item>
              <NavDropdown.Item href="https://consequence.net/upcoming-releases/">
                Upcoming Albums 2024
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="me-4" onClick={() => navigate('Search')}>Search</Nav.Link>
            <Nav.Link className="me-4" onClick={() => navigate('History')}>History</Nav.Link>
            <Nav.Link href="#contact-us" className="me-4">Contact Us</Nav.Link>
            <Nav.Link href="#help" className="me-4">Help</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <img
                  alt=""
                  src="https://i.pinimg.com/originals/b6/4f/8f/b64f8fcf0e0aed9537c800eb5e9ca1ed.png"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />
              }
              id="logo-dropdown"
              className="me-4"
            >
              <NavDropdown.Item href="#action/4.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">Switch Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4.4">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar><Genres/>
    </>
  );
}

export default NavBar;



