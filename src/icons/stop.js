import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';

const Stop = ({ onClick }) => (
    <Icon id={ ICON_IDS.STOP } className={ "Icons-stop" } onClick={ onClick } />
);

Stop.propTypes = {
    onClick: PropTypes.func
};

export default Stop;
