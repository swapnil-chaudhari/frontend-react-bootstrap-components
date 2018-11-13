import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'src/index';
import './full-width-button.scss';

const FullWidthButton = ({
    handleClick,
    buttonContent,
    disabled,
    disabledLayout,
    note
}) => (
    <div className="FullWidthButton">
        <div className="FullWidthButton-button-container">
            {
                (disabled && disabledLayout) ? (
                    <div className="FullWidthButton-disabled-layout">
                        { disabledLayout }
                    </div>
                ) : (
                    <Button
                        className="FullWidthButton-button"
                        onClick={ handleClick }
                        disabled={ disabled }
                    >
                        { buttonContent }
                    </Button>
                )
            }
        </div>
        {
            note && (
                <div className="FullWidthButton-add-note">
                    { note }
                </div>
            )
        }
    </div>
);

FullWidthButton.defaultProps = { disabled: false };
FullWidthButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    buttonContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    note: PropTypes.string,
    disabled: PropTypes.bool,
    disabledLayout: PropTypes.element
};

export default FullWidthButton;
