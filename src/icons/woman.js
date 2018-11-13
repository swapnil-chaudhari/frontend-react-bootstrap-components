import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';

const Woman = ({ width, height, x, y }) => (
    <Icon
        className="Icons-woman"
        id={ ICON_IDS.WOMAN }
        width={ width }
        height={ height }
        x={ x }
        y={ y }
    />
);

Woman.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number
};

export default Woman;
