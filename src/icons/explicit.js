import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';

const Explicit = ({ className }) =>
    <Icon className={ cx('Icons-explicit', className) } id={ ICON_IDS.EXPLICIT } />;

export default Explicit;

Explicit.propTypes = {
    className: PropTypes.string
};
