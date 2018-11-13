import PropTypes from 'prop-types';
import React from 'react';
import './snapshot.scss';

const Snapshot = ({ children }) => (
    <div className="Snapshot">
        { children }
    </div>
);

Snapshot.displayName = 'Snapshot';

Snapshot.propTypes = {
    children: PropTypes.any
};

export default Snapshot;
