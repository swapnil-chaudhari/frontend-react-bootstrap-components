import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';

const UpAndDownArrows = ({ className }) =>
    <Icon
        className={ cx('Icons-up-and-down-arrows', className) }
        id={ ICON_IDS.UP_AND_DOWN_ARROWS }
    />;

export default UpAndDownArrows;

UpAndDownArrows.propTypes = {
    className: PropTypes.string
};
