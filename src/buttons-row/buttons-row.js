import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'src/index';
import cx from 'classnames';
import includes from 'lodash.includes';
import './buttons-row.scss';

class ButtonsRow extends Component {
    /**
     * @description
     * ChildrenElements expected to be next format:
     * childElements: [{ icon: <Chevron />, text: 'button text' }],
     */
    static propTypes = {
        childElements: PropTypes.array.isRequired,
        className: PropTypes.string,
        onSelect: PropTypes.func,
        disabled: PropTypes.bool,
        selectedIndex: PropTypes.number,
        selectedIndexes: PropTypes.arrayOf(
            PropTypes.number
        ),
        /**
         * - If false, width of each button inside relies on content of the button
         * - If true, width of each button will be 100% of width of ButtonsRow,
         *   divided by number of buttons
         */
        autoSetWidth: PropTypes.bool,
        bsStyle: PropTypes.oneOf([
            'default', 'primary', 'success', 'info', 'warning', 'danger', 'link'
        ]),
        bsSize: PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']),
        multi: PropTypes.bool
    };

    static defaultProps = {
        bsStyle: 'default',
        bsSize: 'large',
        disabled: false,
        autoSetWidth: true,
        selectedIndexes: [],
        multi: false
    };

    handleButtonClick = (index, element) => () => {
        const { onSelect } = this.props;

        if (onSelect)
            onSelect(element, index);
    };

    _renderChildElements = () => {
        const {
            childElements,
            selectedIndex,
            selectedIndexes,
            bsStyle,
            bsSize,
            disabled,
            autoSetWidth,
            multi
        } = this.props;
        const buttonWidth = `${100 / Math.max(1, childElements.length)}%`;

        return childElements.map((element, index) => {
            const { icon = null, text = null, id = null, className = null } = element;
            const buttonClass = cx(
                {
                    'ButtonsRow-active': multi ?
                        includes(selectedIndexes, index) :
                        index === selectedIndex
                },
                className
            );
            const buttonProps = {
                type: 'button',
                className: buttonClass,
                style: autoSetWidth ? { width: buttonWidth } : null,
                bsStyle,
                bsSize,
                disabled,
                onClick: this.handleButtonClick(index, element)
            };

            if (id)
                buttonProps.id = id;

            return (
                <Button key={ index } { ...buttonProps }>
                    { icon }
                    <div className="ButtonsRow-text">{ text }</div>
                </Button>
            );
        });
    };

    render() {
        const { className, bsSize } = this.props;

        return (
            <ButtonGroup bsSize={ bsSize } className={ cx('ButtonsRow', className) }>
                { this._renderChildElements() }
            </ButtonGroup>
        );
    }
}

export default ButtonsRow;
