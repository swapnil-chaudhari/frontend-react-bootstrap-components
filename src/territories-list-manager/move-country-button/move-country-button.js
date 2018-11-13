import PropTypes from 'prop-types';
import React from 'react';
import ThreeArrowsIcon from './three-arrows-icon';
import './move-country-button.scss';

const MoveCountryButton = (
    {
        thisListType,
        theOtherListType,
        selectedCountriesNumber,
        onCountryMove,
        theOtherListLabel,
        forward,
        formatMessage,
        messages
    },
) => {
    const handleCountryMove = () =>
        onCountryMove(thisListType, theOtherListType);
    return (
        <div className="MoveCountryButton" onClick={ handleCountryMove }>
            <ThreeArrowsIcon
                reversed={ true }
                isHidden={ forward }
            />
            <div className="MoveCountryButton-text">
                <p>
                    { formatMessage(messages.moveSelectedLabel) }
                    { ` (${selectedCountriesNumber})` }
                </p>
                <p>
                    { formatMessage(messages.moveToLabel) }
                    <b>
                        { ` ${theOtherListLabel}` }
                    </b>
                </p>
            </div>
            <ThreeArrowsIcon
                reversed={ false }
                isHidden={ !forward }
            />
        </div>
    );
};

MoveCountryButton.propTypes = {
    thisListType: PropTypes.string.isRequired,
    theOtherListType: PropTypes.string.isRequired,
    selectedCountriesNumber: PropTypes.number.isRequired,
    onCountryMove: PropTypes.func,
    theOtherListLabel: PropTypes.string.isRequired,
    forward: PropTypes.bool.isRequired,
    formatMessage: PropTypes.func.isRequired,
    messages: PropTypes.object.isRequired
};

export default MoveCountryButton;
