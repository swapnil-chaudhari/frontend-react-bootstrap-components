import React from 'react';
import PropTypes from 'prop-types';
import LogoAndName from 'src/icons/logo-and-name';
import Maintenance from 'src/icons/maintenance';
import './maintenance-screen.scss';

const MaintenanceScreen = ({ title: { text, time, timeZone }, subTitle }) => (
    <div className="MaintenanceScreen">
        <div className="MaintenanceScreen-logo">
            <LogoAndName />
        </div>
        <div className="MaintenanceScreen-content">
            <div className="MaintenanceScreen-graphic">
                <Maintenance />
            </div>
            <p className="MaintenanceScreen-title">
                { text }&nbsp;
                <span className="MaintenanceScreen-highlighted">{ time }</span>
                { timeZone }
            </p>
            <p className="MaintenanceScreen-subtitle">
                { subTitle }
            </p>
        </div>
    </div>
);

MaintenanceScreen.displayName = 'MaintenanceScreen';

MaintenanceScreen.propTypes = {
    title: PropTypes.shape({
        text: PropTypes.string,
        time: PropTypes.string,
        timeZone: PropTypes.string,
    }),
    subTitle: PropTypes.any
};
MaintenanceScreen.defaultProps = {
    title: {
        text: 'We\'re down for maintenance. We\'ll be back up by',
        time: '2 AM ',
        timeZone: 'EST.'
    },
    subTitle: 'Sorry for any inconvenience.'
};

export default MaintenanceScreen;
