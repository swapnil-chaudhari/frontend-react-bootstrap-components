import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import './toggle-input.scss';


export const ToggleInput = ({
    qaid,
    className,
    leftLabel,
    rightLabel,
    leftValue,
    rightValue,
    value,
    onClick
}) => {
    const mainClassName = cx('ToggleInput', className);

    let left = false;
    if (leftValue === value)
        left = true;

    const toggleClassName = cx('ToggleInput-toggle', {
        'ToggleInput-toggle-left': left,
        'ToggleInput-toggle-right': !left,
    });

    const labelLeftClassName = cx('ToggleInput-label', {
        'ToggleInput-label-enabled': left
    });

    const labelRightClassName = cx('ToggleInput-label', {
        'ToggleInput-label-enabled': !left
    });

    let toggledValue = leftValue;
    if (leftValue === value)
        toggledValue = rightValue;

    return (
        <div id={ qaid } className={ mainClassName }>
            <div className={ labelLeftClassName } onClick={ () => onClick(leftValue) }>
                { leftLabel }
            </div>
            <div className="ToggleInput-toggle-bg" onClick={ () => onClick(toggledValue) }>
                <div className={ toggleClassName } />
            </div>
            <div className={ labelRightClassName } onClick={ () => onClick(rightValue) }>
                { rightLabel }
            </div>
        </div>
    );
};

ToggleInput.displayName = 'ToggleInput';

ToggleInput.propTypes = {
    leftLabel: PropTypes.string,
    rightLabel: PropTypes.string,
    leftValue: PropTypes.any.isRequired,
    rightValue: PropTypes.any.isRequired,
    qaid: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ToggleInput;
