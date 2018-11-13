import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';
import cx from 'classnames';

const GoToCatalog = ({ className }) =>
    <Icon
        className={ cx('Icons-go-to-catalog', className) }
        id={ ICON_IDS.GO_TO_CATALOG }
    />;

GoToCatalog.propTypes = {
    className: PropTypes.string
};

export default GoToCatalog;
