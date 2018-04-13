import React, { Component } from 'react';
import logo from '../logo.svg';
import {Navbar, Nav, NavItem, Row, Col} from 'react-bootstrap'

export default class Header extends Component {
  render() {
    const {auth} = this.props

    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Auth0 Authentication</h1>
        </header>
        <Row className='App-menu'>
          <Col xs={12}>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">Authentication</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                {auth.isAuthenticated() &&
                <NavItem eventKey={1} href="#" onClick={() => auth.logout()}>
                  Logout
                </NavItem>
                }
                {!auth.isAuthenticated() &&
                <NavItem eventKey={1} href="#" onClick={() => auth.login()}>
                  Login
                </NavItem>
                }
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </div>
    )
  }
}
