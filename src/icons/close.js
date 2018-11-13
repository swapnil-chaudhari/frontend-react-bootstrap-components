import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';
import cx from 'classnames';

const propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

const Close = ({ className, onClick }) =>
    <Icon
        className={ cx('Icons-close', className) }
        id={ ICON_IDS.CLOSE }
        onClick={ onClick }
    />;

export default Close;

Close.propTypes = propTypes;
