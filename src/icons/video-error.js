import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'src/index';
import { ICON_IDS } from 'src/svg-definitions/svgs';
import cx from 'classnames';

const VideoError = ({ className }) =>
    <Icon
        className={ cx('Icons-video-error', className) }
        id={ ICON_IDS.VIDEO_ERROR }
    />;

VideoError.propTypes = {
    className: PropTypes.string
};

export default VideoError;
