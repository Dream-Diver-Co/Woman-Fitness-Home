
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo_icon_19.svg'
import { Image } from 'react-bootstrap';
import './Header.css'
import Button from '../button/Button';
const Header = () => {
  return (
    <>
      <Navbar bg="primary" className='heder-bg fixed-top' data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home" >
            <Image src={logo} className='nav-brand-height' alt='logo'/> 
          </Navbar.Brand>
          <Nav className="m-auto ">
            <Nav.Link className='text-light' href="#home">Home</Nav.Link>
            <Nav.Link className='text-light' href="#features">About us</Nav.Link>
            <Nav.Link className='text-light' href="#pricing">Pool</Nav.Link>
            <Nav.Link className='text-light' href="#pricing">Music</Nav.Link>
            <Nav.Link className='text-light' href="#pricing">Print</Nav.Link>
            <Nav.Link className='text-light' href="#pricing">Event</Nav.Link>
            <Nav.Link className='text-light' href="#pricing">Contact</Nav.Link>
          </Nav>
          <Button link="/" title="Book Now"/>
          <Navbar.Brand href='/'>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
