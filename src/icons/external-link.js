import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';

const ExternalLink = ({ className }) =>
    <Icon className={ cx('Icons-external-link', className) } id={ ICON_IDS.EXTERNAL_LINK } />;

export default ExternalLink;

ExternalLink.propTypes = {
    className: PropTypes.string
};
