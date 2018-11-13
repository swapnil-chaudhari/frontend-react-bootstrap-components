import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';

const Man = ({ width, height, x, y }) => (
    <Icon
        className="Icons-man"
        id={ ICON_IDS.MAN }
        width={ width }
        height={ height }
        x={ x }
        y={ y }
    />
);

Man.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number
};

export default Man;
