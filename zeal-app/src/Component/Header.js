import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavbarBrand, NavItem} from 'reactstrap'
import SearchBox from './SearchBox'
import { logout } from '../Actions/userActions'
/*import NavLink from "reactstrap/types/lib/NavLink";*/

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavbarBrand title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavItem>Profile</NavItem>
                  </LinkContainer>
                  <NavItem onClick={logoutHandler}>
                    Logout
                  </NavItem>
                </NavbarBrand>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavbarBrand title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavItem>Users</NavItem>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavItem>Products</NavItem>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavItem>Orders</NavItem>
                  </LinkContainer>
                </NavbarBrand>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
