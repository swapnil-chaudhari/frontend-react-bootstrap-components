import PropTypes from 'prop-types';
import React from 'react';
import CompleteCheckmark from 'src/icons/complete-checkmark';
import IncompleteAlert from 'src/icons/incomplete-alert';
import './dismissible-alert.scss';

const DismissibleAlert = ({
    style,
    titleText,
    subtitleText,
    buttonText,
    onDismiss,
    description
}) => {
    const containerHighClass = description ? ' DismissibleAlert-high' : '';
    const buttonHighClass = description ? ' DismissibleAlert-high-button' : '';
    return (
        <div className={ `DismissibleAlert DismissibleAlert-${style}${containerHighClass}` }>
            { style === 'success' ? <CompleteCheckmark /> : <IncompleteAlert /> }
            <div className={ `DismissibleAlert-${style}-titles` }>
                <h3 className={ `DismissibleAlert-${style}-title` }>{ titleText }</h3>
                <p className={ `DismissibleAlert-${style}-subtitle` }>{ subtitleText }</p>
                { description &&
                    <div className={ `DismissibleAlert-${style}-description` }>
                        { description }
                    </div>
                }
            </div>
            { buttonText &&
                (<button
                    className={ `DismissibleAlert-${style}-button${buttonHighClass}` }
                    onClick={ onDismiss }
                >
                    { buttonText }
                </button>)
            }
        </div>
    );
};

DismissibleAlert.propTypes = {
    style: PropTypes.oneOf([
        'danger', 'default', 'success', 'warning'
    ]),
    titleText: PropTypes.string.isRequired,
    subtitleText: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired,
    description: PropTypes.any
};

DismissibleAlert.defaultProps = {
    style: 'default',
    buttonText: 'DISMISS',
    description: null
};

DismissibleAlert.displayName = 'DismissibleAlert';

export default DismissibleAlert;
