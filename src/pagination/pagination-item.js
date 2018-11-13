import PropTypes from 'prop-types';
import React from 'react';

const PaginationItem = ({ children, eventKey, onClick }) => {
    const handleClick = e => {
        e.preventDefault();
        onClick(eventKey, e);
    };

    return (
        <a
            href="#"
            className="page"
            onClick={ handleClick }
        >{ children }</a>
    );
};

PaginationItem.displayName = 'PaginationItem';

PaginationItem.propTypes = {
    children: PropTypes.any,
    eventKey: PropTypes.any,
    onClick: PropTypes.func
};

export default PaginationItem;
