import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';
import cx from 'classnames';

const FilledChevronDown = ({ className }) =>
    <Icon
        className={ cx('Icons-filled-chevron-down', className) }
        id={ ICON_IDS.FILLED_CHEVRON_DOWN }
    />;

FilledChevronDown.propTypes = {
    className: PropTypes.string
};

export default FilledChevronDown;
