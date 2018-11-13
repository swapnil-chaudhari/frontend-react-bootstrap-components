import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';
import cx from 'classnames';

const FilledChevronUp = ({ className }) =>
    <Icon
        className={ cx('Icons-filled-chevron-up', className) }
        id={ ICON_IDS.FILLED_CHEVRON_UP }
    />;

FilledChevronUp.propTypes = {
    className: PropTypes.string
};

export default FilledChevronUp;
