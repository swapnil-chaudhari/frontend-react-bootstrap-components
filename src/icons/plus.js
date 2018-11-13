import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';

const Plus = () => (
    <Icon id={ ICON_IDS.PLUS } className={ "Icons-plus" } />
);

Plus.propTypes = {
    onClick: PropTypes.func
};

export default Plus;
