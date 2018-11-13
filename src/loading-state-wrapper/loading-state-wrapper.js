import PropTypes from 'prop-types';
import React from 'react';
import { LoadingIndicator } from 'src/index';

const LoadingStateWrapper = ({ isLoading, children }) => {
    if (isLoading)
        return <LoadingIndicator />;
    return children;
};

LoadingStateWrapper.displayName = 'LoadingStateWrapper';

LoadingStateWrapper.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired
};

export default LoadingStateWrapper;
