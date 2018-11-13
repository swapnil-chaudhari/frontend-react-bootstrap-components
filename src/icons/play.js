import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';

const Play = ({ onClick }) => (
    <Icon id={ ICON_IDS.PLAY } className={ "Icons-play" } onClick={ onClick } />
);

Play.propTypes = {
    onClick: PropTypes.func
};

export default Play;
