import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import ThreeRightDirectedArrows from 'src/icons/three-right-directed-arrows';

const ThreeArrowsIcon = ({ reversed, isHidden }) => {
    const iconsClasses = cx({
        'MoveCountryButton-icons': true,
        'MoveCountryButton-reverse': reversed,
        hide: isHidden
    });

    return (
        <div className={ iconsClasses }>
            <ThreeRightDirectedArrows />
        </div>
    );
};

ThreeArrowsIcon.propTypes = {
    reversed: PropTypes.bool.isRequired,
    isHidden: PropTypes.bool.isRequired,
};

export default ThreeArrowsIcon;
