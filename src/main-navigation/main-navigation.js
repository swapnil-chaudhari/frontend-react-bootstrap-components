import PropTypes from 'prop-types';
import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from 'src/icons/logo';
import './main-navigation.scss';

const MainNavigation = ({ children, logo, logoHref }) => (
    <div className="MainNavigation">
        <Navbar
            bsClass="navigation"
            className="header-main"
            componentClass="header"
        >
            <Navbar.Header>
                <Navbar.Brand>
                    <a href={ logoHref } className="logo">
                        { logo || <Logo /> }
                    </a>
                </Navbar.Brand>
            </Navbar.Header>
            { children }
        </Navbar>
    </div>
);

MainNavigation.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    logoHref: PropTypes.string,
    logo: PropTypes.object
};

MainNavigation.defaultProps = {
    logoHref: '/',
    logo: null
};

export default MainNavigation;
