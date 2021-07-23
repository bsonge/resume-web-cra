import { React, useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);
    return(
        <Navbar className="site-header">
            <NavbarBrand href="/">WhimsyDeep</NavbarBrand>
            <NavbarToggler onClick={toggleNav}/>
            <Collapse isOpen={isOpen}>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/resume">Resume</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;