import { Fragment, React, useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from 'shared/images/logov1.svg';
import "./Header.scss";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);
    return(
        <Fragment>
        <Navbar className="site-header">
            <NavbarBrand href="/"><Logo className="mainLogo"/>WhimsyDeep</NavbarBrand>
            <NavbarToggler onClick={toggleNav}/>
            <Collapse isOpen={isOpen}>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/resume">Resume</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </Fragment>
    );
}

export default Header;