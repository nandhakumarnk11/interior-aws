import React from 'react'
import "./Navibar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Navibar = () => {
  return (
    <div>
    <Navbar expand="lg" className="navicolur">
      <Container fluid>
        <Navbar.Brand href="#" className='navi-h1'>Designit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='navi-icons'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 navibar-1"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link className='navlinked'  to="/"> <Nav.Link href="#action2" className='nav-tittle'>Home</Nav.Link></Link>
           <Link className='navlinked'  to="/About"> <Nav.Link href="#action2" className='nav-tittle'>About</Nav.Link></Link>
           <Link className='navlinked'  to="/Blog"> <Nav.Link href="#action2" className='nav-tittle'>Blog</Nav.Link></Link>
           <Link className='navlinked'  to="/Contact"> <Nav.Link href="#action2" className='nav-tittle'>contact</Nav.Link></Link>
           </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navibar;
