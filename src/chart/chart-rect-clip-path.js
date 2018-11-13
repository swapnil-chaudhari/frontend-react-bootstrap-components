import PropTypes from 'prop-types';
import React from 'react';

const ChartRectClipPath = ({
    id,
    x,
    y,
    width,
    height
}) => (
    <clipPath id={ id }>
        <rect
            x={ x }
            y={ y }
            width={ width }
            height={ height }
        />
    </clipPath>
);

ChartRectClipPath.displayName = 'ChartRectClipPath';

ChartRectClipPath.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    id: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};

ChartRectClipPath.defaultProps = {
    x: 0,
    y: 0
};

export default ChartRectClipPath;
