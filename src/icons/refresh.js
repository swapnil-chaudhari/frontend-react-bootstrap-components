import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';

const Refresh = () => (
    <Icon id={ ICON_IDS.REFRESH } className={ "Icons-refresh" } />
);

Refresh.propTypes = {
    onClick: PropTypes.func
};

export default Refresh;
