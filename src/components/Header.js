import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Container,Navbar,Nav,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../redux/actions/userActions'
function Header() {

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    var { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
      }

    return (
        <header>          
            <Navbar bg="danger" expand="lg">
             <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand className="brand">Issue Tracker</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                    <Nav className="ml-auto">
                    <LinkContainer to='/about'>
                    <Nav.Link className="nav-link"> ABOUT</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/issues'>
                    <Nav.Link className="nav-link"> ISSUES</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/reports'>
                    <Nav.Link className="nav-link"> REPORTS</Nav.Link>
                    </LinkContainer>
                    {
                        userInfo && 
                        <LinkContainer to='/signin'>
                        <Button variant="dark" className="login-btn" onClick={logoutHandler} ><i className="fas fa-user"></i> LOGOUT</Button>  
                      </LinkContainer>
                    }
                    {
                        !userInfo && 
                    <LinkContainer to='/signin'>
                      <Button variant="dark" className="login-btn" ><i className="fas fa-user"></i> SIGN IN</Button>  
                    </LinkContainer>
                    }
                    
                    </Nav>

                </Navbar.Collapse>
            </Container>   
            </Navbar>
        </header>
    )
}

export default Header
