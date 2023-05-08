import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Fragment } from "react";
import { BrowserRouter as Router , Route , Link} from "react-router-dom";
import Home from "../pages/Home/Home";
import Tasks from '../pages/Tasks';


function Narvbar() {
  return (
    
    <Router>
    <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">TaksManager</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features"><Link  style={{ textDecoration: 'none' }}   to="/" >Home</Link></Nav.Link>
                <Nav.Link href="#pricing"><Link  style={{ textDecoration: 'none' }}  to="/tarefas">Tarefas</Link></Nav.Link>
            </Nav>
            <Nav>
            
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
     </header>
     <Route path="/" exact component={Homei} />
     <Route path="/tarefas" exact component={Tarefas} />
     </Router>

     
  );
}
// Home Page
const Homei = () => (
    <Fragment>
      <Home/>
    </Fragment>
    );
  // About Page
  const Tarefas = () => (
    <Fragment>
      <Tasks/>
    </Fragment>
    );

export default Narvbar;