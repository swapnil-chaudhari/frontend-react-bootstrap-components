import PropTypes from 'prop-types';
import React from 'react';
import ChartContainer from './chart-container';
import LoadingIndicator from 'src/loading-indicator/loading-indicator';
import ChartGraph from './chart-graph';

export const ChartInteractive = props => (
    <div className="ChartInteractive">
        <ChartContainer>
            <ChartGraph { ...props } />
        </ChartContainer>
        { props.isLoading && <div className="Graph-indicator-container">
            <LoadingIndicator />
        </div>
        }
    </div>
);

ChartInteractive.propTypes = {
    isLoading: PropTypes.bool
};

export default ChartInteractive;
