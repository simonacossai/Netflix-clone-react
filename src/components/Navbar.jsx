import React from "react"
import "./NavBar.css"
import logo from '../data/logo.png';
import profilepic from '../data/profile_picture.png';
import {FormControl, Navbar, Button, Form, Nav, Container} from "react-bootstrap"
const NavBar = () => {
    return (
    <Navbar className="navBar py-0 m-0 px-1">
        <Navbar.Brand> <img style={{height: "65px"}} src={logo}/>
          </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="navLink" href="#tvShows"> Tv Shows</Nav.Link>
          <Nav.Link className="navLink" href="#movies">Movies</Nav.Link>
          <Nav.Link className="navLink" href="#recentlyAdded">Recently Added</Nav.Link>
          <Nav.Link className="navLink" href="#myList">My List</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" className="buttonSearch" >Search</Button>
        </Form>
        <Navbar.Brand> <img style={{height: "25px"}} src={profilepic} className="ml-2"/>
          </Navbar.Brand>
      </Navbar>
      )
    }
    
    export default NavBar;

