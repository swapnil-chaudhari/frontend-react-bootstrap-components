import React from 'react';
import PropTypes from 'prop-types';
import { RightPaginationArrow, LeftPaginationArrow } from 'src/icons';

const Navbar = ({
    showNextButton,
    showPreviousButton,
    onPreviousClick,
    onNextClick,
    className
}) => (
    <div className={ className }>
        {
            showPreviousButton &&
                <button
                    className="DayPicker-left-arrow"
                    onClick={ () => onPreviousClick() }
                    type="button"
                >
                    <LeftPaginationArrow />
                </button>
        }
        {
            showNextButton &&
                <button
                    className="DayPicker-right-arrow"
                    onClick={ () => onNextClick() }
                    type="button"
                >
                    <RightPaginationArrow />
                </button>
        }
    </div>
);

Navbar.propTypes = {
    showNextButton: PropTypes.bool,
    showPreviousButton: PropTypes.bool,
    onPreviousClick: PropTypes.func,
    onNextClick: PropTypes.func,
    className: PropTypes.string
};

export default Navbar;
