import './css/App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home} from './containers/Home';
import {Login} from './containers/Login';
import {Users} from './containers/Users';
import {User} from './containers/User';



export const App = () => {
    const siteName = useSelector(state => state.siteName);
    const dispatch = useDispatch();
    return (
      <Router>          
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

              <Navbar.Brand href="#home">{siteName}</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/users">Users</Nav.Link>
                  <Nav.Link href="/user/1">User Number 1</Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link onClick={() => dispatch({ type: "CHANGE_SITE_NAME", payload: "new Site Name" })}>CHANGE_SITE_NAME</Nav.Link>
                </Nav>
              
              </Navbar.Collapse>
            
            </Navbar>

            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/users/:pageNumber?" component={Users}/>
            <Route path="/user/1" component={User}/>

      </Router>

    );
}

