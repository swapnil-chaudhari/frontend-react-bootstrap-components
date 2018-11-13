import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';
import cx from 'classnames';

const Advertise = ({ className }) =>
    <Icon
        className={ cx('Icons-advertise', className) }
        id={ ICON_IDS.ADVERTISE }
    />;

Advertise.propTypes = {
    className: PropTypes.string
};

export default Advertise;
