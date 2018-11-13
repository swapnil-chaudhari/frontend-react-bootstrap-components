import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';

const CleanVersion = ({ className }) =>
    <Icon className={ cx('Icons-clean-version', className) } id={ ICON_IDS.CLEAN_VERSION } />;

export default CleanVersion;

CleanVersion.propTypes = {
    className: PropTypes.string
};
