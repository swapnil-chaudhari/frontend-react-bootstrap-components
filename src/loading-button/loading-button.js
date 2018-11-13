import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import LoadingIndicator from '../loading-indicator/loading-indicator';

const LoadingButton = (props) => {
    const { loading, ...rest } = props;
    let { disabled, ...buttonProps } = rest;

    let visibility = 'visible';
    if (loading) {
        visibility = 'hidden';
        disabled = true;
    }

    return (
        <Button { ...buttonProps } disabled={ disabled } >
            { loading && <LoadingIndicator small={ true } top={ 7 } /> }
            <span style={ { visibility } }>{ props.children }</span>
        </Button>
    );
};

LoadingButton.displayName = 'LoadingButton';

LoadingButton.propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
};

export default LoadingButton;
