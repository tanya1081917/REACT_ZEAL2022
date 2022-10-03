import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavbarBrand, NavLink} from 'react-bootstrap'
import { logout } from '../Actions/userActions'
import {NavDropdown} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import SearchBox from "./SearchBox";

const Header = () => {
  /*const dispatch = useDispatch()*/

  const userLogin ="tANYA"
     /* useSelector((state) => state.userLogin)
  const { userInfo } = userLogin*/

  const logoutHandler = () => {
  /*  dispatch(logout())*/
  }


    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/registration'>
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Route render={({ history }) => <SearchBox history={history} />} />
                        <Nav className='ml-auto'>
                            <LinkContainer to='/registration'>
                                <Nav.Link>
                                    <i className='fas fa-shopping-cart'></i> Cart
                                </Nav.Link>
                            </LinkContainer>
                            {userLogin ? (
                                <NavDropdown title={userLogin} id='username'>
                                    <LinkContainer to='/registration'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/registration'>
                                    <Nav.Link>
                                        <i className='fas fa-user'></i> Sign In
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                           {/* {userLogin && userLogin.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )


}

export default Header
