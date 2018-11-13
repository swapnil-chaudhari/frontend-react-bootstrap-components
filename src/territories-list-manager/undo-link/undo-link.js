import PropTypes from 'prop-types';
import React from 'react';
import Close from 'src/icons/close';
import './undo-link.scss';

const UndoLink = (
    { handleUndoChanges, handleNotificationClose, movedCountriesNumber, formatMessage, messages },
) => (
    <div className="UndoLink">
        <span>
            <span>
                { `${movedCountriesNumber} ${formatMessage(messages.undoDescription)}` }
            </span>
            <span className="UndoLink-link btn btn-link" onClick={ handleUndoChanges }>
                { formatMessage(messages.undoLabel) }
            </span>
        </span>

        <Close onClick={ handleNotificationClose } />
    </div>
);

UndoLink.propTypes = {
    movedCountriesNumber: PropTypes.number,
    handleUndoChanges: PropTypes.func,
    handleNotificationClose: PropTypes.func,
    formatMessage: PropTypes.func.isRequired,
    messages: PropTypes.object.isRequired
};

export default UndoLink;

