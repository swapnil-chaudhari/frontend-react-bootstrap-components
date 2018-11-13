import PropTypes from 'prop-types';
import React from 'react';
import { Pagination as BsPagination } from 'react-bootstrap';
import PaginationItem from './pagination-item';
import cx from 'classnames';
import LeftPaginationArrow from 'src/icons/left-pagination-arrow';
import RightPaginationArrow from 'src/icons/right-pagination-arrow';
import './pagination.scss';

const leftArrow = <LeftPaginationArrow />;
const rightArrow = <RightPaginationArrow />;

const Pagination = ({ items, maxButtons, activePage, onSelect, size }) => (
    <div
        className={ cx('Pagination', size && `Pagination-${size}`) }
    >
        <BsPagination
            ellipsis
            boundaryLinks
            buttonComponentClass={ PaginationItem }
            items={ items }
            maxButtons={ maxButtons }
            activePage={ activePage }
            onSelect={ onSelect }
            prev={ leftArrow }
            next={ rightArrow }
        />
    </div>
);

Pagination.propTypes = {
    items: PropTypes.number.isRequired,
    maxButtons: PropTypes.number,
    activePage: PropTypes.number,
    onSelect: PropTypes.func,
    size: PropTypes.oneOf(['small'])
};

Pagination.displayName = 'Pagination';

export default Pagination;
