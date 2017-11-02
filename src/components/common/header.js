import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" activeClassName="active">CMS</Link>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem>
            <IndexLink to="/" activeClassName="active">
              Home
            </IndexLink>
          </NavItem>
          <NavItem>
            <Link to="courses" activeClassName="active">
              Courses
            </Link>
          </NavItem>
          <NavItem>
            <Link to="course" activeClassName="active">
              Course Page
            </Link>
          </NavItem>
          <NavItem>
            <Link to="lesson" activeClassName="active">
              Lesson Page
            </Link>
          </NavItem>
          <NavItem>
            <Link to="about" activeClassName="active">
              About Page
            </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


export default Header;
