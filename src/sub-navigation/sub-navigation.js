import PropTypes from 'prop-types';
import React, { cloneElement, Children } from 'react';
import SubNavigationItem from './sub-navigation-item';

const subNavigationPropTypes = (propValue, key, componentName, location, propFullName) => {
    if (propValue[key].type !== SubNavigationItem)
        return new Error(
            `Invalid prop \`${propFullName}\` supplied to \'${componentName}\' Validation failed.`
        );
};

const SubNavigation = ({ children, onSelect: onClick }) => (
    <div className="SubNavigation">
        <nav className="main-subnav">
            {
                Children.map(children, child => (
                    cloneElement(
                        child, { onClick }
                    )
                ))
            }
        </nav>
    </div>
);

SubNavigation.displayName = 'SubNavigation';

SubNavigation.propTypes = {
    children: PropTypes.arrayOf(subNavigationPropTypes).isRequired,
    onSelect: PropTypes.func
};

export default SubNavigation;
