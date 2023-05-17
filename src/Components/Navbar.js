import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarBody() {
  return (
    <>
      <Navbar bg="secondary" variant="dark" >
        <Container>
          <Navbar.Brand href="#home" > <h3 >Come visit us !</h3></Navbar.Brand>
          
        </Container>
        </Navbar>
      
    </>
  );
}

export default NavbarBody;